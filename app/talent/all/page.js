'use client';

import { useTalents } from '@/hooks/useTalent'
import React, { useState } from 'react'
import TalentCard from '@/components/talent/card';
import { SectionSpinner } from '@/uikits/others';
import { SearchOrFilterTalent } from '@/components/talent/searchOrFilter';
import { bothAuth } from '@/hocs/bothAuth';
import { NoDataFoundMakeAnotherActions } from '@/components/other';
import { useAuth } from '@/contexts/authContext';
import { useLang } from '@/contexts/langContext';

function talentList() {
    const { buttonsL, noDataFoundL } = useLang();
    const { talents, talentsLoading } = useTalents();
    const { user } = useAuth();

    if (talentsLoading)
        return <SectionSpinner />;

    if (talents.length == 0) {
        if (user && user.role == 'society') {
            return <NoDataFoundMakeAnotherActions
                message={noDataFoundL.noProfileFound}
                btnLabel={buttonsL.backToHome}
                btnLink={'/dashboard'}
            />
        } else {
            return <NoDataFoundMakeAnotherActions
                message={noDataFoundL.noProfileFound}
                btnLabel={buttonsL.register}
                btnLink={'/register'}
            />
        }
    }
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

export default bothAuth(talentList)
