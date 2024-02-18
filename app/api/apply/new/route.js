import { NextResponse } from "next/server";
import JobApply from "@/models/JobApply";
import { simpleMiddleware } from "../../simpleMiddleware";
import { mailSetter } from "@/utils/back/email";
import { newApplyAlert } from "@/utils/back/email/templates";
import User from "@/models/User";
import Job from "@/models/Job";
import absoluteUrl from 'next-absolute-url'


export const POST = await simpleMiddleware(async (req) => {
    const { origin } = absoluteUrl(req);
    const { userConnectedId } = req;
    let body = await req.json();
    body.talent = userConnectedId;
    try {
        console.log(body);
        const jobs = await JobApply.create(body);
        let user = await User.findById(userConnectedId);
        let job = await Job.findById(body.job).populate('autor');

        const sendmail = await mailSetter('Nouvelle candidature',
            newApplyAlert(origin + '/dashboard', job.autor.societyName, job.jobTitle, user.firstname + ' ' + user.lastname),
            job.autor.email)
        return NextResponse.json(jobs, { status: 200 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ type: 'operation', result: 'invalid' }, { status: 401 })
    }
}, 'talent')
