// import { errorResponse, successResponse } from "../../../utils/back/requestResponse";
import DB_CONNEXION from "@/utils/back/database";
import User from "../../../models/User";
import { NextResponse } from "next/server";
const bcrypt = require("bcrypt");
import uniqid from 'uniqid';
import { mailSetter } from "@/utils/back/email";
import { welcomeEmail } from "@/utils/back/email/templates";
import absoluteUrl from 'next-absolute-url'


export async function POST(req) {
    const body = await req.json()
    const { email, password } = body;
    const { origin } = absoluteUrl(req);
    await DB_CONNEXION();
    try {
        const hashPass = await bcrypt.hash(password, 12);
        const hashMail = await bcrypt.hash(email, 12);
        const emailToken = 'w-t-hiretop-' + hashMail;

        const findExistingEmail = await User.findOne({ email });

        if (findExistingEmail)
            return NextResponse.json({ type: 'email', result: 'alreadyExist' }, { status: 401 })

        const newUser = await User.create({
            email, emailToken, password: hashPass,
            identifier: uniqid('ht-')
        });
        let sendMail = await mailSetter('Validation de votre adresse email', welcomeEmail(origin + '/mail-validation?token=' + emailToken), email)
        return NextResponse.json('ok', { status: 200 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ type: 'operation', result: 'invalid' }, { status: 401 })
    }
}
