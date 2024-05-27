"use server";
import { NextResponse } from "next/server";
import Job from "@/models/Job";
import User from "@/models/User";
import JobApply from "@/models/JobApply";
import DB_CONNEXION from "@/utils/back/database";

export const GET = async (req) => {
  await DB_CONNEXION();
  try {
    const jobs = await Job.countDocuments({});
    const societys = await User.countDocuments({ role: "society" });
    const talents = await User.countDocuments({ role: "talent" });
    const jobApplys = await JobApply.countDocuments();
    return NextResponse.json(
      {
        jobs,
        societys,
        talents,
        jobApplys,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { type: "operation", result: "invalid" },
      { status: 401 }
    );
  }
};
