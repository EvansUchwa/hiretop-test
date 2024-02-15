'use client';
import FormFieldProvider from '@/components/formFieldProvider';
import MyCustomFormikForm from '@/components/other';
import { useLang } from '@/contexts/langContext'
import { withoutAuth } from '@/hocs/withoutAuth';
import { resetPasswordCheckEmail } from '@/services/front/acoount';
import { FormButton } from '@/uikits/button';
import { forgotPasswordStep1 } from '@/utils/front/form/fieldsArrays';
import { resetPasswordStep1Validation } from '@/utils/front/form/fieldsValidations';
import { errorAlert, successAlert } from '@/utils/front/others';
import { useFormik, FormikProvider } from 'formik';
import React from 'react'


function ResetPasswordStep1() {
    const { buttonsL, authL } = useLang();
    const formik = useFormik({
        initialValues: {
            email: ''
        },
        onSubmit: handleSubmit,
        validationSchema: resetPasswordStep1Validation,
        validateOnMount: true
    });
    const { isValid, isSubmitting, setSubmitting, resetForm } = formik;

    function handleSubmit(formData) {
        resetPasswordCheckEmail(formData, () => {
            successAlert('account', 'readYourEmailForPassReset')
        },
            (err) => { errorAlert(err) },
            () => {
                resetForm();
                setSubmitting(false)
            })
    }

    return <div className='resetPassword'>
        <h2>{authL.resetPasswordStep1}</h2>
        <FormikProvider value={formik}>
            <MyCustomFormikForm>
                {
                    forgotPasswordStep1().map((item, i) => <FormFieldProvider
                        formLangs={buttonsL.fields}
                        key={'signup field nb' + i}
                        {...item} />)
                }
                <FormButton text={isSubmitting ? '' : buttonsL.confirm}
                    isValid={isSubmitting ? false : isValid} />
            </MyCustomFormikForm>
        </FormikProvider>
    </div>
}

export default withoutAuth(ResetPasswordStep1)
