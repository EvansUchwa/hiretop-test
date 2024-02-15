/** @type {import('next').NextConfig} */

const nextConfig = {
    async headers() {
        return [
            {
                source: "/api/(.*)",
                headers: [
                    { key: "Access-Control-Allow-Credentials", value: "true" },
                    { key: "Access-Control-Allow-Origin", value: "*" },
                    {
                        key: "Access-Control-Allow-Methods",
                        value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
                    },
                    {
                        key: "Access-Control-Allow-Headers",
                        value:
                            "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
                    },
                ],
            },
        ]
    },
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
        resumeFolderPath: "public/storage/resumes/"
    },
};

export default nextConfig;
