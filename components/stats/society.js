import { useSocietyStats } from '@/hooks/useStats'
import { SectionSpinner } from '@/uikits/others';
import React from 'react'
import { SmallStatCard } from './cards';
import { useLang } from '@/contexts/langContext';

function SocietyStats() {
    const { stats, statsLoading } = useSocietyStats();
    const { dashboardHomeL } = useLang();
    if (statsLoading)
        return <SectionSpinner />;

    return (
        <div className='dahsboard-talentStats'>
            <SmallStatCard count={stats.jobCount} title={dashboardHomeL.statsLabels.jobCount} />
            <SmallStatCard count={stats.applysCount} title={dashboardHomeL.statsLabels.applyCount} />
            <SmallStatCard count={stats.applysAcceptedCount} title={dashboardHomeL.statsLabels.applyAcceptedCount} />
            <SmallStatCard count={stats.applysRejectedCount} title={dashboardHomeL.statsLabels.applyRejectedCount} />
            <SmallStatCard count={stats.applysOnPendingCount} title={dashboardHomeL.statsLabels.applyOnPendingCount} />
        </div>
    )
}

export default SocietyStats
