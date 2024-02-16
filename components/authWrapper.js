'use client';
import React from 'react'
import LoginImage from '../public/login.png'
import Image from 'next/image'
import { useLang } from '@/contexts/langContext'
import { useRouter } from 'next/navigation';
import { MaterialSymbolsArrowCircleLeft } from '@/uikits/icon';

function AuthWrapper({ children, type }) {
    const { authL, buttonsL } = useLang();
    const router = useRouter();
    return (
        <div className='authWrapper'>
            <section>
                <span onClick={() => router.push('/')}> <MaterialSymbolsArrowCircleLeft /> {buttonsL.backToHome}</span>
                <div>
                    <Image src={LoginImage}
                        alt={'Login image'}
                        width={300}
                        height={300} />
                    <p>
                        {type == 'login' ? authL.loginBannerText : authL.signupBannerText}
                    </p>
                </div>
            </section>
            <section>
                {children}
            </section>
        </div>
    )
}

export default AuthWrapper
