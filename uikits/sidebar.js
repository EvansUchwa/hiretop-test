import Link from 'next/link'
import React from 'react'
import { MaterialSymbolsDashboard, MaterialSymbolsLogout, MaterialSymbolsPersonSearch, MaterialSymbolsSettingsAccountBox, MaterialSymbolsWork, MaterialSymbolsWorkAlert, MaterialSymbolsWorkHistory, MaterialSymbolsWorkUpdate } from './icon'
import { useAuth } from '@/contexts/authContext'
import { useLang } from '@/contexts/langContext';
import Image from 'next/image';

import SvgLogo from '../public/icon.svg'
import { useModal } from '@/contexts/modalContext';
import { ConfirmationModal } from './modal';
import { useNavbar } from '@/contexts/navContext';
import { usePathname } from 'next/navigation';

function Sidebar() {
    const pathname = usePathname();
    const { toggleSidebar, sidebarVisible } = useNavbar()
    const { showModal } = useModal();
    const { user, logout } = useAuth();
    const { navLinksL, buttonsL } = useLang();
    let sidebarLinksyRole = {
        society: [
            { label: navLinksL.dashboard, link: '/dashboard', icon: <MaterialSymbolsDashboard /> },
            { label: navLinksL.addJob, link: '/job/create', icon: <MaterialSymbolsWorkUpdate /> },
            { label: navLinksL.yourCreatedJobs, link: '/job/created', icon: <MaterialSymbolsWorkHistory /> },
            { label: navLinksL.allJobList, link: '/job/all', icon: <MaterialSymbolsWork /> },
            { label: navLinksL.yourCreatedJobsWithApplies, link: '/job/all/with-applys', icon: <MaterialSymbolsWorkAlert /> },

            { label: navLinksL.talentList, link: '/talent/all', icon: <MaterialSymbolsPersonSearch /> },
            { label: navLinksL.account, link: '/account', icon: <MaterialSymbolsSettingsAccountBox /> },
        ],
        talent: [
            { label: navLinksL.dashboard, link: '/dashboard', icon: <MaterialSymbolsDashboard /> },
            { label: navLinksL.allJobList, link: '/job/all', icon: <MaterialSymbolsWork /> },
            { label: navLinksL.yourApplies, link: '/apply/all', icon: <MaterialSymbolsWorkAlert /> },
            { label: navLinksL.account, link: '/account', icon: <MaterialSymbolsSettingsAccountBox /> },
        ],
    }
    return (
        <aside className={'sidebar flex f-column ' + (sidebarVisible ? 'visibleSidebar' : '')}>
            <div className="sidebar-logo">
                <Image
                    src={SvgLogo}
                    alt="sidebar logo"
                    width={70}
                    height={70}
                />
            </div>
            <div className="sidebar-links flex f-column">
                {
                    sidebarLinksyRole[user.role].map((item, i) => <Link
                        href={item.link}
                        key={'k' + i}
                        className={pathname == item.link ? 'activeNavLink' : ''}>
                        {item.icon}
                        <span>
                            {item.label}
                        </span>
                    </Link>)
                }
            </div>
            <div className="sidebar-logout flex">
                <MaterialSymbolsLogout />
                <span onClick={() => showModal(<ConfirmationModal
                    title="Voulez vous vraiment vous deconnecter ?"
                    operationAfterValidation={() => logout()}
                />)}>{buttonsL.logout}</span>
            </div>
        </aside>
    )
}

export default Sidebar
