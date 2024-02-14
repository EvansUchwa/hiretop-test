'use client';
import FormFieldProvider from '@/components/formFieldProvider';
import MyCustomFormikForm from '@/components/other';
import { useAuth } from '@/contexts/authContext';
import { useLang } from '@/contexts/langContext';
import { withAuth } from '@/hocs/withAuth';
import { createJob } from '@/services/front/job';
import { FormButton } from '@/uikits/button';
import { jobFields } from '@/utils/front/form/fieldsArrays';
import { jobValidation } from '@/utils/front/form/fieldsValidations';
import { errorAlert, successAlert } from '@/utils/front/others';
import { useFormik, FormikProvider, Form } from 'formik';
import React from 'react'

function CreateJob() {
    const { user } = useAuth();
    const formik = useFormik({
        initialValues: {
            jobTitle: '', jobSector: '', jobType: '',
            requiredDegree: '', requiredExpYear: '', requiredLang: [],
            remoteAccepted: '', jobDescription: '', location: '',
            advantages: [], tasks: [],
            salary: null, applyLimitDate: ''
        },
        onSubmit: handleSubmit,
        validationSchema: jobValidation,
        validateOnMount: true
    });
    const { isValid, isSubmitting, setSubmitting } = formik;

    function handleSubmit(formData) {
        createJob(formData, (res) => {
            successAlert('job', 'created')
            console.log(res.data._id);
            window.location = '/job/' + res.data._id + '/details'
        }, (error) => {
            errorAlert(error)
        }, () => {
            setSubmitting(false)
        })
    }
    const { buttonsL, jobL } = useLang();
    return (
        <div className='createOrUpdateJob'>
            <h1>{jobL.addJobTitle}</h1>
            <FormikProvider value={formik}>
                <MyCustomFormikForm>
                    {
                        jobFields().map((item, i) => <FormFieldProvider
                            key={'add job field nb' + i}
                            {...item} />)
                    }
                    <FormButton text={isSubmitting ? '' : buttonsL.publish}
                        isValid={isSubmitting ? false : isValid} />
                </MyCustomFormikForm>
            </FormikProvider>
        </div>
    )
}

export default withAuth(CreateJob, 'society');
