'use client';
import FormFieldProvider from '@/components/formFieldProvider';
import { useLang } from '@/contexts/langContext';
import { signupFields } from '@/utils/front/form/fieldsArrays';
import { Form, useFormik, FormikProvider } from 'formik'
import React from 'react'
import AuthWrapper from '@/components/authWrapper';
import Link from 'next/link';
import { FormButton } from '@/uikits/button';
import { SignupValidation } from '@/utils/front/form/fieldsValidations';
import { withoutAuth } from '@/hocs/withoutAuth';
import { registerUser } from '@/services/front/auth';
import { errorAlert, successAlert } from '@/utils/front/others';

function Register() {
    const formik = useFormik({
        initialValues: {
            email: '', password: ''
        },
        onSubmit: handleSubmit,
        validationSchema: SignupValidation,
        validateOnMount: true
    });
    const { isValid, isSubmitting, setSubmitting } = formik;

    function handleSubmit(formData) {
        registerUser(formData, () => {
            successAlert('account', 'createdButNeedEmailValidation')
        }, (error) => {
            errorAlert(error)
        }, () => {
            setSubmitting(false)
        })
    }
    const { langData } = useLang();

    return (
        <AuthWrapper title={'Inscription'} >
            <div className='registerOrLogin'>
                <h2>{langData.auth.registerTitle}</h2>
                <FormikProvider value={formik}>
                    <Form>
                        {
                            signupFields().map((item, i) => <FormFieldProvider
                                formLangs={langData.form.fields}
                                key={'signup field nb' + i}
                                {...item} />)
                        }
                        <FormButton text={isSubmitting ? '' : langData.buttons.register}
                            isValid={isSubmitting ? false : isValid} />
                    </Form>
                </FormikProvider>
                <div className='registerOrLogin-othersOptions flex f-column'>
                    <b>{langData.others.orLabel}</b>
                    <p>
                        <Link href={'/login'}>{langData.auth.alreadyHaveAccount} </Link>
                    </p>
                </div>
            </div>
        </AuthWrapper>
    )
}

export default withoutAuth(Register)
