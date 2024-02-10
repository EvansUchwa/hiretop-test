import { societyFinaliseAccountFields } from '@/utils/front/form/fieldsArrays';
import { useFormik, FormikProvider } from 'formik'
import React from 'react'
import FormFieldProvider from '../formFieldProvider';
import { useLang } from '@/contexts/langContext';
import { FormButton } from '@/uikits/button';
import { societyfinaliseAccountValidation } from '@/utils/front/form/fieldsValidations';
import { updateSocietyUserAccount } from '@/services/front/acoount';
import { errorAlert, successAlert } from '@/utils/front/others';
import MyCustomFormikForm from '../other';

export function SocietyUpdateAccount({ account }) {
    const { langData } = useLang();

    const formik = useFormik({
        initialValues: {
            profilPic: null,
            societyName: account.societyName,
            phone: account.phone, country: account.country,
            address: account.address, workSector: account.workSector,
            description: account.description,
        },
        // validationSchema: societyfinaliseAccountValidation,
        // validateOnMount: true,
        onSubmit: handleSubmit
    });

    function handleSubmit(formData) {
        updateSocietyUserAccount(formData, (res) => {
            successAlert('account', 'updated')
            // redirect('/dashboard')
            // updateLogin(res.data.token)
            // window.location = '/dashboard'
        }, (error) => {
            console.log(error);
            errorAlert(error)
        }, () => {
            setSubmitting(false)
        })
    }

    const { isValid, isSubmitting, setSubmitting } = formik;
    return (
        <div className='societyFinaliseAccount'>
            <FormikProvider value={formik}>
                <MyCustomFormikForm>
                    {
                        societyFinaliseAccountFields().map((item, i) => <FormFieldProvider key={'soct field nb' + i}
                            formLangs={langData.form.fields}
                            {...item} />)
                    }

                    <FormButton
                        text={isSubmitting ? '' : "Enregistrer et Continuer"}
                        isValid={isSubmitting ? false : isValid}
                    />
                </MyCustomFormikForm>
            </FormikProvider>
        </div>
    )
}

