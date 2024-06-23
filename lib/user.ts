import prisma from "./prisma";

export async function isEmailInBase(email: string): Promise<boolean> {
    return !!(await prisma.user.findUnique({
        where: { email }
    }));
}

export async function getUserWithAccounts(email: string) {
    return prisma.user.findUnique({
        where: {email},
        include: {accounts: true}
    });
}