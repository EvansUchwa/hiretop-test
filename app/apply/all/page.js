'use client'
import { ApplyCardViewByTalent } from '@/components/jobApply/card';
import { DataNotFoundBackToHome, NoDataFoundMakeAnotherActions } from '@/components/other';
import { useAuth } from '@/contexts/authContext';
import { useLang } from '@/contexts/langContext';
import { withAuth } from '@/hocs/withAuth';
import { useTalentAllApply } from '@/hooks/useApply'
import { SectionSpinner } from '@/uikits/others';
import React from 'react'
// allApplysTitle
function AllJobWithApply() {
    const { user } = useAuth();
    const { applys, applysLoading } = useTalentAllApply();
    const { applyL, noDataFoundL, buttonsL } = useLang();

    if (applysLoading)
        return <SectionSpinner />;

    if (applys.length == 0)
        return <NoDataFoundMakeAnotherActions
            message={noDataFoundL.noApplyFound}
            btnLabel={buttonsL.exploreJobs}
            btnLink={'/job/all'}
        />;

    return (
        <div className='allUserApply'>
            <h1>{applyL.allApplysTitle}</h1>
            <section className='applyList'>
                {
                    applys.map((item, i) => <ApplyCardViewByTalent
                        key={'apply nb' + i}
                        apply={item}
                    />)
                }
            </section>
        </div>
    )
}

export default withAuth(AllJobWithApply)
