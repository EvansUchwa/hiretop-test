'use client';
import ApplyToJob from '@/components/jobApply/newApply';
import { NoDataFoundMakeAnotherActions } from '@/components/other';
import { useAuth } from '@/contexts/authContext';
import { useLang } from '@/contexts/langContext';
import { bothAuth } from '@/hocs/bothAuth';
import { useJobDetails } from '@/hooks/useJob'
import { MaterialSymbolsLocationOn } from '@/uikits/icon';
import { SectionSpinner } from '@/uikits/others';
import { checkUrl } from '@/utils/front/others';
import dayjs from 'dayjs';
import Link from 'next/link';
import { useParams } from 'next/navigation'
import React from 'react'

function JobDetail() {
    const { jobId } = useParams();
    const { job, jobLoading } = useJobDetails(jobId);
    const { buttonsL, noDataFoundL, formsL, jobL } = useLang();
    const { user } = useAuth();

    if (jobLoading)
        return <SectionSpinner />

    if (!job) {
        return <NoDataFoundMakeAnotherActions
            message={noDataFoundL.noJobFound}
            btnLabel={buttonsL.exploreJobs}
            btnLink={'/job/all'}
        />
    }

    return (
        <div className='jobDetails'>
            <section className='jd-header'>
                <h1>{job.jobTitle} </h1>
                <div className='flex'>
                    <img src={checkUrl(job.autor.profilPic.url)}
                        alt="societyLogo" />
                    <div>
                        <p>
                            <Link href={'/society/' + job.autor._id + '/details'}>{job.autor.societyName}</Link>
                            <b><MaterialSymbolsLocationOn />  {job.autor.country + ',' + job.autor.address}</b>
                        </p>
                        <span>{formsL.fields.workSectorOptions[job.jobSector]} </span>
                    </div>
                </div>
            </section>
            <section className='jd-aditionalInfos1 flex f-column'>
                <div>
                    <h2>{formsL.fields['jobDescription'].label}</h2>
                    <p>
                        {job.jobDescription}
                    </p>
                </div>
                <div>
                    <h2>{formsL.fields['tasks'].label}</h2>
                    <ul>
                        {
                            job.tasks.map((item, i) => <li key={'task nb' + i}>
                                {item}
                            </li>)
                        }
                    </ul>
                </div>
                <div>
                    <h2>{formsL.fields['advantages'].label}</h2>
                    <ul>
                        {
                            job.advantages.map((item, i) => <li key={'advantages nb' + i}>
                                {item}
                            </li>)
                        }
                    </ul>
                </div>
                <div>
                    <h2>{formsL.fields['requiredLang'].label}</h2>
                    <ul>
                        {
                            job.requiredLang.map((item, i) => <li key={'lang nb' + i}>
                                {formsL.fields.requiredLangOptions[item]}
                            </li>)
                        }
                    </ul>
                </div>
            </section>
            <section className='jd-aditionalInfos2 flex f-column'>
                <h2>{jobL.otherInformationsTitle}</h2>
                <p>
                    <b>{formsL.fields['location'].label}: </b>
                    <p>
                        {job.location}
                    </p>
                </p>
                <p>
                    <b>{formsL.fields['requiredDegree'].label}: </b>
                    <p>
                        {job.requiredDegree}
                    </p>
                </p>
                <p>
                    <b>{formsL.fields['requiredExpYear'].label}</b>
                    <p>
                        {job.requiredExpYear}
                    </p>
                </p>
                <p>
                    <b>{formsL.fields['salary'].label}: </b>
                    <p>
                        {job.salary}
                    </p>
                </p>
                <p>
                    <b>{formsL.fields['applyLimitDate'].label}: </b>
                    <p>
                        {dayjs(job.applyLimitDate).format('MM-DD-YYYY')}
                    </p>
                </p>
            </section>

            <ApplyToJob jobId={job._id} />
        </div>
    )
}

export default bothAuth(JobDetail);
