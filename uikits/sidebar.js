import Link from 'next/link'
import React from 'react'
import { MaterialSymbolsAdd, MaterialSymbolsDashboard, MaterialSymbolsLogout, MaterialSymbolsPersonSearch, MaterialSymbolsSettingsAccountBox, MaterialSymbolsWork } from './icon'
import { useAuth } from '@/contexts/authContext'
import { useLang } from '@/contexts/langContext';
import Image from 'next/image';

import SvgLogo from '../public/icon.svg'
import { useModal } from '@/contexts/modalContext';
import { ConfirmationModal } from './modal';


function Sidebar() {
    const { showModal } = useModal();
    const { user } = useAuth();
    const { langData } = useLang()
    let sidebarLinksyRole = {
        society: [
            { label: langData.navLinks.dashboard, link: '/dahsboard', icon: <MaterialSymbolsDashboard /> },
            { label: langData.navLinks.addJob, link: '/job/create', icon: <MaterialSymbolsWork /> },
            { label: langData.navLinks.createdJobList, link: '/job/created', icon: <MaterialSymbolsWork /> },
            { label: langData.navLinks.allJobList, link: '/job/all', icon: <MaterialSymbolsWork /> },

            { label: langData.navLinks.talentList, link: '/talent/list', icon: <MaterialSymbolsPersonSearch /> },
            { label: langData.navLinks.account, link: '/account/update', icon: <MaterialSymbolsSettingsAccountBox /> },
        ],
        talent: [
            { label: langData.navLinks.dashboard, link: '/dahsboard', icon: <MaterialSymbolsDashboard /> },
            { label: langData.navLinks.allJobList, link: '/job/all', icon: <MaterialSymbolsWork /> },
            { label: langData.navLinks.applys, link: '/applys/list' },
            { label: langData.navLinks.account, link: '/account/update', icon: <MaterialSymbolsSettingsAccountBox /> },
        ],
    }
    return (
        <aside className='sidebar flex f-column'>
            <div className="sidebar-logo">
                {/* <Image /> */}
                {/* <b>HIRETOP</b> */}
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
                        key={'k' + i}>
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
                    operationAfterValidation={() => null}
                />)}>Se deconnecter</span>
            </div>
        </aside>
    )
}

export default Sidebar
