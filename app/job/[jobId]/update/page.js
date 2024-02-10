'use client';
import UpdateJobForm from '@/components/job/update';
import { useLang } from '@/contexts/langContext';
import { useJobDetails } from '@/hooks/useJob'
import { SectionSpinner } from '@/uikits/others';
import { useParams } from 'next/navigation'
import React from 'react'

function JobUpdate() {
    const { jobId } = useParams();
    const { job, jobLoading } = useJobDetails(jobId);
    const { langData } = useLang();
    const formL = langData.form.fields;

    if (jobLoading)
        return <SectionSpinner />
    return (
        <UpdateJobForm job={job} />
    )
}


export default JobUpdate
