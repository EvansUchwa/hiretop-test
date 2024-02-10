import Link from 'next/link'
import React from 'react'
import { MaterialSymbolsAdd, MaterialSymbolsDashboard, MaterialSymbolsLogout, MaterialSymbolsPersonSearch, MaterialSymbolsSettingsAccountBox, MaterialSymbolsWork } from './icon'
import { useAuth } from '@/contexts/authContext'
import { useLang } from '@/contexts/langContext';



function Sidebar() {
    const { user } = useAuth();
    const { langData } = useLang()
    let sidebarLinksyRole = {
        society: [
            { label: langData.navLinks.dashboard, link: '/dahsboard', icon: <MaterialSymbolsDashboard /> },
            { label: langData.navLinks.addJob, link: '/job/create', icon: <MaterialSymbolsWork /> },
            { label: langData.navLinks.jobList, link: '/job/list', icon: <MaterialSymbolsWork /> },
            { label: langData.navLinks.talentList, link: '/talent/list', icon: <MaterialSymbolsPersonSearch /> },
            { label: langData.navLinks.account, link: '/account/update', icon: <MaterialSymbolsSettingsAccountBox /> },
        ],
        talent: [
            { label: langData.navLinks.dashboard, link: '/dahsboard', icon: <MaterialSymbolsDashboard /> },
            { label: langData.navLinks.jobList, link: '/job/list', icon: <MaterialSymbolsWork /> },
            { label: langData.navLinks.applys, link: '/applys/list' },
            { label: langData.navLinks.account, link: '/account/update', icon: <MaterialSymbolsSettingsAccountBox /> },
        ],
    }
    return (
        <aside className='sidebar flex f-column'>
            <div className="sidebar-logo">
                {/* <Image /> */}
                <b>HIRETOP</b>
            </div>
            <div className="sidebar-links flex f-column">
                {
                    sidebarLinksyRole[user.role].map((item, i) => <Link
                        href={item.link}
                        key={'k' + i}>
                        <section>
                            {item.icon}
                            <b>
                                {item.label}
                            </b>
                        </section>
                    </Link>)
                }
            </div>
            <div className="sidebar-logout flex">
                <MaterialSymbolsLogout />
                <span>Se deconnecter</span>
            </div>
        </aside>
    )
}

export default Sidebar
