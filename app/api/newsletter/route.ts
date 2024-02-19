import { isEmailInBase, saveEmailToDatabase } from "@/lib/newsletter";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {

    const {email} = await req.json()

    if (!email || email.trim() === "" || !email.includes("@")) {
        return Response.json({
            message: "Invalid email address provided."
        }, {status: 400})
    }

    if(await isEmailInBase(email)) {
        return Response.json({
            message: "Email already subscribe newsletter."
        }, {status: 409})
    }

    try {
        await saveEmailToDatabase(email);
        return Response.json({
            message: "Welcome in the club."
        }, {status: 200});
    } catch (error) {
        return Response.json({
            message: "Ups... something goes wrong. Pleas try later."
        }, {status: 500});
    }

}