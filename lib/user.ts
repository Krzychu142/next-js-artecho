import { PrismaClient } from "@prisma/client/extension";
import { createHash } from "./crypt";
import { sendEmailWithVerificationToken } from "./email";
import prisma from "./prisma";
import { createVerificationToken } from "./verification-token";

export async function isEmailInBase(email: string, prisma?: PrismaClient): Promise<boolean> {
    return !!(await prisma.user.findUnique({
        where: { email }
    }));
}

export async function createUser(name: string, email: string, password: string, approval: boolean, prisma?: PrismaClient) {
    const hashedPassword = createHash(password);

    return await prisma.user.create({
        data: {
            name,
            email,
            password: hashedPassword,
            approval,
            role: email === process.env.ADMIN_EMAIL ? "admin" : "user"
        }
    })
}


export async function registerUser(fullName: string, email: string, password: string, approval: boolean) {
    const hashedPassword = createHash(password);

    try {
        const result = await prisma.$transaction(async (transactionPrisma) => {

            if (await isEmailInBase(email)) {
                throw new Error("The account with this email already exists.");
            }

            const user = createUser(fullName, email, hashedPassword, approval, transactionPrisma)


            const verificationToken = await createVerificationToken(email);


            const verificationUrl = `https://yourdomain.com/verify?token=${verificationToken.token}`;
            await sendEmailWithVerificationToken(email, verificationUrl, verificationToken.expires, transactionPrisma);

            return user;
        });

        return {
            success: true,
            message: 'Verification link sent to email.',
            user: result
        };
    } catch (error) {
        return {
            success: false,
            message: 'Ups... something goes wrong. Please try later.'
        };
    }
}