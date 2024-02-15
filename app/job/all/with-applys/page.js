'use client'
import { JobWithHerApplys } from '@/components/job/withApplys';
import { NoDataFoundMakeAnotherActions } from '@/components/other';
import { useAuth } from '@/contexts/authContext';
import { useLang } from '@/contexts/langContext';
import { withAuth } from '@/hocs/withAuth';
import { useAllJobWithApplys } from '@/hooks/useJob';
import { SectionSpinner } from '@/uikits/others';
import React from 'react'

function AllUserApply() {
    const { user } = useAuth();
    const { noDataFoundL, buttonsL } = useLang();
    const { jobsWithApplys, jobsWithApplysJobLoading, jobsWithApplysRefetch } = useAllJobWithApplys();

    if (jobsWithApplysJobLoading)
        return <SectionSpinner />;
    if (jobsWithApplys.length == 0)
        return <NoDataFoundMakeAnotherActions
            message={noDataFoundL.noApplyFound}
            btnLabel={buttonsL.backToHome}
            btnLink={'/dashboard'}
        />;

    return (
        <div className='allUserApply'>
            <h1>Liste des candidatures par offres</h1>
            <section className='jobListWithApplys flex f-column'>
                {
                    jobsWithApplys.map((job, i) => <JobWithHerApplys job={job}
                        jobsWithApplysRefetch={jobsWithApplysRefetch}
                        key={'job nb' + i} />)
                }

            </section>
        </div>
    )
}



export default withAuth(AllUserApply)
