import { NextResponse } from "next/server";
import User from "@/models/User";
import { mailSetter } from "@/utils/back/email";
import { changePasswordEmail } from "@/utils/back/email/templates";
import absoluteUrl from 'next-absolute-url';
import DB_CONNEXION from "@/utils/back/database";
const bcrypt = require("bcrypt");


export const POST = async (req) => {
    const body = await req.json();
    const { email } = body;
    const { origin } = absoluteUrl(req);

    await DB_CONNEXION();
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return NextResponse.json({
                type: 'email',
                result: 'notFound'
            }, { status: 401 });
        }

        const emailToken = await bcrypt.hash(email + 'hiretop', 12);
        user.resetPasswordToken = emailToken;
        await user.save();

        const sendmail = await mailSetter('Reinitialisation de mot de passe',
            changePasswordEmail(origin + '/reset-password/new-password?token=' + emailToken),
            email)
        return NextResponse.json('ok', { status: 200 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ type: 'operation', result: 'invalid' }, { status: 401 })
    }
}
