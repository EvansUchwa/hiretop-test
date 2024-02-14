import { NextResponse } from "next/server";
import Job from "@/models/Job";
import { getIpAddress } from "@/utils/back/others";
import DB_CONNEXION from "@/utils/back/database";

export const GET = async (req, { params }) => {
    const jobId = params.id;
    const ip = getIpAddress();
    await DB_CONNEXION();

    try {
        const job = await Job.findById(jobId).populate('autor');
        if (job && !job.views.includes(ip)) {
            const copy = [...job.views];
            copy.push(ip)
            job.views = copy;
            let save = await job.save();
        }
        return NextResponse.json(job, { status: 200 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ type: 'operation', result: 'invalid' }, { status: 401 })
    }
}
