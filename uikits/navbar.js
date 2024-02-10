import React from 'react'
import { MaterialSymbolsAndroidMessages, MaterialSymbolsMenu, MaterialSymbolsNotificationsRounded, MaterialSymbolsSearch } from './icon'
import Link from 'next/link'

export function Navbar1() {
    return (
        <nav className='navbar1'>

        </nav>
    )
}

export function ConnectedNavbar() {
    return (
        <nav className='navbar2 flex'>
            <div className="n2-toggler">
                <span>
                    <MaterialSymbolsMenu />
                </span>
            </div>

            <div className="n2-searchbar">
                <input type="search" />
                <span>
                    <MaterialSymbolsSearch />
                </span>
            </div>

            <div className="n2-actionsIcons flex">
                <span>
                    <MaterialSymbolsAndroidMessages />
                </span>
                <span>
                    <Link href={''}>
                        <MaterialSymbolsNotificationsRounded />
                    </Link>
                </span>
            </div>
        </nav>
    )
}
