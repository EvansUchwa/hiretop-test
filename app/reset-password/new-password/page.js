'use client';
import FormFieldProvider from '@/components/formFieldProvider';
import MyCustomFormikForm, { NoDataFoundMakeAnotherActions } from '@/components/other';
import { useLang } from '@/contexts/langContext'
import { withoutAuth } from '@/hocs/withoutAuth';
import { resetPasswordChangePassword, resetPasswordCheckToken } from '@/services/front/acoount';
import { FormButton } from '@/uikits/button';
import { SectionSpinner } from '@/uikits/others';
import { forgotPasswordStep2 } from '@/utils/front/form/fieldsArrays';
import { resetPasswordStep2Validation } from '@/utils/front/form/fieldsValidations';
import { errorAlert, successAlert } from '@/utils/front/others';
import { useFormik, FormikProvider } from 'formik';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

function ResetPasswordStep2() {
    const [loading, setLoading] = useState(true);
    const [tokenIsValid, setTIV] = useState(false);
    const { buttonsL, authL, alertsL } = useLang();
    const searchParam = useSearchParams();
    const token = searchParam.get('token')
    const formik = useFormik({
        initialValues: {
            token,
            newPassword: '', newPasswordConfirmation: ''
        },
        onSubmit: handleSubmit,
        validationSchema: resetPasswordStep2Validation,
        validateOnMount: true
    });
    const { isValid, isSubmitting, setSubmitting, resetForm } = formik;

    function handleSubmit(formData) {
        resetPasswordChangePassword(formData, () => {
            successAlert('password', 'updated')
        },
            (err) => { errorAlert(err) },
            () => {
                resetForm();
                setSubmitting(false);
            });
    }



    if (!token)
        return <InvalidOperation />;

    useEffect(() => {
        resetPasswordCheckToken({ token }, () => {
            setTIV(true)
        }, () => {

        }, () => { setLoading(false) })
    }, []);

    if (loading)
        return <SectionSpinner />;

    if (!tokenIsValid)
        return <InvalidOperation />;

    return <div className='resetPassword'>
        <h2>{authL.resetPasswordStep2}</h2>
        <FormikProvider value={formik}>
            <MyCustomFormikForm>
                {
                    forgotPasswordStep2().map((item, i) => <FormFieldProvider
                        formLangs={buttonsL.fields}
                        key={'signup field nb' + i}
                        {...item} />)
                }
                <FormButton text={isSubmitting ? '' : buttonsL.save}
                    isValid={isSubmitting ? false : isValid} />
            </MyCustomFormikForm>
        </FormikProvider>
    </div>;
}


function InvalidOperation() {
    const { alertsL, buttonsL } = useLang();
    return <NoDataFoundMakeAnotherActions
        message={alertsL.operation.invalid}
        btnLabel={buttonsL.backToHome}
        btnLink={'/'}
    />
}
export default withoutAuth(ResetPasswordStep2)
