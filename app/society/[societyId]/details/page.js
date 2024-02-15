'use client';
import JobCard from '@/components/job/card';
import { DataNotFoundBackToHome } from '@/components/other';
import { useLang } from '@/contexts/langContext';
import { bothAuth } from '@/hocs/bothAuth';
import { useJobsCreatedBySociety } from '@/hooks/useJob';
import { useSociety } from '@/hooks/useSociety';
import { MaterialSymbolsCallSharp, MaterialSymbolsLocationOn, PhEnvelope } from '@/uikits/icon';
import { SectionSpinner } from '@/uikits/others';
import { checkUrl } from '@/utils/front/others';
import { useParams } from 'next/navigation';
import React from 'react'

function SocietyDetails() {
    const { societyId } = useParams();
    const { society, societyLoading } = useSociety(societyId);
    const { formsL, jobL } = useLang();

    if (societyLoading)
        return <SectionSpinner />;

    if (!society)
        return <DataNotFoundBackToHome />
    return (
        <div className='talentProfil'>
            <div className="tpBanner">

            </div>
            <div className="tpBannerOverlay">
                <section className='tbo-image flex f-column'>
                    <img src={checkUrl(society.profilPic.url)} alt={"user " + society._id} />
                    <p>
                        <MaterialSymbolsLocationOn />
                        <span>  {formsL.fields.countryOptions[society.country] + ',' + society.address}</span>
                    </p>
                </section>
                <section className='tbo-data flex f-column'>
                    <h1>{society.societyName}</h1>
                    <div className='tbod-top flex'>
                        <a href={'mailto:' + society.email} target='_blank'>
                            <PhEnvelope />
                        </a>
                        <a href={'tel:' + society.phone} target='_blank'>
                            <MaterialSymbolsCallSharp />
                        </a>
                    </div>

                    <div className='tbod-bottom'>
                        <b>{formsL.fields.workSector.label}</b>
                        <div className='flex'>
                            {
                                society.workSector.map((item, i) => <span key={'skil nb' + i}>{formsL.fields.workSectorOptions[item]}</span>)
                            }
                        </div>
                    </div>
                </section>
            </div>
            <div className="tpOtherDatas flex f-column">
                <section>
                    <h2>Bio</h2>
                    <p>
                        {society.description}
                    </p>
                </section>
                <JobPostedByThisEnterprise societyId={society._id} jobL={jobL} />
            </div>

        </div>
    )
}

function JobPostedByThisEnterprise({ societyId, jobL }) {
    const { jobs, jobsLoading } = useJobsCreatedBySociety(societyId);

    if (jobsLoading)
        return <SectionSpinner />;

    return <div>
        <h2>{jobL.jobsPostedBySocietyProfileTitle}</h2>
        <section>
            {
                jobs.map((item, i) => <JobCard key={'society job nb' + i}
                    item={item}
                />)
            }
        </section>
    </div>
}

export default bothAuth(SocietyDetails)
