import { NextResponse } from "next/server";
import JobApply from "@/models/JobApply";
import { simpleMiddleware } from "@/app/api/simpleMiddleware";

export const GET = simpleMiddleware(async (req) => {
    let jobId = req.nextUrl.searchParams.get('jobId');
    try {
        const jobs = await JobApply.find({ job: jobId });
        return NextResponse.json(jobs, { status: 200 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ type: 'operation', result: 'invalid' }, { status: 401 })
    }
})
