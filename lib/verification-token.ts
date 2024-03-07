import prisma from './prisma';
import { verificationTokenType } from '@/types/VerificationTokenType';

export async function createVerificationToken(userEmail: string, verificationToken: string, expires: Date): Promise<verificationTokenType> {

    try {
        const token = await prisma.verificationToken.create({
            data: {
                identifier: userEmail,
                token: verificationToken,
                expires: expires,
            },
        });

        return token;
    } catch (error) {
        throw new Error();
    }

}

export async function findVerificationToken(token: string): Promise<verificationTokenType|null> {
    const tokenInfo = await prisma.verificationToken.findUnique({
        where: {
            token: token
        }
    })

    return tokenInfo;
}