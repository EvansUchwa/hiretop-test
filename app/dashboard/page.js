"use client";
import React from 'react'
import { withAuth } from '@/hocs/withAuth';
import { useAuth } from '@/contexts/authContext';
import TalentsStats from '@/components/stats/talents';
import { WelcomeConnectedUser } from '@/components/other';
import { Last10UserApplys } from '@/components/jobApply/lastApplys';
import SocietyStats from '@/components/stats/society';
import { Last10JobPosted } from '@/components/job/lastJobs';

function Dashboard() {
    const { user } = useAuth();

    return (
        <div className="dashboard">
            <WelcomeConnectedUser user={user} />
            {user.role == 'talent' ? <>
                <TalentsStats />
                <Last10UserApplys />
            </> : <>
                <SocietyStats />
                <Last10JobPosted />
            </>}
        </div>
    )
}

export default withAuth(Dashboard);
