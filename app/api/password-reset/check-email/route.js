import { NextResponse } from "next/server";
import User from "@/models/User";
import { mailSetter } from "@/utils/back/email";
import { changePasswordEmail } from "@/utils/back/email/templates";
const bcrypt = require("bcrypt");


export const POST = async (req) => {
    const body = await req.json();
    const { email } = body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            NextResponse.json({ type: 'email', result: 'invalid' }, { status: 401 })
        }
        const emailToken = await bcrypt.hash(email + 'hiretop', 12);
        user.resetPasswordToken = emailToken;
        await user.save();

        mailSetter('Reinitialisation de mot de passe',
            changePasswordEmail(origin + '/password-reset?token=' + emailToken),
            email)
        return NextResponse.json('ok', { status: 200 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ type: 'operation', result: 'invalid' }, { status: 401 })
    }
}
