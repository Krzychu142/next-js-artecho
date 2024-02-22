import prisma from "./prisma";

export async function isEmailInBase(email: string): Promise<boolean> {
    return !!(await prisma.newsletterSubscribers.findUnique({
        where: { email }
    }));
}

export async function saveEmailToDatabase(email: string): Promise<void> {
    await prisma.newsletterSubscribers.create({
        data: {
            email: email
        }
    });
}