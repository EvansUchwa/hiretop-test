'use client';
import { societyFinaliseAccountFields } from '@/utils/front/form/fieldsArrays';
import { Form, useFormik, FormikProvider } from 'formik'
import React, { useState } from 'react'
import FormFieldProvider from '../formFieldProvider';
import { useLang } from '@/contexts/langContext';
import { FormButton } from '@/uikits/button';
import { societyfinaliseAccountValidation } from '@/utils/front/form/fieldsValidations';
import { finaliseSocietyUser } from '@/services/front/acoount';
import { errorAlert, successAlert } from '@/utils/front/others';

function SocietyFinaliseAccount({ updateLogin }) {
    const { langData } = useLang();
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
                <Form>
                    {
                        societyFinaliseAccountFields().map((item, i) => <FormFieldProvider key={'soct field nb' + i}
                            formLangs={langData.form.fields}
                            {...item} />)
                    }

                    <FormButton
                        text={isSubmitting ? '' : "Enregistrer et Continuer"}
                        isValid={isSubmitting ? false : isValid}
                    />
                </Form>
            </FormikProvider>
        </div>
    )
}

export default SocietyFinaliseAccount
