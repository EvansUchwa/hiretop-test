import { NextResponse } from "next/server";
import JobApply from "@/models/JobApply";
import { simpleMiddleware } from "@/app/api/simpleMiddleware";

export const GET = simpleMiddleware(async (req) => {
    // let userId = req.nextUrl.searchParams.get('userId');
    const { userConnectedId } = req;
    let limit = req.nextUrl.searchParams.get('limit');

    let baseRequest = JobApply.find({ talent: userConnectedId });

    if (limit) {
        baseRequest = baseRequest.limit(limit)
    }
    try {
        const jobs = await baseRequest.populate({
            path: 'job', populate: {
                path: 'autor'
            }
        });
        return NextResponse.json(jobs, { status: 200 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ type: 'operation', result: 'invalid' }, { status: 401 })
    }
})
