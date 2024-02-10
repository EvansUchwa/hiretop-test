import { NextResponse } from "next/server";
import User from "@/models/User";

export const GET = async (req, { params }) => {
    const userRole = req.nextUrl.searchParams.get('role');
    const userId = params.id;

    // lo
    try {
        const user = await User.findById(userId);
        return NextResponse.json(user, { status: 200 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ type: 'operation', result: 'invalid' }, { status: 401 })
    }
}
