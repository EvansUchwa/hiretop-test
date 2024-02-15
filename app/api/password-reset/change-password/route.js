import { NextResponse } from "next/server";
import { simpleMiddleware } from "../../simpleMiddleware";
import User from "@/models/User";
const bcrypt = require("bcrypt");

export const POST = async (req) => {
    const body = await req.json();
    const { token, newPassword } = body;
    try {
        const user = await User.findOne({ resetPasswordToken: token });
        if (!user) {
            NextResponse.json({ type: 'operation', result: 'invalid' }, { status: 401 })
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