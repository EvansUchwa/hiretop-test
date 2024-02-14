'use client'
import { JobListSorterLayout, JobSearchLayout } from '@/components/job/layout'
import { DataNotFoundBackToHome, DataSorter } from '@/components/other'
import { useAuth } from '@/contexts/authContext'
import { useLang } from '@/contexts/langContext'
import { bothAuth } from '@/hocs/bothAuth'
import { useJobs } from '@/hooks/useJob'
import SimpleButton from '@/uikits/button'
import { SectionSpinner } from '@/uikits/others'
import React, { use, useState } from 'react'

function JobList() {
    const { user } = useAuth();

    const { jobs, jobsRefetch, jobsLoading } = useJobs();
    const { langData } = useLang();
    const formL = langData.form.fields;
    if (jobsLoading) {
        return <SectionSpinner />
    }

    if (jobs.length == 0) {
        let content = null;
        if (user && user.role == 'society') {
            content = <div className='dontHaveDataCreateOne'>
                <h2>Aucune offre correspondante</h2>
                <SimpleButton text="Ajouter une offre"
                    isLink="/job/create" />
            </div>
        } else {
            content = <DataNotFoundBackToHome />
        }
        return <JobSearchLayout>
            {content}
        </JobSearchLayout>
    }
    return (
        <JobSearchLayout>
            <JobListSorterLayout jobs={jobs}
                user={user} langData={langData}
            />
        </JobSearchLayout>
    )
}

export default bothAuth(JobList)
