import { NextResponse } from "next/server";
import { simpleMiddleware } from "../../simpleMiddleware";
import Job from "@/models/Job";
import dayjs from "dayjs";

export const POST = simpleMiddleware(async (req) => {
    const { userConnectedId } = req;
    const body = await req.json();

    // body.applyLimitDate = dayjs(body.applyLimitDate).unix()
    try {
        // console.log(body);
        const job = await Job.create({ ...body, autor: userConnectedId });
        return NextResponse.json(job, { status: 200 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ type: 'operation', result: 'invalid' }, { status: 401 })
    }
})
