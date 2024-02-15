'use client'
import { NoDataFoundMakeAnotherActions } from '@/components/other';
import { useLang } from '@/contexts/langContext';
import { withoutAuth } from '@/hocs/withoutAuth';
import { validateUserEmail } from '@/services/front/acoount';
import SimpleButton from '@/uikits/button';
import { SectionSpinner } from '@/uikits/others';
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'


function MakeValidationRequest() {
    const searchParam = useSearchParams();
    const token = searchParam.get('token');
    const { alertsL, buttonsL } = useLang();
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

    if (!token) {
        return <NoDataFoundMakeAnotherActions
            message={alertsL.operation.invalid}
            btnLabel={buttonsL.backToHome}
            btnLink={'/'}
        />
    }
    if (loading)
        content = <SectionSpinner />
    else if (!emailValidated) {
        content = <NoDataFoundMakeAnotherActions
            message={alertsL.email.notVerified}
            btnLabel={buttonsL.register}
            btnLink={'/'}
        />;
    } else {
        content = <div>
            <h1>{alertsL.email.verified}</h1>
            <SimpleButton text={buttonsL.login} isLink='/login' />
        </div>
    }
    return <div className='emailValidation'>
        {content}
    </div>
}

export default withoutAuth(MakeValidationRequest);
