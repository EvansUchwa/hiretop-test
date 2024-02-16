import { NextResponse } from "next/server";
import { simpleMiddleware } from "@/app/api/simpleMiddleware";
import JobApply from "@/models/JobApply";
import { applyAcceptedEmail } from "@/utils/back/email/templates";
import { mailSetter } from "@/utils/back/email";
import Job from "@/models/Job";
import User from "@/models/User";

export const PUT = await simpleMiddleware(async (req) => {
    const applyId = req.nextUrl.searchParams.get('applyId');;
    const body = await req.json();
    const origin = '';

    let finalObj = {};
    if (body.status == 'accepted') {
        finalObj.status = body.status;
        finalObj.recrutorMessage = body.recrutorMessage;
        finalObj.interviewType = body.interviewType;
        finalObj.interviewDate = body.interviewDate;
        finalObj.interviewHour = body.interviewHour;

    } else if (body.status == 'rejected') {
        finalObj.status = body.status;
        finalObj.recrutorMessage = body.recrutorMessage;
        finalObj.interviewType = null;
        finalObj.interviewDate = null;
        finalObj.interviewHour = null;
    }
    try {
        const jobUp = await JobApply.findByIdAndUpdate(applyId, finalObj);
        const job = await Job.findById(jobUp.job).populate('autor')
        const talent = await User.findById(jobUp.talent)

        if (body.status == 'accepted') {
            mailSetter('Invitation à un entretien',
                applyAcceptedEmail(origin + '/dashboard', finalObj.recrutorMessage, finalObj.interviewType, finalObj.interviewDate, finalObj.interviewHour, job.jobTitle, job.autor.societyName, talent.firstname),
                talent.email)
        } else {
            mailSetter('Notification de rejet de candidature',
                applyAcceptedEmail(origin + '/dashboard', job.jobTitle, job.autor.societyName, talent.firstname),
                talent.email)
        }
        return NextResponse.json(jobUp, { status: 200 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ type: 'operation', result: 'invalid' }, { status: 401 })
    }
}, "society")
