import { createHash } from "@/lib/crypt";
import { prepareEmailVerificationMessage, sendEmail } from "@/lib/email";
import { createUser } from "@/lib/user";
import { SignupData, validateSignupData } from "@/lib/validate-signup-data";
import { createVerificationToken } from "@/lib/verification-token";
import { NextRequest } from "next/server";
import { v4 as uuidv4 } from 'uuid';


export async function POST(req: NextRequest) {

    const signupData: SignupData = await req.json()
    const validationResult = await validateSignupData(signupData);

    if (validationResult) {
        return validationResult;
    }

    try {
        const email = signupData.email
        const verificationToken = uuidv4();
        // INFO: 24 is the number of hours of the token vaild 
        const expires = new Date(Date.now() + 24 * 3600000);

        const {subject, html} = prepareEmailVerificationMessage(verificationToken, expires)

        await sendEmail(email, subject, html); 
        await createVerificationToken(email, verificationToken, expires)

        const hashedPassword = createHash(signupData.password)
        await createUser(signupData.fullName, email, hashedPassword)

        return Response.json({
            message: "Verification link sent to email."
        }, {status: 200});

    } catch (error) {
        console.log(error)

        return Response.json({
            message: "Ups... something goes wrong. Pleas try later."
        }, {status: 500});
    }
}