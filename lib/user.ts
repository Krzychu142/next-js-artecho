import prisma from "./prisma"

export async function createUser(name: string, email: string, password: string) {
    try {
        await prisma.user.create({
            data: {
                name: name, 
                email: email,
                password: password,
                role: email === process.env.ADMIN_EMAIL ? "admin" : "user"
            }
        }) 
    } catch (error) {
        throw new Error("Error when creating user")
    }
}