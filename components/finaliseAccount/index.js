'use client';
import React, { useState } from 'react'
import SimpleButton, { FormButton } from '@/uikits/button';
import { useFormik } from 'formik';
import { useLang } from '@/contexts/langContext';

import FinalisAccountWrapper from './wrapper';
import { useAuth } from '@/contexts/authContext';

import { TalentFinaliseAccountStepper } from './talent';
import SocietyFinaliseAccount from './society';


function FinaliseUserAccount() {
    const { updateLogin } = useAuth();
    const { finaliseAccountL, formsL } = useLang();
    const [selectedRole, setSR] = useState(null);
    const [showFormByRoleType, setSFRT] = useState(false);

    const rolesList = [
        { value: 'society' },
        { value: 'talent' },
    ];

    const viewsByRole = {
        society: <SocietyFinaliseAccount updateLogin={updateLogin} />,
        talent: <TalentFinaliseAccountStepper updateLogin={updateLogin} />,
    }

    if (showFormByRoleType) {
        return <FinalisAccountWrapper title={finaliseAccountL.title}>
            {viewsByRole[selectedRole]}
        </FinalisAccountWrapper>
    }

    return (
        <FinalisAccountWrapper title={finaliseAccountL.title} role={selectedRole}>
            <div className='fa-chooseRole'>
                <h3>{finaliseAccountL.youAre}</h3>
                <section className='flex'>
                    {
                        rolesList.map((item, i) => <SimpleButton text={formsL.fields.roleOptions[item.value]}
                            defaultBg={item.value != selectedRole ? '#ededed' : ''}
                            defaultColor={item.value != selectedRole ? 'grey' : ''}
                            key={'nb' + i}
                            onClick={() => setSR(item.value)} />)
                    }
                </section>
                <br />
                <SimpleButton text={'Etape suivante'}
                    onClick={() => {
                        setSFRT(true)
                    }}
                    disabled={selectedRole == null ? true : false} />
            </div>
        </FinalisAccountWrapper>
    )
}

export default FinaliseUserAccount
