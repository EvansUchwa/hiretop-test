// import User from "../../../../models/User";
import { NextResponse } from "next/server";
import { simpleMiddleware } from "../../simpleMiddleware";
import path from "path";
import { writeFile } from "fs/promises";
import User from "@/models/User";
import absoluteUrl from 'next-absolute-url'
import { log } from "console";

export const PUT = simpleMiddleware(async (req) => {
    const { userConnectedId } = req;
    const { origin } = absoluteUrl(req);


    try {
        const formData = await req.formData();
        const profilPic = formData.get("profilPic");
        const workSector = JSON.parse(formData.get("workSector"));
        const societyName = formData.get("societyName");
        const country = formData.get("country");
        const address = formData.get("address");
        const phone = formData.get("phone");
        const description = formData.get("description");

        let dataToUp = {
            workSector, societyName, country, address, phone, description
        }

        if (profilPic != null && profilPic != 'null') {
            let folderPath = "storage/profilPics/"
            const buffer = Buffer.from(await profilPic.arrayBuffer());
            const filename = profilPic.name.replaceAll(" ", "_");

            let profilPicObj = {
                filename,
                url: origin + "/" + folderPath + filename
            }
            await writeFile(
                path.join(process.cwd(), "public/storage/profilPics/" + filename),
                buffer
            );
            dataToUp.profilPic = profilPicObj;
        }


        const user = await User.findByIdAndUpdate(userConnectedId, dataToUp);

        return NextResponse.json('ok', { status: 200 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ type: 'operation', result: 'invalid' }, { status: 401 })
    }
})
