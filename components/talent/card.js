import SimpleButton from '@/uikits/button';
import { PhEnvelope, PhLinkedinLogo } from '@/uikits/icon';
import { redirect } from 'next/navigation';
import React from 'react'

function TalentCard({ talent }) {
    const { firstname, lastname, description, _id } = talent;
    return (
        <article className='talentCard'>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNLY8ltJ3R-MntBBTH-fs0bgT1f-A78bpKxMZDhP708A&s"
                alt={'talent nb pic' + _id}
            // width={200}
            // height={200}
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

export default TalentCard
