'use client'
import { SocietyUpdateAccount } from '@/components/updateAccount/society';
import { useAuth } from '@/contexts/authContext'
import { withAuth } from '@/hocs/withAuth'
import React from 'react'

function AccountUpdate() {
    const { user } = useAuth();
    return (
        <div>
            <h1>Mise a jour de compte</h1>
            {
                user.role == 'society' ? <SocietyUpdateAccount account={user} /> : 'For talent'
            }
        </div>
    )
}

export default withAuth(AccountUpdate);
