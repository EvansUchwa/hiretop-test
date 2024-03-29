import { NextResponse } from "next/server";
import User from "@/models/User";
import DB_CONNEXION from "@/utils/back/database";
const bcrypt = require("bcrypt");

export const POST = async (req) => {
    const body = await req.json();
    const { token, newPassword } = body;

    await DB_CONNEXION();
    try {
        const user = await User.findOne({ resetPasswordToken: token });
        if (!user) {
            return NextResponse.json({ type: 'email', result: 'notFound' }, { status: 401 })
        }

        const hashPass = await bcrypt.hash(newPassword, 12);
        user.password = hashPass;
        await user.save();
        return NextResponse.json('ok', { status: 200 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ type: 'operation', result: 'invalid' }, { status: 401 })
    }
};