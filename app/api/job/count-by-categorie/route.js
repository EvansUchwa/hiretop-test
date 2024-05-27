import { NextResponse } from "next/server";
import Job from "@/models/Job";
import DB_CONNEXION from "@/utils/back/database";

export const GET = async (req) => {
  await DB_CONNEXION();
  try {
    const jobs = await Job.aggregate([
      {
        $group: {
          _id: "$jobSector",
          count: { $sum: 1 },
        },
      },
      {
        $match: {
          count: { $gt: 0 },
        },
      },
    ]);
    return NextResponse.json(jobs, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { type: "operation", result: "invalid" },
      { status: 401 }
    );
  }
};
