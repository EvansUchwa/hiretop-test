// import { NextResponse } from 'next/server'
// import DB_CONNEXION from '../../utils/back/database';
// // const jwt = require('jsonwebtoken');

// import { jwtVerify } from 'jose';
// import { getJwtSecret } from '../../utils/back/jwt';


// // This function can be marked `async` if using `await` inside
// export async function middleware(request) {
//     // return NextResponse.redirect(new URL('/home', request.url))
//     // DB_CONNEXION();

//     let authAuthHeader = request.headers.has('authorization');
//     if (authAuthHeader) {

//         const authHeadersSplit = request.headers.get('authorization').split('Bearer ');
//         const authorization = authHeadersSplit[1];

//         const decoded = await jwtVerify(authorization, getJwtSecret());

//         let response = NextResponse.next();
//         response.cookies.set("userConnectedId", decoded.payload.userId)
//         response.cookies.set("userConnectedRole", 'oui bro bien ?')

//         console.log(response.cookies);
//         // response.okBoomer = 'Hahaha';
//         return response;

//     }
//     // console.log(request.headers.get('authorization'));
//     return NextResponse.json({ type: 'operation', result: 'invalid' }, { status: 400 });
// }

// // See "Matching Paths" below to learn more
// export const config = {
//     matcher: '/api/user',
// }