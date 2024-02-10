'use client';
import { useLang } from '@/contexts/langContext';
import { useJobDetails } from '@/hooks/useJob'
import { SectionSpinner } from '@/uikits/others';
import { useParams } from 'next/navigation'
import React from 'react'

function JobDetail() {
    const { jobId } = useParams();
    const { job, jobLoading } = useJobDetails(jobId);
    const { langData } = useLang();
    const formL = langData.form.fields;

    if (jobLoading)
        return <SectionSpinner />
    return (
        <div className='jobDetails'>
            <section className='jd-header'>
                <h1>{job.jobTitle} </h1>
                <b>{formL.workSectorOptions[job.jobSector]} </b>
            </section>
            <section className='jd-aditionalInfos1 flex f-column'>
                <div>
                    <h2>{formL['jobDescription'].label}</h2>
                    <p>
                        {job.jobDescription}
                    </p>
                </div>
                <div>
                    <h2>{formL['tasks'].label}</h2>
                    <ul>
                        {
                            job.tasks.map((item, i) => <li key={'task nb' + i}>
                                {item}
                            </li>)
                        }
                    </ul>
                </div>
                <div>
                    <h2>{formL['advantages'].label}</h2>
                    <ul>
                        {
                            job.advantages.map((item, i) => <li key={'advantages nb' + i}>
                                {item}
                            </li>)
                        }
                    </ul>
                </div>
                <div>
                    <h2>{formL['requiredLang'].label}</h2>
                    <ul>
                        {
                            job.requiredLang.map((item, i) => <li key={'lang nb' + i}>
                                {item}
                            </li>)
                        }
                    </ul>
                </div>
                {/* <div>
                    <h2>Description</h2>
                    <p>
                        {job.jobDescription}
                    </p>
                </div> */}
            </section>
            <section className='jd-aditionalInfos2 flex f-column'>
                <h2>Plus d'informations</h2>
                <p>
                    <b>{formL['location'].label}: </b>
                    <p>
                        {job.location}
                    </p>
                </p>
                <p>
                    <b>{formL['requiredDegree'].label}: </b>
                    <p>
                        {job.requiredDegree}
                    </p>
                </p>
                <p>
                    <b>{formL['requiredExpYear'].label}</b>
                    <p>
                        {job.requiredExpYear}
                    </p>
                </p>
                <p>
                    <b>{formL['salary'].label}: </b>
                    <p>
                        {job.salary}
                    </p>
                </p>
                <p>
                    <b>{formL['applyLimitDate'].label}: </b>
                    <p>
                        {job.applyLimitDate}
                    </p>
                </p>
                {/* <div>
                    <h2>Description</h2>
                    <p>
                        {job.jobDescription}
                    </p>
                </div> */}
            </section>
        </div>
    )
}
// jobType
// requiredDegree
// requiredExpYear
// requiredLang
// salary
// applyLimitDate

export default JobDetail
