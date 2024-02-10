import User from "../../../models/User";
import { NextResponse } from "next/server";
import { simpleMiddleware } from "../simpleMiddleware";

export const GET = simpleMiddleware(async (req) => {
    const { userConnectedId } = req;
    console.log(userConnectedId);
    // return NextResponse.json('ok', { status: 200, })
    try {
        const user = await User.findById(userConnectedId);
        if (!user)
            return NextResponse.json({ type: 'operation', result: 'invalid' }, { status: 401 })

        return NextResponse.json(user, { status: 200 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ type: 'operation', result: 'invalid' }, { status: 401 })
    }
})
