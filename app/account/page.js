'use client'
import { UpdateSocietyFiles, UpdateTalentFiles } from '@/components/account/update/file'
import { UpdateSocietyGeneralInformationsForm, UpdateTalentGeneralInformations } from '@/components/account/update/general'
import { UpdatePassword } from '@/components/account/update/password'
import { useAuth } from '@/contexts/authContext'
import { useLang } from '@/contexts/langContext'
import { withAuth } from '@/hocs/withAuth'
import SimpleButton from '@/uikits/button'
import { ViewTabs } from '@/uikits/others'
import React from 'react'

function Account() {
    const { user, refetchUserLoggedData } = useAuth();
    const { accountL, buttonsL } = useLang();

    return (
        <div className='account'>
            <h1>{accountL.title}</h1>
            <section>
                <ViewTabs tabsList={[
                    {
                        label: accountL.tabs.labels.myProfil, view: <div className='previewProfile'>
                            <p>
                                {accountL.previewProfilText}
                            </p>
                            <SimpleButton
                                text={buttonsL.previewProfil}
                                isLink={'/' + user.role + '/' + user._id + "/details"}
                            />
                        </div>
                    },
                    {
                        label: accountL.tabs.labels.updateYourInformations, view: user.role == 'society' ?
                            <UpdateSocietyGeneralInformationsForm user={user}
                                refetchUserLoggedData={refetchUserLoggedData} /> :
                            <UpdateTalentGeneralInformations user={user}
                                refetchUserLoggedData={refetchUserLoggedData} />
                    },
                    {
                        label: accountL.tabs.labels.updateYourFiles, view: user.role == 'society' ?
                            <UpdateSocietyFiles user={user}
                                refetchUserLoggedData={refetchUserLoggedData} /> :
                            <UpdateTalentFiles user={user}
                                refetchUserLoggedData={refetchUserLoggedData} />
                    },
                    { label: accountL.tabs.labels.updateYourPassword, view: <UpdatePassword user={user} /> },
                ]} />
            </section>
        </div>
    )
}

export default withAuth(Account)
