import { NextResponse } from 'next/server'
const jwt = require('jsonwebtoken');
import { getJwtSecret } from '../../utils/back/jwt';
import DB_CONNEXION from '@/utils/back/database';

export async function simpleMiddleware(handler, role = null) {
    await DB_CONNEXION();
    return (request) => {

        let authAuthHeader = request.headers.has('authorization');
        if (authAuthHeader) {

            const authHeadersSplit = request.headers.get('authorization').split('Bearer ');
            const authorization = authHeadersSplit[1];

            const decoded = jwt.verify(authorization, getJwtSecret());
            request.userConnectedId = decoded.userId;
            request.userConnectedRole = decoded.userRole;
            // console.log(decoded);
            if (role) {
                if (decoded.userRole != role)
                    return NextResponse.json({ type: 'operation', result: 'invalidess' }, { status: 400 });
            }

            return handler(request);

        }
        // console.log(request.headers.get('authorization'));
        return NextResponse.json({ type: 'operation', result: 'invalid' }, { status: 400 });
    }

}

