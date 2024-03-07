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

export function prepareEmailVerificationMessage(token: string, expires: Date) {
    return {
        subject: 'ArtEcho | Welcome | Email verification',
        html: `Welcom in ArtEcho. To confirm your email click on the link below: ${`${process.env.NEXT_PUBLIC_URL!}/auth/verifi?token=${token}`}. You have until ${expires}. If that's not you, ignore these messages.`
    }
}


export async function sendEmail(to: string, subject: string, html: string) {
    
    const mailOptions = {
        // ONLY TO TEST TO THROW AN ERROR from: "kustosz142@gmail.com",
        from: 'krzysztofradzieta@outlook.com',
        to: to, 
        subject: subject,
        html: html
    }

    try { 
        const result = await transporter.sendMail(mailOptions);
        return result
    } catch (error) {
        throw new Error("Email send error")
    }

}