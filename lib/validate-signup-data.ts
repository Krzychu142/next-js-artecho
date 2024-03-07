import { isEmailValidation } from "./helpers/email-validation";
import { getUserByEmail } from "./user";

export interface SignupData  {
    fullName: string;
    email: string;
    password: string;
    confirmPassword: string;
    approval: boolean;
}

export async function validateSignupData(data: SignupData): Promise<Response | null>{

    const { fullName, email, password, confirmPassword, approval } = data;

    if(!fullName || fullName.trim() === "") {
        return Response.json({
            message: "Full name can't be empty."
        }, {status: 422});
    }

    if(!isEmailValidation(email)) {
        return Response.json({
            message: "Incorrect or empty email."
        }, {status: 422});
    }

    const user = await getUserByEmail(email)

    if(user && !user.emailVerified) {
        return Response.json({
            message: "You need to confirm your email. If you did not receive the message, please contact support."
        }, {status: 409})
    }

    if(user) {
        return Response.json({
            message: "The account with this email already exists."
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

    if(!approval) {
        return Response.json({
            message: "Accept the regulations before registration."
        }, {status: 422});
    }

    return null;
}