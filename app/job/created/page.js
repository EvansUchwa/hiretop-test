'use client'
import JobCard from '@/components/job/card'
import { JobListSorterLayout, JobSearchLayout } from '@/components/job/layout'
import { useAuth } from '@/contexts/authContext'
import { useLang } from '@/contexts/langContext'
import { useJobsBySpecificSociety } from '@/hooks/useJob'
import SimpleButton from '@/uikits/button'
import { SectionSpinner } from '@/uikits/others'
import React, { use } from 'react'

function YourCreatedJobListWrapper({ children }) {
    return <div className='jobList'>
        <h1>Liste des offres que vous avez ajouter</h1>
        <SearchJobForm />
        {children}
    </div>
}
function JobList() {
    const { user } = useAuth();
    const { jobs, jobsLoading } = useJobsBySpecificSociety(user._id);
    const { langData } = useLang();
    const formL = langData.form.fields;
    if (jobsLoading) {
        return <SectionSpinner />
    }

    if (jobs.length == 0)
        return <div className='dontHaveDataCreateOne'>
            <h2>Vous n'avez pas encore publier d'offre</h2>
            <SimpleButton text="Ajouter une offre"
                isLink="/job/create" />
        </div>
    return (
        <JobSearchLayout>
            <JobListSorterLayout jobs={jobs}
                user={user} langData={langData} />
        </JobSearchLayout>
    )
}

export default JobList
