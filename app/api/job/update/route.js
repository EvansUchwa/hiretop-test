import { NextResponse } from "next/server";
import { simpleMiddleware } from "../../simpleMiddleware";
import Job from "@/models/Job";

export const PUT = await simpleMiddleware(async (req) => {
    const { userConnectedId } = req;
    const body = await req.json();
    const jobId = req.nextUrl.searchParams.get('jobId');

    // body.applyLimitDate = dayjs(body.applyLimitDate).unix()
    try {
        // console.log(body);
        const job = await Job.findByIdAndUpdate(jobId, body);
        return NextResponse.json(job, { status: 200 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ type: 'operation', result: 'invalid' }, { status: 401 })
    }
})
