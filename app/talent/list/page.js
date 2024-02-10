'use client';
import { withAuth } from '@/hocs/withAuth';
import { useTalents } from '@/hooks/useTalent'
import React from 'react'
import TalentCard from '@/components/talent/card';

function talentList() {
    const { talents, talentsLoading } = useTalents();
    if (talentsLoading)
        return 'Chargement';
    return (
        <div className='talentList'>
            <h1>Talent</h1>
            <section className='tl-list'>
                {
                    talents.map((item, i) => <TalentCard
                        key={'talent nb' + i}
                        talent={item}
                    />)
                }
            </section>
        </div>
    )
}

export default withAuth(talentList)
