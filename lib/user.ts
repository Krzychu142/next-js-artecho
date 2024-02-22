import prisma from "./prisma";

export async function isEmailInBase(email: string): Promise<boolean> {
    return !!(await prisma.user.findUnique({
        where: { email }
    }));
}
