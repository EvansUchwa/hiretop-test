import { NextResponse } from "next/server";
import { simpleMiddleware } from "../../simpleMiddleware";
import User from "@/models/User";
import absoluteUrl from 'next-absolute-url'
import { fileUploadManager } from "@/utils/back/file";

export const PUT = simpleMiddleware(async (req) => {
    const { userConnectedId } = req;
    const { origin } = absoluteUrl(req);

    try {
        const formData = await req.formData();
        const profilPic = formData.get("profilPic");
        const resume = formData.get("resume");

        const dataToUpdate = {};
        let folderPath1 = process.env.profilPicFolderPath;
        let folderPath2 = process.env.resumeFolderPath;


        if (profilPic) {
            let fileObj = await fileUploadManager(profilPic, origin, folderPath1)
            dataToUpdate.profilPic = fileObj
        }
        if (resume) {
            let fileObj = await fileUploadManager(resume, origin, folderPath2)
            dataToUpdate.resume = fileObj
        }
        const user = await User.findByIdAndUpdate(userConnectedId, dataToUpdate);
        return NextResponse.json(user, { status: 200 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ type: 'operation', result: 'invalid' }, { status: 401 })
    }
})
