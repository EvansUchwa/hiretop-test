'use client'
import { JobListSorterLayout, JobSearchLayout } from '@/components/job/layout'
import { useAuth } from '@/contexts/authContext'
import { useLang } from '@/contexts/langContext'
import { withAuth } from '@/hocs/withAuth'
import { useJobsCreatedByConnectedSociety } from '@/hooks/useJob'
import SimpleButton from '@/uikits/button'
import { SectionSpinner } from '@/uikits/others'
import React, { use } from 'react'


function JobList() {
    const { user } = useAuth();
    const { jobs, jobsLoading } = useJobsCreatedByConnectedSociety();
    const { langData } = useLang();
    const formL = langData.form.fields;
    if (jobsLoading) {
        return <SectionSpinner />
    }

    if (jobs.length == 0)
        return <JobSearchLayout>
            <div className='dontHaveDataCreateOne'>
                <h2>Vous n'avez pas encore publier d'offre</h2>
                <SimpleButton text="Ajouter une offre"
                    isLink="/job/create" />
            </div>
        </JobSearchLayout>
    return (
        <JobSearchLayout>
            <JobListSorterLayout jobs={jobs}
                user={user} langData={langData} />
        </JobSearchLayout>
    )
}

export default withAuth(JobList, 'society')
