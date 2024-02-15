'use client';
import { DataNotFoundBackToHome } from '@/components/other';
import { TalentExpOrFormationCard } from '@/components/talent/card';
import { useLang } from '@/contexts/langContext';
import { bothAuth } from '@/hocs/bothAuth';
import { useTalentDetails } from '@/hooks/useTalent'
import { MaterialSymbolsCallSharp, MaterialSymbolsLocationOn, PhEnvelope, PhLinkedinLogo } from '@/uikits/icon';
import { SectionSpinner } from '@/uikits/others';
import { checkUrl } from '@/utils/front/others';
import { useParams } from 'next/navigation';
import React from 'react'

function TalentDetails() {
    const { talentId } = useParams();
    const { talent, talentLoading } = useTalentDetails(talentId);
    const { formsL } = useLang();

    if (talentLoading)
        return <SectionSpinner />;

    if (!talent)
        return <DataNotFoundBackToHome />
    return (
        <div className='talentProfil'>
            <div className="tpBanner">

            </div>
            <div className="tpBannerOverlay">
                <section className='tbo-image flex f-column'>
                    <img src={checkUrl(talent.profilPic.url)} alt={"user " + talent._id} />
                    <p>
                        <MaterialSymbolsLocationOn />
                        <span>  {formsL.fields.countryOptions[talent.country] + ',' + talent.address}</span>
                    </p>
                    <p>
                        <span>  {formsL.fields.genderOptions[talent.gender] + ',' + talent.age + ' ans'}</span>
                    </p>

                </section>
                <section className='tbo-data flex f-column'>
                    <h1>{talent.firstname + ' ' + talent.lastname}</h1>
                    <div className='tbod-top flex'>
                        <a href={talent.linkedinUrl} target='_blank'>
                            <PhLinkedinLogo />
                        </a>
                        <a href={'mailto:' + talent.email} target='_blank'>
                            <PhEnvelope />
                        </a>
                        <a href={'tel:' + talent.phone} target='_blank'>
                            <MaterialSymbolsCallSharp />
                        </a>
                        {/* <button>Message</button> */}
                    </div>
                    <div className='tbod-middle flex'>
                        <p>
                            <b>Title</b>
                            <span>{talent.profession}</span>
                        </p>
                        <p>
                            <b>Level</b>
                            <span>{talent.expYears}</span>
                        </p>
                    </div>
                    <div className='tbod-bottom'>
                        <b>Skill</b>
                        <div className='flex'>
                            {
                                talent.skills.map((item, i) => <span key={'skil nb' + i}>{item}</span>)
                            }
                        </div>
                    </div>
                </section>
            </div>
            <div className="tpOtherDatas flex f-column">
                <section>
                    <h2>Bio</h2>
                    <p>
                        {talent.description}
                    </p>
                </section>
                <section>
                    <h2>Formations</h2>
                    {
                        talent.formations.map((item, i) => <TalentExpOrFormationCard key={'talent formation  nb' + i}
                            data={item}
                        />)
                    }
                </section>
                <section>
                    <h2>Experience professionelle</h2>
                    {
                        talent.experiences.map((item, i) => <TalentExpOrFormationCard key={'talent exp  nb' + i}
                            data={item}
                        />)
                    }
                </section>
                <section>
                    <h2>Autres Informations</h2>
                    <p>
                        <b>Langues: </b>
                        {
                            talent.langages.map((item, i) => <span key={'lang exp  nb' + i}>
                                {formsL.fields.requiredLangOptions[item]}
                            </span>)
                        }
                    </p>
                    <p>
                        <b>Salaire approximatif souhaiter: </b>
                        {
                            talent.desiredSalary + '$'
                        }
                    </p>
                    <a href={checkUrl(talent.resume.url)} target='_blank'>
                        <button>Voir le CV</button>
                    </a>
                    {/* <p>
                        <b>Langues: </b>
                        {
                            talent.langages.map((item, i) => <span className=''
                                key={'exp nb' + i}>
                                {item}
                            </span>)
                        }
                    </p> */}
                </section>

            </div>

        </div>
    )
}

export default bothAuth(TalentDetails)
