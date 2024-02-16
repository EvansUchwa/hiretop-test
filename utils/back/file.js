import path from "path";
import { writeFile } from "fs/promises";
import uniqid from 'uniqid';
const fs = require('fs');

function createSubdirectoryInPublic(subdirectoryName) {
    const publicPath = path.join(process.cwd(), 'public', subdirectoryName);

    try {
        if (!fs.existsSync(publicPath)) {
            fs.mkdirSync(publicPath);
            console.log(`Subdirectory '${subdirectoryName}' created in the 'public' directory.`);
        } else {
            console.log(`Subdirectory '${subdirectoryName}' already exists in the 'public' directory.`);
        }
    } catch (error) {
        console.error('Error creating subdirectory:', error);
    }
}

export async function fileUploadManager(file, origin, folderPath) {
    createSubdirectoryInPublic('storage')
    createSubdirectoryInPublic('storage/resumes')
    createSubdirectoryInPublic('storage/profilPics')

    const buffer = Buffer.from(await file.arrayBuffer());
    const originName = file.name.replaceAll(" ", "_");
    const fileExtension = path.extname(originName);

    const filename = Math.floor(Date.now() / 1000) + uniqid('hiretop-ast-') + fileExtension;

    let profilPicObj = {
        filename,
        url: origin + "/" + folderPath + filename
    };
    // await writeFile(
    //     path.join(process.cwd(), folderPath + filename),
    //     buffer
    // );
    await writeFile(
        path.join('/tmp'),
        buffer
    );
    return profilPicObj;
    // return { url: 'http://localhost:3000/public/storage/profilPics/1708036088hiretop-ast-f0wlsnsl4u8.jpg' };
}

