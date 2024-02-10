import { NextResponse } from "next/server";
import { simpleMiddleware } from "../../simpleMiddleware";
import Job from "@/models/Job";
// import dayjs from "dayjs";

export const GET = async (req) => {
    const jobId = req.nextUrl.searchParams.get('jobId');
    try {
        const job = await Job.findById(jobId);
        return NextResponse.json(job, { status: 200 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ type: 'operation', result: 'invalid' }, { status: 401 })
    }
}
