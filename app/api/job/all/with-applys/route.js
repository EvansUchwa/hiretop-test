import { NextResponse } from "next/server";
import { simpleMiddleware } from "@/app/api/simpleMiddleware";
import JobApply from "@/models/JobApply";
import Job from "@/models/Job";


export const GET = await simpleMiddleware(async (req) => {
    try {
        const { userConnectedId } = req;
        const jobIds = await JobApply.distinct('job');

        // Utilisation de la méthode find de Mongoose pour récupérer les détails des jobs associés
        const jobs = await Job.find({ _id: { $in: jobIds }, autor: userConnectedId }).lean();
        const finalJobs = [];
        for (const job of jobs) {
            const applys = await JobApply.find({ job: job._id }).populate('talent');
            job.applys = applys;
            finalJobs.push(job)
        }
        return NextResponse.json(finalJobs, { status: 200 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ type: 'operation', result: 'invalid' }, { status: 401 })
    }
}, 'society')
