import FormFieldProvider from '@/components/formFieldProvider';
import MyCustomFormikForm from '@/components/other';
import { updateSocietyFiles, updateTalentFiles } from '@/utils/front/form/fieldsArrays';
import React from 'react'
import { FormikProvider, useFormik } from 'formik';
import { useLang } from '@/contexts/langContext';
import { FormButton } from '@/uikits/button';
import { updateSocietyOrTalentFilesData } from '@/services/front/acoount';
import { errorAlert, successAlert } from '@/utils/front/others';


export function UpdateTalentFiles({ user, refetchUserLoggedData }) {
    const { buttonsL } = useLang();
    const formik = useFormik({
        initialValues: {
            profilPic: '',
            resume: '',
        },
        validateOnMount: true,
        onSubmit: handleSubmit
    });

    function handleSubmit(formData) {
        updateSocietyOrTalentFilesData(formData, (res) => {
            successAlert('account', 'updated')
            refetchUserLoggedData()
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
                        updateTalentFiles().map((item, i) => <FormFieldProvider key={'talent file field nb' + i}
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

export function UpdateSocietyFiles({ user, refetchUserLoggedData }) {
    const { buttonsL } = useLang();
    const formik = useFormik({
        initialValues: {
            profilPic: '',
        },
        validateOnMount: true,
        onSubmit: handleSubmit
    });

    function handleSubmit(formData) {
        updateSocietyOrTalentFilesData(formData, (res) => {
            successAlert('account', 'updated')
            refetchUserLoggedData()
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
                        updateSocietyFiles().map((item, i) => <FormFieldProvider key={'society files field nb' + i}
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