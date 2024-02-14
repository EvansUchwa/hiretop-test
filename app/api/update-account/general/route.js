import { NextResponse } from "next/server";
import { simpleMiddleware } from "../../simpleMiddleware";
import User from "@/models/User";
import absoluteUrl from 'next-absolute-url'

export const PUT = simpleMiddleware(async (req) => {
    const { userConnectedId } = req;
    const { origin } = absoluteUrl(req);
    const body = await req.json();
    try {
        const user = await User.findByIdAndUpdate(userConnectedId, body);
        return NextResponse.json('ok', { status: 200 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ type: 'operation', result: 'invalid' }, { status: 401 })
    }
})
