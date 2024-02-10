import path from "path";
import { writeFile } from "fs/promises";
export async function fileUploadManager(file, origin, folderPath) {
    const buffer = Buffer.from(await file.arrayBuffer());
    const filename = file.name.replaceAll(" ", "_");

    let profilPicObj = {
        filename,
        url: origin + "/" + folderPath + filename
    };
    await writeFile(
        path.join(process.cwd(), folderPath + filename),
        buffer
    );
    return profilPicObj;
}
