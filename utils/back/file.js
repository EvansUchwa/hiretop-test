import path from "path";
import { writeFile } from "fs/promises";
import uniqid from 'uniqid';
import S3 from "aws-sdk/clients/s3";

import { put } from '@vercel/blob';
import { NextResponse } from 'next/server';

const fs = require('fs');

const accessKeyId = "jwk3vrmtt5iokqlvvggg3mcd5wiq";
const secretAccessKey = "jzrelurbc65i3yihp46d62zx5gd3lsgk5qtjp4ruyznidlzwqszqc";
const endpoint = "https://gateway.storjshare.io";

const s3 = new S3({
    accessKeyId,
    secretAccessKey,
    endpoint,
    s3ForcePathStyle: true,
    signatureVersion: "v4",
    connectTimeout: 0,
    httpOptions: { timeout: 0 }
});

// any ankle crystal anxiety family vessel vintage say access web orchard traffic


function createSubdirectoryInPublic(subdirectoryName) {
    const publicPath = path.join(process.cwd(), 'public', subdirectoryName);

    try {
        if (!fs.existsSync(publicPath)) {
            fs.mkdirSync(publicPath);
        }
    } catch (error) {
        console.error('Error creating subdirectory:', error);
    }
}

export async function fileUploadManager(file, origin, folderPath) {
    // createSubdirectoryInPublic('storage')
    // createSubdirectoryInPublic('storage/resumes')
    // createSubdirectoryInPublic('storage/profilPics')

    const buffer = Buffer.from(await file.arrayBuffer());
    const originName = file.name.replaceAll(" ", "_");
    const fileExtension = path.extname(originName);

    let filename = Math.floor(Date.now() / 1000) + uniqid('ht') + fileExtension;;

    const blob = await put(filename, buffer, {
        access: 'public',
    });
    console.log(blob);

    let profilPicObj = {
        filename,
        url: blob.url
    };


    return profilPicObj;
}