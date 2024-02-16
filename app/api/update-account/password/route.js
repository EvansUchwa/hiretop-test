import { NextResponse } from "next/server";
import { simpleMiddleware } from "../../simpleMiddleware";
import User from "@/models/User";
const bcrypt = require("bcrypt");


export const PUT = await simpleMiddleware(async (req) => {
    const { userConnectedId } = req;

    const body = await req.json();
    const { currentPassword, newPassword } = body;
    try {
        const user = await User.findById(userConnectedId);
        const comparePwds = await bcrypt.compare(currentPassword, user.password)
        if (!comparePwds) {
            NextResponse.json({ type: 'password', result: 'invalid' }, { status: 401 })
        }
        const hashPass = await bcrypt.hash(newPassword, 12);
        user.password = hashPass;
        await user.save();
        return NextResponse.json('ok', { status: 200 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ type: 'operation', result: 'invalid' }, { status: 401 })
    }
})
