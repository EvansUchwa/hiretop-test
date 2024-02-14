'use client';
import { withAuth } from '@/hocs/withAuth';
import { useTalents } from '@/hooks/useTalent'
import React, { useState } from 'react'
import TalentCard from '@/components/talent/card';
import { SectionSpinner } from '@/uikits/others';
import { SearchOrFilterTalent } from '@/components/talent/searchOrFilter';
import { useQueryState } from 'nuqs';
import { useMySearchParams } from '@/contexts/searchParamContext';

function talentList() {
    const { talents, talentsLoading } = useTalents();

    if (talentsLoading)
        return <SectionSpinner />;
    return (
        <div className='talentList'>
            <h1>Talent</h1>
            <SearchAndListLayout talents={talents} />
        </div>
    )
}

function SearchAndListLayout({ talents }) {
    const [finalTalents, setFT] = useState(talents)
    return <>
        <SearchOrFilterTalent setFT={setFT} talents={talents} />
        <section className='tl-list'>
            {
                finalTalents.map((item, i) => <TalentCard
                    key={'talent nb' + i}
                    talent={item}
                />)
            }
        </section>
    </>
}

export default withAuth(talentList)
