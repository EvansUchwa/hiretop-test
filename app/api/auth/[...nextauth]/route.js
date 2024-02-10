import User from '@/models/User';
import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { NextResponse } from "next/server";
const jwt = require("jsonwebtoken");

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: '647660822687-fjntiq18t5a2jspukjglolboskoeu5vc.apps.googleusercontent.com',
            clientSecret: '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',
            callbacks: {
                signIn: async (user, account, profile) => {
                    // const userExist = await User.findOne({ email });
                    // if (userExist && userExist._id) {
                    //     if (userExist.emailVerified == true) {
                    //         const comparePwds = await bcrypt.compare(password, userExist.password)

                    //         if (comparePwds) {
                    //             const logCount = userExist.logCount;
                    //             userExist.logCount = logCount + 1;
                    //             await userExist.save()
                    //             var token = jwt.sign({ userId: userExist._id, userRole: userExist.role ? userExist.role : null },
                    //                 process.env.jwtSecret);
                    //             return NextResponse.json({
                    //                 token
                    //             }, { status: 200 })
                    //         } else {
                    //             return NextResponse.json({ password: 'mismatch' }, { status: 400 })
                    //         }
                    //     }
                    //     return NextResponse.json({ email: 'notVerified' }, { status: 400 })
                    // } else {
                    //     return NextResponse.json({ user: 'notFound' }, { status: 400 })
                    // }
                },
            },
        }),
        // // Passwordless / email sign in
        // EmailProvider({
        //     server: process.env.MAIL_SERVER,
        //     from: 'NextAuth.js <no-reply@example.com>'
        // }),
    ]
})

export { handler as GET, handler as POST }