// import { errorResponse, successResponse } from "../../../utils/back/requestResponse";
import DB_CONNEXION from "@/utils/back/database";
import User from "../../../models/User";
import { NextResponse } from "next/server";
const bcrypt = require("bcrypt");
import { SignJWT } from 'jose'
import { getJwtSecret } from "@/utils/back/jwt";

export async function POST(req) {
    const body = await req.json()
    const { email, password } = body
    await DB_CONNEXION();
    try {
        const userExist = await User.findOne({ email });
        if (userExist && userExist._id) {
            if (userExist.emailVerified == true) {
                const comparePwds = await bcrypt.compare(password, userExist.password)

                if (comparePwds) {
                    const logCount = userExist.logCount;
                    userExist.logCount = logCount + 1;
                    await userExist.save()
                    var token = await new SignJWT({ userId: userExist._id, userRole: userExist.role ? userExist.role : null })
                        .setProtectedHeader({ alg: 'HS256' })
                        .setIssuedAt()
                        .sign(getJwtSecret());
                    return NextResponse.json({
                        token
                    }, { status: 200 })
                } else {
                    return NextResponse.json({ type: 'password', result: 'incorrect' }, { status: 400 })
                }
            }
            return NextResponse.json({ type: 'email', result: 'notVerified' }, { status: 400 })
        } else {
            return NextResponse.json({ type: 'email', result: 'notFound' }, { status: 400 })
        }
    } catch (error) {
        console.log(error)
        return NextResponse.json({ type: 'operation', result: 'invalid' }, { status: 401, })
    }
}
