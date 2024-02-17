import { useJobs } from '@/hooks/useJob'
import { SectionSpinner } from '@/uikits/others';
import React from 'react'
import { NoDataFoundMakeAnotherActions } from '../other';
import JobCard from './card';
import { useLang } from '@/contexts/langContext';

export function Last10JobPosted() {
    const { jobs, jobsLoading } = useJobs(true, 10);
    const { dashboardHomeL, noDataFoundL, buttonsL } = useLang();
    if (jobsLoading)
        return <SectionSpinner />;

    return (
        <div className='dashboard-last10UserApplys'>
            <h2>{dashboardHomeL.lastJobsTitle}</h2>
            <section>
                {
                    jobs.length > 0 ? <section>
                        {
                            jobs.map((item, i) => <JobCard key={'last job nb' + i} item={item}
                            />)
                        }
                    </section> : <NoDataFoundMakeAnotherActions
                        message={noDataFoundL.noJobFound}
                        btnLabel={buttonsL.addJob}
                        btnLink={'/job/create'}
                    />
                }
            </section>
        </div>
    )
}
