'use client';
import { useLang } from '@/contexts/langContext';
import { useFormik, FormikProvider, Form } from 'formik';
import FormFieldProvider from '../formFieldProvider';
import React from 'react'
import { jobFields } from '@/utils/front/form/fieldsArrays';
import { jobValidation } from '@/utils/front/form/fieldsValidations';
import { errorAlert, handleEnterKeyPress, successAlert } from '@/utils/front/others';
import { FormButton } from '@/uikits/button';
import { updateJob } from '@/services/front/job';

function UpdateJobForm({ job }) {
    const formik = useFormik({
        initialValues: {
            jobTitle: job.jobTitle, jobSector: job.jobSector, jobType: job.jobType,
            requiredDegree: job.requiredDegree, requiredExpYear: job.requiredExpYear, requiredLang: job.requiredLang,
            remoteAccepted: job.remoteAccepted, jobDescription: job.jobDescription, location: job.location,
            advantages: job.advantages, tasks: job.tasks,
            salary: job.salary, applyLimitDate: job.applyLimitDate
        },
        onSubmit: handleSubmit,
        validationSchema: jobValidation,
        validateOnMount: true
    });
    const { isValid, isSubmitting, setSubmitting } = formik;

    function handleSubmit(formData) {
        updateJob(job._id, formData, (res) => {
            successAlert('job', 'updated')
            window.location = '/job/' + job._id + '/details'
        }, (error) => {
            errorAlert(error)
        }, () => {
            setSubmitting(false)
        })
    }
    const { buttonsL } = useLang();
    return (
        <div className='createOrUpdateJob'>
            <FormikProvider value={formik}>
                <Form onKeyDown={handleEnterKeyPress}>
                    {
                        jobFields().map((item, i) => <FormFieldProvider
                            key={'update job field nb' + i}
                            {...item} />)
                    }
                    <FormButton text={isSubmitting ? '' : buttonsL.save}
                        isValid={isSubmitting ? false : isValid} />
                </Form>
            </FormikProvider>
        </div>
    )
}

export default UpdateJobForm
