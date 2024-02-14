import FormFieldProvider from '@/components/formFieldProvider';
import MyCustomFormikForm from '@/components/other';
import { changePaswwordFields } from '@/utils/front/form/fieldsArrays';
import React from 'react'
import { FormikProvider, useFormik } from 'formik';
import { useLang } from '@/contexts/langContext';
import { FormButton } from '@/uikits/button';

export function UpdatePassword({ user }) {
    const { buttonsL } = useLang();
    const formik = useFormik({
        initialValues: {
            currentPassword: '',
            newPassword: '',
            passwordConfirmation: '',
        },
        // validationSchema: societyfinaliseAccountValidation,
        validateOnMount: true,
        onSubmit: handleSubmit
    });

    function handleSubmit(formData) {
    }

    const { isValid, isSubmitting } = formik;
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