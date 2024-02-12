import { MaterialSymbolsAttachMoney, MaterialSymbolsContract, MaterialSymbolsExperiment, MaterialSymbolsLocationOn } from '@/uikits/icon'
import React from 'react'
import SimpleButton from '@/uikits/button'
import { checkUrl, formatRelativeTime } from '@/utils/front/others'
import Link from 'next/link'

function JobCard({ formL, item, user }) {
    return (
        <article
            className="jobCard flex f-wrap">
            {/* <img src="https://i.pinimg.com/originals/f9/6a/26/f96a261e5a60d7d66b36e2850e3eb19b.png" alt="enterprise logo" /> */}
            <img src={checkUrl(item.autor.profilPic.url)} alt="enterprise logo" />

            <section className='jc-infos'>
                <h2>{item.jobTitle}</h2>
                <b>
                    {formL.workSectorOptions[item.jobSector]}
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
            </section>
            <section className='js-actionAndDate flex f-column'>
                {
                    user && user.role == 'society' && <SimpleButton
                        defaultBg={'transparent'}
                        defaultColor={'grey'}
                        text={<Link href={'/job/' + item._id + '/update'}>Modifier</Link>} />
                }
                <SimpleButton text={<Link href={'/job/' + item._id + '/details'}>Voir plus</Link>} />
                <span>{formatRelativeTime(item.createdAt)} </span>
            </section>
        </article>
    )
}

export default JobCard
