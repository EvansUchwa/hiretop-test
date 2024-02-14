import { NextResponse } from "next/server";
import Job from "@/models/Job";
import { getJobFinalQuery } from "@/utils/back/others";
import DB_CONNEXION from "@/utils/back/database";

export const GET = async (req) => {
    await DB_CONNEXION();
    let querys = getJobFinalQuery(req);
    const societyId = req.nextUrl.searchParams.get('societyId');

    try {
        const jobs = await Job.find({ autor: societyId, ...querys }).populate('autor');
        return NextResponse.json(jobs, { status: 200 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ type: 'operation', result: 'invalid' }, { status: 401 })
    }
}
