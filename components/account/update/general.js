import FormFieldProvider from '@/components/formFieldProvider';
import MyCustomFormikForm from '@/components/other';
import { updateSocietyGeneralData, updateTalentGeneralData } from '@/utils/front/form/fieldsArrays';
import React from 'react'
import { FormikProvider, useFormik } from 'formik';
import { useLang } from '@/contexts/langContext';
import { FormButton } from '@/uikits/button';
import { updateSocietyOrTalentGeneralData } from '@/services/front/acoount';
import { errorAlert, successAlert } from '@/utils/front/others';
import { societyUpdateGeneralInformationValidation, talentUpdateGeneralInformationValidation } from '@/utils/front/form/fieldsValidations';

export function UpdateTalentGeneralInformations({ user, refetchUserLoggedData }) {
    const { buttonsL } = useLang();
    const formik = useFormik({
        initialValues: {
            profession: user.profession,
            gender: user.gender,
            firstname: user.firstname,
            lastname: user.lastname,
            age: user.age,
            phone: user.phone,
            address: user.address,
            country: user.country,
            workSector: user.workSector,
            formations: user.formations, experiences: user.experiences,
            skills: user.skills, lastDegree: user.lastDegree, expYears: user.expYears,
            experiences: user.experiences,
            skills: user.skills,
            lastDegree: user.lastDegree,
            expYears: user.expYears,
            desiredSalary: user.desiredSalary,
            preferredLocations: user.preferredLocations,
            linkedinUrl: user.linkedinUrl,
            langages: user.langages,
            description: user.description,
        },
        validationSchema: talentUpdateGeneralInformationValidation,
        validateOnMount: true,
        onSubmit: handleSubmit
    });

    function handleSubmit(formData) {
        updateSocietyOrTalentGeneralData(formData, (res) => {
            successAlert('account', 'updated')
            refetchUserLoggedData()
        }, (error) => {
            errorAlert(error)
        }, () => {
            // setOL(false)
            setSubmitting(false)
        })
    }

    const { isValid, isSubmitting, setSubmitting } = formik;
    return (
        <div className=''>
            <FormikProvider value={formik}>
                <MyCustomFormikForm>
                    {
                        updateTalentGeneralData().map((item, i) => <FormFieldProvider key={'talent field nb' + i}
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

export function UpdateSocietyGeneralInformationsForm({ user, refetchUserLoggedData }) {
    const { buttonsL } = useLang();
    const formik = useFormik({
        initialValues: {
            societyName: user.societyName,
            phone: user.phone, country: user.country,
            address: user.address, workSector: user.workSector,
            description: user.description,
        },
        validationSchema: societyUpdateGeneralInformationValidation,
        validateOnMount: true,
        onSubmit: handleSubmit
    });

    function handleSubmit(formData) {
        updateSocietyOrTalentGeneralData(formData, (res) => {
            successAlert('account', 'updated')
            refetchUserLoggedData()
        }, (error) => {
            errorAlert(error)
        }, () => {
            // setOL(false)'
            setSubmitting(false)
        })
    }

    const { isValid, isSubmitting, setSubmitting } = formik;
    return (
        <div className=''>
            <FormikProvider value={formik}>
                <MyCustomFormikForm>
                    {
                        updateSocietyGeneralData().map((item, i) => <FormFieldProvider key={'soct field nb' + i}
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
