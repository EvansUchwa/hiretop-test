import FormFieldProvider from '@/components/formFieldProvider';
import MyCustomFormikForm from '@/components/other';
import { changePaswwordFields } from '@/utils/front/form/fieldsArrays';
import React from 'react'
import { FormikProvider, useFormik } from 'formik';
import { useLang } from '@/contexts/langContext';
import { FormButton } from '@/uikits/button';
import { changePasswordValidation } from '@/utils/front/form/fieldsValidations';
import { updateUserPassword } from '@/services/front/acoount';
import { errorAlert, successAlert } from '@/utils/front/others';

export function UpdatePassword({ user }) {
    const { buttonsL } = useLang();
    const formik = useFormik({
        initialValues: {
            currentPassword: '',
            newPassword: '',
            newPasswordConfirmation: '',
        },
        validationSchema: changePasswordValidation,
        validateOnMount: true,
        onSubmit: handleSubmit
    });

    function handleSubmit(values) {
        updateUserPassword(values, (res) => {
            successAlert('password', 'updated')
        }, (error) => {
            errorAlert(error)
        }, () => {
            setSubmitting(false)
        })
    }

    const { isValid, isSubmitting, setSubmitting } = formik;
    return (
        <div className=''>
            <FormikProvider value={formik}>
                <MyCustomFormikForm>
                    {
                        changePaswwordFields().map((item, i) => <FormFieldProvider key={'talent field nb' + i}
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