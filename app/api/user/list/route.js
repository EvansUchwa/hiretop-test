import User from "@/models/User";
import { NextResponse } from "next/server";

export const GET = async (req) => {
    const role = req.nextUrl.searchParams.get('role');
    try {
        const users = await User.find({ role });
        return NextResponse.json(users, { status: 200 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ type: 'operation', result: 'invalid' }, { status: 401 })
    }
}
