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
        const profilPic = formData.get("profilPic");
        const role = 'society';
        const workSector = JSON.parse(formData.get("workSector"));
        const societyName = formData.get("societyName");
        const country = formData.get("country");
        const address = formData.get("address");
        const phone = formData.get("phone");
        const description = formData.get("description");

        let folderPath = process.env.profilPicFolderPath;

        if (!profilPic) {
            return NextResponse.json({ error: "No files received." }, { status: 400 });
        }

        let profilPicObj = await fileUploadManager(profilPic, origin, folderPath)
        const user = await User.findByIdAndUpdate(userConnectedId, {
            role, workSector, societyName, country, address, phone, description, profilPic: profilPicObj
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
