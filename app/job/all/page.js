'use client'
import { JobListSorterLayout, JobSearchLayout } from '@/components/job/layout'
import { DataNotFoundBackToHome, DataSorter, NoDataFoundMakeAnotherActions } from '@/components/other'
import { useAuth } from '@/contexts/authContext'
import { useLang } from '@/contexts/langContext'
import { bothAuth } from '@/hocs/bothAuth'
import { useJobs } from '@/hooks/useJob'
import SimpleButton from '@/uikits/button'
import { SectionSpinner } from '@/uikits/others'


function JobList() {
    const { user } = useAuth();

    const { jobs, jobsRefetch, jobsLoading } = useJobs();
    const { langData, noDataFoundL, buttonsL } = useLang();
    const formL = langData.form.fields;
    if (jobsLoading) {
        return <SectionSpinner />
    }

    if (jobs.length == 0) {
        let content = null;
        if (user && user.role == 'society') {
            content = <NoDataFoundMakeAnotherActions
                message={noDataFoundL.noJobFound}
                btnLabel={buttonsL.addJob}
                btnLink={'/job/create'}
            />
        } else if (user && user == 'talent') {
            content = <NoDataFoundMakeAnotherActions
                message={noDataFoundL.noJobFound}
                btnLabel={buttonsL.backToHome}
                btnLink={'/dashboard'}
            />
        } else {
            content = <NoDataFoundMakeAnotherActions
                message={noDataFoundL.noJobFound}
                btnLabel={buttonsL.addJob}
                btnLink={'/register'}
            />
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
