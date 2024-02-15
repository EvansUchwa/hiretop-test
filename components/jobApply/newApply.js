'use client'
import { useAuth } from '@/contexts/authContext';
import { useModal } from '@/contexts/modalContext'
import SimpleButton, { FormButton } from '@/uikits/button'
import React from 'react'
import { FormikProvider, useFormik } from 'formik';
import MyCustomFormikForm, { AlertBox } from '../other';
import { newAppplyFields } from '@/utils/front/form/fieldsArrays';
import FormFieldProvider from '../formFieldProvider';
import { useLang } from '@/contexts/langContext';
import { applyValidation } from '@/utils/front/form/fieldsValidations';

import { applyToJob } from '@/services/front/apply';
import { errorAlert, successAlert } from '@/utils/front/others';
import { useAllApplyForAJob } from '@/hooks/useApply';
import { SectionSpinner } from '@/uikits/others';
import Link from 'next/link';


function talentAlreadyApplyForThisJob(talentId, applys) {
    const filter = applys.filter((item) => item.talent == talentId)
    if (filter.length > 0)
        return true;
    return false;
}

function ApplyToJob({ jobId }) {
    const { buttonsL } = useLang();
    const { applysForJob, applysForJobLoading, applysForJobRefetch } = useAllApplyForAJob(jobId);
    const { showModal, hideModal } = useModal();
    const { user } = useAuth();
    function showApplyForm(jobId) {
        showModal(<ApplyForm jobId={jobId} hideModal={hideModal}
            applysForJobRefetch={applysForJobRefetch}
        />);
    }

    if (!user)
        return null;
    if (applysForJobLoading)
        return <SectionSpinner />;
    if (user.role == 'society')
        return null;
    if (user.role == 'talent' && talentAlreadyApplyForThisJob(user._id, applysForJob)) {
        return <div className='newApply'>
            <SimpleButton text={buttonsL.youAlreadySendApply}
                disabled={true}
            />
        </div>;
    }
    return (
        <div className='newApply'>
            <SimpleButton text={buttonsL.sendApply}
                onClick={() => showApplyForm(jobId)} />
        </div>
    )
}

function ApplyForm({ jobId, hideModal, applysForJobRefetch }) {
    const { infosL, buttonsL } = useLang();
    const formik = useFormik({
        initialValues: {
            job: jobId, applyerMessage: '',
        },
        onSubmit: handleSubmit,
        validationSchema: applyValidation,
        validateOnMount: true
    });
    const { isValid, isSubmitting } = formik;

    function handleSubmit(values) {
        applyToJob(values, () => {
            successAlert('apply', 'created')
            applysForJobRefetch()
        }, (err) => {
            errorAlert(err)
        }, () => {
            hideModal();
        })
    }
    return <FormikProvider value={formik}>
        <AlertBox title={infosL.newApplyResumeInfosTitle}
            content={<p>
                {infosL.newApplyResumeInfos} <Link href={''}>{buttonsL.clickHere}</Link>
            </p>} />
        <MyCustomFormikForm>
            {
                newAppplyFields().map((item, i) => <FormFieldProvider key={'form field nb' + i}
                    {...item} />)
            }
            <FormButton text={isSubmitting ? '' : buttonsL.sendApply}
                isValid={isSubmitting ? false : isValid} />
        </MyCustomFormikForm>
    </FormikProvider>
}

export default ApplyToJob
