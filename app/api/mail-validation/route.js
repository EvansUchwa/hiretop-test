import { NextResponse } from "next/server";
import DB_CONNEXION from "@/utils/back/database";
import User from "../../../models/User";

export async function PUT(req) {
    await DB_CONNEXION();
    const body = await req.json();

    try {
        const checkUserToken = await User.findOne({ emailToken: body.token });
        console.log(body.token);
        if (checkUserToken) {
            checkUserToken.emailVerified = true;
            await checkUserToken.save();
            return NextResponse.json('ok', { status: 200 })
        } else {
            return NextResponse.json({ email: 'notValidated' }, { status: 401 })
        }
    } catch (error) {
        return NextResponse.json({ type: 'operation', result: 'invalid' }, { status: 401 })
    }

}
