import { useTalentStats } from '@/hooks/useStats'
import { SectionSpinner } from '@/uikits/others';
import React from 'react'
import { SmallStatCard } from './cards';
import { useLang } from '@/contexts/langContext';

function TalentsStats() {
    const { stats, statsLoading } = useTalentStats();
    const { dashboardHomeL } = useLang();

    if (statsLoading)
        return <SectionSpinner />;

    return (
        <div className='dahsboard-talentStats'>
            <SmallStatCard count={stats.applysCount} title={dashboardHomeL.statsLabels.applyCount} />
            <SmallStatCard count={stats.applysAcceptedCount} title={dashboardHomeL.statsLabels.applyAcceptedCount} />
            <SmallStatCard count={stats.applysRejectedCount} title={dashboardHomeL.statsLabels.applyRejectedCount} />
            <SmallStatCard count={stats.applysOnPendingCount} title={dashboardHomeL.statsLabels.applyOnPendingCount} />
        </div>
    )
}

export default TalentsStats
