/** @type {import('next').NextConfig} */

const nextConfig = {
    experimental: {
        missingSuspenseWithCSRBailout: false,
    },
    api: {
        bodyParser: false,
    },
    env: {
        mongoAtlasUrl: "mongodb+srv://johnsonevans686:jzSNYlUq6KnzYFHN@cluster0.hl7i9z1.mongodb.net/?retryWrites=true&w=majority",
        smtpEmail: "johnsonevans686@gmail.com",
        smtpPassword: "nCgjwRyDQVLTm6xU",
        jwtSecret: "dev-this-app-for-talent-virtuel-test",
        profilPicFolderPath: "public/storage/profilPics/",
        resumeFolderPath: "public/storage/resumes/",
        BLOB_READ_WRITE_TOKEN: "vercel_blob_rw_jAq5wIq5b2DhDvtn_gLe5hwp2ZQyYDwPOA3HYIBscCWHpmi"
    },
};

export default nextConfig;
