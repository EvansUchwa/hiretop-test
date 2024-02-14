'use client'
import { JobWithHerApplys } from '@/components/job/withApplys';
import { ApplyCardViewBySociety } from '@/components/jobApply/card';
import { DataNotFoundBackToHome } from '@/components/other';
import { useAuth } from '@/contexts/authContext';
import { withAuth } from '@/hocs/withAuth';
import { useAllJobWithApplys } from '@/hooks/useJob';
import { SectionSpinner } from '@/uikits/others';
import React from 'react'

function AllUserApply() {
    const { user } = useAuth();
    const { jobsWithApplys, jobsWithApplysJobLoading, jobsWithApplysRefetch } = useAllJobWithApplys();

    if (jobsWithApplysJobLoading)
        return <SectionSpinner />;
    if (jobsWithApplys.length == 0)
        return <DataNotFoundBackToHome />;

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
