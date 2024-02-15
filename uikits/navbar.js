'use client';
import React, { useState } from 'react'
import { MaterialSymbolsLogout, MaterialSymbolsMenu, MaterialSymbolsSearch } from './icon'
import Link from 'next/link'
import { useNavbar } from '@/contexts/navContext'
import { useAuth } from '@/contexts/authContext'
import { checkUrl } from '@/utils/front/others'
import { isMobile, isTablet } from 'react-device-detect'
import { redirect, useRouter } from 'next/navigation'
import { useLang } from '@/contexts/langContext';
export function Navbar1() {
    return (
        <nav className='navbar1'>

        </nav>
    )
}

export function ConnectedNavbar() {
    const { lang, changeLang } = useLang();
    const { user } = useAuth();
    const { toggleSidebar, sidebarVisible } = useNavbar();
    const [searchKey, setSK] = useState(null);
    const router = useRouter();

    function handleSearchKeyChange(e) {
        const { value } = e.target;
        setSK(value)

    }
    function redirectToSearchResultPage() {
        router.push(user.role == 'talent' ? '/job/all?searchJobKeyword=' + searchKey : '/talent/all?searchTalentKeyword=' + searchKey)
    }
    return (
        <nav className={'navbar2 flex ' + (sidebarVisible ? '' : 'sidebarVisbleNavStyle')}>
            <div className="n2-toggler">
                <span onClick={() => toggleSidebar(true)}>
                    <MaterialSymbolsMenu />
                </span>
            </div>

            <div className="n2-searchbar">
                <input type="search" onChange={handleSearchKeyChange} />
                <span onClick={redirectToSearchResultPage}>
                    <MaterialSymbolsSearch />
                </span>
            </div>

            <div className="n2-actionsIcons flex">
                {/* <span>
                    <MaterialSymbolsAndroidMessages />
                </span>
                <span>
                    <Link href={''}>
                        <MaterialSymbolsNotificationsRounded />
                    </Link>
                </span> */}
                <Link href='/account' className='flex'>
                    <img src={checkUrl(user.profilPic.url)} alt="user connected profil pic" />
                    <b>{user.role == 'talent' ? user.firstname : user.societyName} </b>
                </Link>
                <span>
                    <MaterialSymbolsLogout />
                </span>
                <span onClick={() => changeLang(lang == 'fr' ? 'en' : 'fr')}>
                    {lang == 'fr' ? "EN" : "FR"}
                </span>
            </div>
        </nav>
    )
}
