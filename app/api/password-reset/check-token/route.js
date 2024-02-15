import { NextResponse } from "next/server";
import User from "@/models/User";
import DB_CONNEXION from "@/utils/back/database";
const bcrypt = require("bcrypt");

export const POST = async (req) => {
    const body = await req.json();
    const { token } = body;

    await DB_CONNEXION();
    try {
        const user = await User.findOne({ resetPasswordToken: token });
        if (!user) {
            return NextResponse.json({ type: 'email', result: 'notFound' }, { status: 401 })
        }
        return NextResponse.json('ok', { status: 200 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ type: 'operation', result: 'invalid' }, { status: 401 })
    }
};