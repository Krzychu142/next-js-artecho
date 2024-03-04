import { SignupData, validateSignupData } from "@/lib/signup/validate-signup-data";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {

    const signupData: SignupData = await req.json()
    const validationResult = await validateSignupData(signupData);

    if (validationResult) {
        return validationResult;
    }

    try {

        // create token for verification email 
        // try to send an email with link-in token (for verification)
        // if success save user in db 

        return Response.json({
            message: "Verification link sent to email."
        }, {status: 200});

    } catch (error) {

        console.log(error, "error")
        
        return Response.json({
            message: "Ups... something goes wrong. Pleas try later."
        }, {status: 500});
    }
}