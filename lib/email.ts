import { PrismaClient } from "@prisma/client/extension";

const nodemailer = require("nodemailer");

export const transporter = nodemailer.createTransport({
    host: 'smtp-mail.outlook.com',
    port: 587,
    secure: false,
    tls: {
        ciphers: 'SSLv3',
    },
    auth: {
        user: process.env.EMAIL_ADDRESS!,
        pass: process.env.EMAIL_PASSWORD!,
    },
})

export const  sendEmailWithVerificationToken = async (email: string, verificationUrl: string, expires: Date, prisma?: PrismaClient) => {
    const mailOptions = {
        from: 'kustosz142@gmail.com',
        to: email,
        subject: "Email verification",
        html: `Someone registered from this email. If that's you, click on this link to confirm your email. 
        The link is valid for ${expires} hours after you receive the email.  <a href="${verificationUrl}">${verificationUrl}</a>`
    };

    try {
        return await transporter.sendMail(mailOptions);
    } catch (error) {
        return error
    }
    
}