import { NextResponse } from "next/server";
import JobApply from "@/models/JobApply";
import { simpleMiddleware } from "../../simpleMiddleware";
import Job from "@/models/Job";

export const GET = await simpleMiddleware(async (req) => {
    const { userConnectedId } = req;
    console.log(userConnectedId);
    try {
        const jobIds = await JobApply.distinct('job');
        let jobsReq = { autor: userConnectedId };

        const jobsC = await Job.find(jobsReq);

        if (jobIds.length > 0) {
            jobsReq._id = { $in: jobIds }
        }
        const jobs = await Job.find(jobsReq);

        let applysCount = 0;
        let applysAcceptedCount = 0;
        let applysRejectedCount = 0;
        let applysOnPendingCount = 0;
        if (jobs.length > 0) {
            const jobIds = jobs.map(job => job._id);
            const applys = await JobApply.find({ job: { $in: jobIds } }).lean();

            applysCount = applys.length;
            applysAcceptedCount = applys.filter(apply => apply.status === 'accepted').length;
            applysRejectedCount = applys.filter(apply => apply.status === 'rejected').length;
            applysOnPendingCount = applys.filter(apply => apply.status === 'pending').length;
        }


        return NextResponse.json({
            jobCount: jobsC.length,
            applysCount, applysAcceptedCount, applysRejectedCount, applysOnPendingCount
        }, { status: 200 });
    } catch (error) {
        console.log(error)
        return NextResponse.json({ type: 'operation', result: 'invalid' }, { status: 401 })
    }
}, 'society')
