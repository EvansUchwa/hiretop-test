'use client';
import { societyFinaliseAccountFields } from '@/utils/front/form/fieldsArrays';
import { useFormik, FormikProvider } from 'formik'
import React, { useState } from 'react'
import FormFieldProvider from '../formFieldProvider';
import { useLang } from '@/contexts/langContext';
import { FormButton } from '@/uikits/button';
import { societyfinaliseAccountValidation } from '@/utils/front/form/fieldsValidations';
import { finaliseSocietyUser } from '@/services/front/acoount';
import { errorAlert } from '@/utils/front/others';
import MyCustomFormikForm from '../other';

function SocietyFinaliseAccount({ updateLogin }) {
    const { buttonsL } = useLang();
    const [operationLoad, setOL] = useState(false)
    const formik = useFormik({
        initialValues: {
            profilPic: null,
            societyName: '',
            phone: '', country: '',
            address: '', workSector: [],
            description: '',
        },
        validationSchema: societyfinaliseAccountValidation,
        validateOnMount: true,
        onSubmit: handleSubmit
    });

    function handleSubmit(formData) {
        setOL(true)
        finaliseSocietyUser(formData, (res) => {
            updateLogin(res.data.token)
        }, (error) => {
            errorAlert(error)
        }, () => {
            setOL(false)
        })
    }

    const { isValid, isSubmitting } = formik;
    return (
        <div className='societyFinaliseAccount'>
            <FormikProvider value={formik}>
                <MyCustomFormikForm>
                    {
                        societyFinaliseAccountFields().map((item, i) => <FormFieldProvider key={'soct field nb' + i}
                            {...item} />)
                    }

                    <FormButton
                        text={isSubmitting ? '' : buttonsL.save}
                        isValid={isSubmitting ? false : isValid}
                    />
                </MyCustomFormikForm>
            </FormikProvider>
        </div>
    )
}

export default SocietyFinaliseAccount
