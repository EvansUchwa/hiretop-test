import path from "path";
import { writeFile } from "fs/promises";
import uniqid from 'uniqid';
export async function fileUploadManager(file, origin, folderPath) {
    const buffer = Buffer.from(await file.arrayBuffer());
    const originName = file.name.replaceAll(" ", "_");
    const fileExtension = path.extname(originName);

    const filename = Math.floor(Date.now() / 1000) + uniqid('hiretop-ast-') + fileExtension;

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
