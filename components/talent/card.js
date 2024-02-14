import SimpleButton from '@/uikits/button';
import { PhEnvelope, PhLinkedinLogo } from '@/uikits/icon';
import { checkUrl } from '@/utils/front/others';
import { redirect } from 'next/navigation';
import React from 'react'

function TalentCard({ talent }) {
    const { firstname, lastname, description, _id, profilPic } = talent;
    return (
        <article className='talentCard'>
            <img
                src={checkUrl(profilPic.url)}
                alt={'talent nb pic' + _id}
            />
            <b>{firstname + " " + lastname} </b>
            <p>
                {description}
            </p>
            <section>
                <a href=''>
                    <PhLinkedinLogo />
                </a>
                <a href=''>
                    <PhEnvelope />
                </a>
            </section>
            <SimpleButton text='Voir profil'
                isLink={'/talent/' + _id + '/details'} />
        </article>
    )
}

export function TalentExpOrFormationCard({ data }) {
    const { start, end, desc, title } = data;
    return (
        <article className='formationOrExpCard'>
            <b>Du {start} au {end} :</b>
            <p>
                {desc}
            </p>
        </article>
    )
}

export default TalentCard
