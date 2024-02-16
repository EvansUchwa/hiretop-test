import { NextResponse } from "next/server";
import { simpleMiddleware } from "../../../simpleMiddleware";
import Job from "@/models/Job";
import { getJobFinalQuery } from "@/utils/back/others";

export const GET = await simpleMiddleware(async (req) => {
    const { userConnectedId } = req;
    const limit = req.nextUrl.searchParams.get('limit');

    let querys = getJobFinalQuery(req);
    querys.autor = userConnectedId;
    let mongoReq = Job.find(querys);
    if (limit) {
        mongoReq = mongoReq.limit(limit);
    }
    try {
        const jobs = await mongoReq.populate('autor');
        return NextResponse.json(jobs, { status: 200 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ type: 'operation', result: 'invalid' }, { status: 401 })
    }
})
