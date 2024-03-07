import prisma from "./prisma"

export async function createUser(name: string, email: string, password: string) {
    await prisma.user.create({
        data: {
            name: name, 
            email: email,
            password: password,
            role: email === process.env.ADMIN_EMAIL ? "admin" : "user"
        }
    }) 
}

export async function getUserByEmail(email: string) {
    return await prisma.user.findUnique({
        where: {
            email: email
        }
    })
}