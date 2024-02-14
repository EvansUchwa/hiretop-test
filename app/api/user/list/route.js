import User from "@/models/User";
import DB_CONNEXION from "@/utils/back/database";
import { NextResponse } from "next/server";

export const GET = async (req) => {
    await DB_CONNEXION();
    const role = req.nextUrl.searchParams.get('role');
    const gender = req.nextUrl.searchParams.get('gender');
    const lastDegree = req.nextUrl.searchParams.get('lastDegree');
    const searchTalentKeyword = req.nextUrl.searchParams.get('searchTalentKeyword');
    const expYears = req.nextUrl.searchParams.get('expYears');

    let theQuery = { role };
    if (gender) {
        theQuery.gender = gender;
    }
    if (lastDegree) {
        theQuery.lastDegree = lastDegree;
    }
    if (expYears) {
        theQuery.expYears = expYears;
    }
    if (searchTalentKeyword) {
        theQuery.$or = [
            { firstname: { '$regex': searchTalentKeyword, "$options": "i" } },
            { lastname: { '$regex': searchTalentKeyword, "$options": "i" } },
            { email: { '$regex': searchTalentKeyword, "$options": "i" } }
        ]
    }
    try {
        const users = await User.find(theQuery);
        return NextResponse.json(users, { status: 200 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ type: 'operation', result: 'invalid' }, { status: 401 })
    }
}
