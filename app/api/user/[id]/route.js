import { NextResponse } from "next/server";
import User from "@/models/User";
import { getIpAddress } from "@/utils/back/others";


export const GET = async (req, { params }) => {
    const userRole = req.nextUrl.searchParams.get('role');
    const userId = params.id;
    const ip = getIpAddress();

    try {
        const user = await User.findById(userId);
        if (!user.views.includes(ip)) {
            const copy = [...user.views];
            copy.push(ip)
            user.views = copy;
            let save = await user.save();
        }
        return NextResponse.json(user, { status: 200 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ type: 'operation', result: 'invalid' }, { status: 401 })
    }
}
