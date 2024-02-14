import { useJobsCreatedByConnectedSociety } from '@/hooks/useJob'
import { SectionSpinner } from '@/uikits/others';
import React from 'react'
import { NoDataFoundMakeAnotherActions } from '../other';
import JobCard from './card';
import { useLang } from '@/contexts/langContext';

export function Last10JobPosted() {
    const { jobs, jobsLoading } = useJobsCreatedByConnectedSociety(10);
    const { dashboardHomeL } = useLang();
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
                        message={'Pas d\'offre'}
                        btnLabel={'Ajouter une offre'}
                        btnLink={'/job/all'}
                    />
                }
            </section>
        </div>
    )
}
