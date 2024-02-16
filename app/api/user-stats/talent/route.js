import { NextResponse } from "next/server";
import JobApply from "@/models/JobApply";
import { simpleMiddleware } from "../../simpleMiddleware";

export const GET = await simpleMiddleware(async (req) => {
    const { userConnectedId } = req;
    try {
        const applysCount = await JobApply.find({ talent: userConnectedId });
        const applysAcceptedCount = applysCount.filter((item) => item.status == 'accepted').length;
        const applysRejectedCount = applysCount.filter((item) => item.status == 'rejected').length;
        const applysOnPendingCount = applysCount.filter((item) => item.status == 'pending').length;

        return NextResponse.json({
            applysCount: applysCount.length, applysAcceptedCount, applysRejectedCount, applysOnPendingCount
        }, { status: 200 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ type: 'operation', result: 'invalid' }, { status: 401 })
    }
})
