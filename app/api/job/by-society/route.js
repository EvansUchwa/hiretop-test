import { NextResponse } from "next/server";
import { simpleMiddleware } from "../../simpleMiddleware";
import Job from "@/models/Job";
import { getJobFinalQuery } from "@/utils/back/others";
// import dayjs from "dayjs";

export const GET = async (req) => {
    let querys = getJobFinalQuery(req);
    const societyId = req.nextUrl.searchParams.get('societyId');
    // console.log(societyId);
    try {
        const jobs = await Job.find({ autor: societyId, ...querys });
        return NextResponse.json(jobs, { status: 200 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ type: 'operation', result: 'invalid' }, { status: 401 })
    }
}