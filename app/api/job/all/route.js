import { NextResponse } from "next/server";
import Job from "@/models/Job";
import { autorPopulate, getJobFinalQuery } from "@/utils/back/others";
import DB_CONNEXION from "@/utils/back/database";

export const GET = async (req) => {
    await DB_CONNEXION();
    let querys = getJobFinalQuery(req);
    try {
        const jobs = await Job.find(querys).populate(autorPopulate);
        return NextResponse.json(jobs, { status: 200 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ type: 'operation', result: 'invalid' }, { status: 401 })
    }
}
