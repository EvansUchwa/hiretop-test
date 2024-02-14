import { MaterialSymbolsAttachMoney, MaterialSymbolsContract, MaterialSymbolsExperiment, MaterialSymbolsLocationOn } from '@/uikits/icon'
import React from 'react'
import SimpleButton from '@/uikits/button'
import { checkUrl, formatRelativeTime } from '@/utils/front/others'
import Link from 'next/link'
import { useLang } from '@/contexts/langContext'
import { useAuth } from '@/contexts/authContext'


function JobCard({ item }) {
    const { formsL, buttonsL } = useLang();
    const { user } = useAuth();
    return (
        <article
            className="jobCard flex f-wrap">
            <a href={'/society/' + item.autor._id + '/details'} className='jc-img'>
                <img src={checkUrl(item.autor.profilPic.url)} alt="enterprise logo" />
                <b>{item.autor.societyName} </b>
                <span>{formatRelativeTime(item.createdAt)} </span>
            </a>

            <section className='jc-infos'>
                <h2>{item.jobTitle}</h2>
                <b>
                    {formsL.fields.workSectorOptions[item.jobSector]}
                </b>
                <div className='flex f-wrap'>

                    <span>
                        <MaterialSymbolsContract /> {item.jobType}
                    </span>
                    <span>
                        <MaterialSymbolsLocationOn /> {item.location}
                    </span>
                    <span>
                        <MaterialSymbolsExperiment /> {item.requiredExpYear}
                    </span>
                    <span>
                        <MaterialSymbolsAttachMoney /> {item.salary}
                    </span>
                </div>
                <div className='flex js-actionAndDate2'>
                    {
                        user && user.role == 'society' && <>
                            <Link href={'/job/' + item._id + '/update'}>{buttonsL.updateJob}</Link>
                            <Link href={'/job/all/with-applys/'}>{buttonsL.seeApplies}</Link>
                        </>
                    }
                </div>
            </section>
            <section className='js-actionAndDate flex f-column'>
                <SimpleButton text={<Link href={'/job/' + item._id + '/details'}>{buttonsL.seeMore}</Link>} />
            </section>
        </article>
    )
}

export default JobCard
