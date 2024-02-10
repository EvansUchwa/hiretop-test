'use client';
import { useLang } from '@/contexts/langContext';
import { bothAuth } from '@/hocs/bothAuth';
import { useTalentDetails } from '@/hooks/useTalent'
import { PhEnvelope, PhLinkedinLogo } from '@/uikits/icon';
import { checkUrl } from '@/utils/front/others';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React from 'react'

function TalentDetails() {
    const { talentId } = useParams();
    const { talent, talentLoading } = useTalentDetails(talentId);
    const { langData } = useLang();


    if (talentLoading)
        return 'Chargement du talent';

    if (!talent)
        return 'pas de talent'
    return (
        <div className='talentProfil'>
            {/* <h1>Detail d'un talent</h1> */}
            <div className="tpBanner">

            </div>
            <div className="tpBannerOverlay">
                <section className='tbo-image'>
                    <img src={checkUrl(talent.profilPic.url)} alt={"user " + talent._id} />
                </section>
                <section className='tbo-data'>
                    <h1>{talent.firstname + ' ' + talent.lastname}</h1>
                    <div>
                        <a href="">
                            <PhLinkedinLogo />
                        </a>
                        <a href="">
                            <PhEnvelope />
                        </a>
                        <Link href={''}>Message</Link>
                    </div>
                    <div>
                        <p>
                            <b>Title</b>
                            <span>.............</span>
                        </p>
                        <p>
                            <b>Level</b>
                            <span>{talent.expYears}</span>
                        </p>
                    </div>
                    <div>
                        <b>Skill</b>
                        {
                            talent.skills.map((item, i) => <span key={'skil nb' + i}>Skille 1</span>)
                        }
                    </div>
                </section>
            </div>
            <div className="tpOtherDatas">
                <section>
                    <h3>Bio</h3>
                    <p>
                        {talent.description}
                    </p>
                </section>
                <section>
                    <h3>Formations</h3>
                    {
                        talent.formations.map((item, i) => <span key={'formations nb' + i}>Skille 1</span>)
                    }
                </section>
                <section>
                    <h3>Exp</h3>
                    {
                        talent.experiences.map((item, i) => <span key={'exp nb' + i}>Exp 1</span>)
                    }
                </section>

            </div>
            {
                talent.firstname
            }
        </div>
    )
}

export default bothAuth(TalentDetails)
