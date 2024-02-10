"use client";
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import AuthWrapper from '@/components/authWrapper';
import FormFieldProvider from '@/components/formFieldProvider';
import { Form, useFormik, FormikProvider } from 'formik'
import { loginFields } from '@/utils/front/form/fieldsArrays';
import { LoginValidation } from '@/utils/front/form/fieldsValidations';
import { useLang } from '@/contexts/langContext';
import { FormButton } from '@/uikits/button';
import Link from 'next/link';
import { logUser } from '@/services/front/auth';
import { errorAlert } from '@/utils/front/others';
import { withoutAuth } from '@/hocs/withoutAuth';
import { useAuth } from '@/contexts/authContext';

function LoginPage() {
    // const { data: session } = useSession()
    // if (session) {
    //     return <>
    //         Signed in as {session.user.email} <br />
    //         <button onClick={() => signOut()}>Sign out</button>
    //     </>
    // }
    const formik = useFormik({
        initialValues: {
            email: '', password: ''
        },
        onSubmit: handleSubmit,
        validationSchema: LoginValidation,
        validateOnMount: true
    });
    const { isValid, isSubmitting, setSubmitting } = formik;
    const { langData } = useLang();
    const { login } = useAuth();

    function handleSubmit(formData) {
        logUser(formData, (res) => {
            login(res.data.token)
        }, (error) => {
            errorAlert(error)
        }, () => {
            setSubmitting(false)
        })
    }

    return <AuthWrapper title={'Connexion'}>
        <div className='registerOrLogin'>
            <h2>{langData.auth.loginTitle}</h2>
            <FormikProvider value={formik}>
                <Form>
                    {
                        loginFields().map((item, i) => <FormFieldProvider
                            formLangs={langData.form.fields}
                            key={'signup field nb' + i}
                            {...item} />)
                    }
                    <FormButton text={isSubmitting ? '' : langData.buttons.login}
                        isValid={isSubmitting ? false : isValid} />
                </Form>
            </FormikProvider>
            <div className='registerOrLogin-othersOptions flex f-column'>
                <b>{langData.others.orLabel}</b>
                <p>
                    <Link href={'/register'}>{langData.auth.dontHaveAccount} </Link>
                </p>
            </div>
            {/* <button onClick={() => signIn('google')}>Sign in</button> */}
        </div>
    </AuthWrapper>
}

export default withoutAuth(LoginPage)
