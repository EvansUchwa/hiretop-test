import { NextResponse } from "next/server";
import { simpleMiddleware } from "../../simpleMiddleware";
import User from "@/models/User";
import { SignJWT } from 'jose'
import { getJwtSecret } from "@/utils/back/jwt";
import absoluteUrl from 'next-absolute-url'
import { fileUploadManager } from "@/utils/back/file";

export const PUT = simpleMiddleware(async (req) => {
    const { userConnectedId } = req;
    const { origin } = absoluteUrl(req);

    try {
        const formData = await req.formData();

        const profession = formData.get("profession");

        const firstname = formData.get("firstname");
        const lastname = formData.get("lastname");
        const age = formData.get("age");
        const gender = formData.get("gender");

        const role = 'talent';
        const workSector = JSON.parse(formData.get("workSector"));
        const skills = JSON.parse(formData.get("skills"));
        const formations = JSON.parse(formData.get("formations"));
        const experiences = JSON.parse(formData.get("experiences"));
        const preferredLocations = JSON.parse(formData.get("preferredLocations"));
        const langages = JSON.parse(formData.get("langages"));


        const country = formData.get("country");
        const expYears = formData.get("expYears");


        const lastDegree = formData.get("lastDegree");

        const address = formData.get("address");
        const phone = formData.get("phone");
        const description = formData.get("description");

        const desiredSalary = formData.get("desiredSalary");
        const linkedinUrl = formData.get("linkedinUrl");

        const profilPic = formData.get("profilPic");
        const resume = formData.get("resume");


        let folderPath1 = process.env.profilPicFolderPath;
        let folderPath2 = process.env.resumeFolderPath;

        if (!profilPic || !resume) {
            return NextResponse.json({ error: "No files received." }, { status: 400 });
        }

        let profilPicObj = await fileUploadManager(profilPic, origin, folderPath1);
        let resumeObj = await fileUploadManager(resume, origin, folderPath2);

        const user = await User.findByIdAndUpdate(userConnectedId, {
            role, profession, workSector, firstname, lastname, country, address, phone,
            description, age, gender,
            profilPic: profilPicObj,
            resume: resumeObj,
            formations, experiences, skills,
            preferredLocations, desiredSalary, linkedinUrl,
            lastDegree, expYears, langages
        });

        var token = await new SignJWT({ userId: user._id, userRole: user.role })
            .setProtectedHeader({ alg: 'HS256' })
            .setIssuedAt()
            .sign(getJwtSecret());
        return NextResponse.json({ token }, { status: 200 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ type: 'operation', result: 'invalid' }, { status: 401 })
    }
})

