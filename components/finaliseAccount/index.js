'use client';
import React, { useState } from 'react'
import SimpleButton, { FormButton } from '@/uikits/button';
import { useFormik } from 'formik';
import { useLang } from '@/contexts/langContext';

import FinalisAccountWrapper from './wrapper';
import { useAuth } from '@/contexts/authContext';

import { TalentFinaliseManager } from './talent';
import SocietyFinaliseAccount from './society';


function FinaliseUserAccount() {
    const { updateLogin } = useAuth();
    const { langData } = useLang();
    let finaliseAccountL = langData.finaliseAccount;
    const [selectedRole, setSR] = useState(null);
    const [showFormByRoleType, setSFRT] = useState(false);

    const formik = useFormik({
        initialValues: {
            role: '',
        }
    });
    const rolesList = [
        { value: 'society' },
        { value: 'talent' },
    ];

    const viewsByRole = {
        society: <SocietyFinaliseAccount updateLogin={updateLogin} />,
        talent: <TalentFinaliseManager updateLogin={updateLogin} />,
    }

    if (showFormByRoleType) {
        return <FinalisAccountWrapper title={finaliseAccountL.title}>
            {viewsByRole[selectedRole]}
        </FinalisAccountWrapper>
    }

    return (
        <FinalisAccountWrapper title={finaliseAccountL.title}>
            <div className='fa-chooseRole'>
                <h3>{finaliseAccountL.youAre}</h3>
                <section className='flex'>
                    {
                        rolesList.map((item, i) => <SimpleButton text={langData.form.fields.roleOptions[item.value]}
                            defaultBg={item.value != selectedRole ? '#ededed' : ''}
                            defaultColor={item.value != selectedRole ? 'grey' : ''}
                            key={'nb' + i}
                            onClick={() => setSR(item.value)} />)
                    }
                </section>
                <br />
                <FormButton text={'Etape suivante'}
                    onClick={() => {
                        setSFRT(true)
                    }}
                    isValid={selectedRole ? true : false} />
            </div>
        </FinalisAccountWrapper>
    )
}

export default FinaliseUserAccount
