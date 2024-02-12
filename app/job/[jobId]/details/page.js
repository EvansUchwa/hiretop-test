'use client';
import { DataNotFoundBackToHome } from '@/components/other';
import { useAuth } from '@/contexts/authContext';
import { useLang } from '@/contexts/langContext';
import { useJobDetails } from '@/hooks/useJob'
import SimpleButton from '@/uikits/button';
import { MaterialSymbolsLocationOn } from '@/uikits/icon';
import { SectionSpinner } from '@/uikits/others';
import { checkUrl } from '@/utils/front/others';
import Link from 'next/link';
import { useParams } from 'next/navigation'
import React from 'react'

function JobDetail() {
    const { jobId } = useParams();
    const { job, jobLoading } = useJobDetails(jobId);
    const { langData } = useLang();
    const formL = langData.form.fields;
    const { user } = useAuth();

    if (jobLoading)
        return <SectionSpinner />

    if (!job) {
        return <DataNotFoundBackToHome />
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
                            <Link href={''}>Nom de la societe</Link>
                            <b><MaterialSymbolsLocationOn />  {job.autor.country + ',' + job.autor.address}</b>
                        </p>
                        <span>{formL.workSectorOptions[job.jobSector]} </span>
                    </div>
                </div>
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
            </section>

            {
                user && user.role == 'talent' && <section>
                    <SimpleButton text="Postuler a l'offre" />
                </section>
            }

        </div>
    )
}

export default JobDetail;
