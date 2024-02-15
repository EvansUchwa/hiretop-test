/** @type {import('next').NextConfig} */

const nextConfig = {
    missingSuspenseWithCSRBailout: false,
    api: {
        bodyParser: false,
    },
    env: {
        mongoAtlasUrl: "mongodb+srv://johnsonevans686:jzSNYlUq6KnzYFHN@cluster0.hl7i9z1.mongodb.net/?retryWrites=true&w=majority",
        smtpEmail: "johnsonevans686@gmail.com",
        smtpPassword: "nCgjwRyDQVLTm6xU",
        jwtSecret: "dev-this-app-for-talent-virtuel-test",
        profilPicFolderPath: "public/storage/profilPics/",
        resumeFolderPath: "public/storage/resumes/"
    },
};

export default nextConfig;
