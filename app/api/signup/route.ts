import { isEmailValidation } from "@/lib/email-validation";
import { isEmailInBase } from "@/lib/user";
import { NextRequest } from "next/server";


export async function POST(req: NextRequest) {

    const {fullName, email, password, confirmPassword, approval} = await req.json()

    if(!fullName || fullName.trim() === "" ) {
        return Response.json({
            message: "Full name can't be empty."
        }, {status: 422});
    }

    if(!isEmailValidation(email)) {
        return Response.json({
            message: "Incorrect or empty email."
        }, {status: 422});
    }

    if(await isEmailInBase(email)) {
        return Response.json({
            message: "The account with this email already exists.."
        }, {status: 409})
    }

    if(!password || password.trim() === "" || password.length < 6) {
        return Response.json({
            message: "Password must at least six characters."
        }, {status: 422});
    }

    if(password !== confirmPassword) {
        return Response.json({
            message: "The password and password confirmation must be the same."
        }, {status: 422});
    }

    return Response.json({
        message: "Welcome in the club."
    }, {status: 200});
}