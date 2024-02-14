import { useTalentAllApply } from '@/hooks/useApply'
import { SectionSpinner } from '@/uikits/others';
import React from 'react'
import { NoDataFoundMakeAnotherActions } from '../other';
import { ApplyCardViewByTalent } from './card';
import { useLang } from '@/contexts/langContext';


export function Last10UserApplys() {
    const { applys, applysLoading } = useTalentAllApply(10);
    const { dashboardHomeL } = useLang();
    if (applysLoading)
        return <SectionSpinner />
    return (
        <div className='dashboard-last10UserApplys'>
            <h2>{dashboardHomeL.lastApplysTitle}</h2>
            {
                applys.length > 0 ? <section>
                    {
                        applys.map((item, i) => <ApplyCardViewByTalent key={'last apply nb' + i} apply={item} />)
                    }
                </section> : <NoDataFoundMakeAnotherActions
                    message={'Pas de candidature'}
                    btnLabel={'Consulter les offres'}
                    btnLink={'/job/all'}
                />
            }
        </div>
    )
}
