'use client'
import { validateUserEmail } from '@/services/front/acoount';
import SimpleButton from '@/uikits/button';
import { SectionSpinner } from '@/uikits/others';
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

function EmailValidationPage() {
    const searchParam = useSearchParams();
    const token = searchParam.get('token');

    if (!token)
        return 'Operation impossible'
    return <MakeValidationRequest token={token} />
}

function MakeValidationRequest({ token }) {
    const [loading, setLoading] = useState(true);
    const [emailValidated, setEmailValidated] = useState(false);
    let content;
    useEffect(() => {
        validateUserEmail(token, () => {
            setEmailValidated(true)
        }, () => {
            setEmailValidated(false)
        }, () => {
            setLoading(false)
        })
    }, []);

    if (loading)
        content = <SectionSpinner />
    else if (!emailValidated) {
        content = <div>
            <h1>Email non valider</h1>
            <SimpleButton text="S'inscrire" isLink='/register' />
        </div>
    } else {
        content = <div>
            <h1>Email valider</h1>
            <SimpleButton text="Se connecter" isLink='/login' />
        </div>
    }
    return <div className='emailValidation'>
        {content}
    </div>
}
// w-t-hiretop-$2b$12$2g9MRROHli0FNCqESwbeM.gh1v8mtzpqRM/ugMEAt9jcMRrk6Vx0q
export default EmailValidationPage
