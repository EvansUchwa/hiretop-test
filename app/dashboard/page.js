"use client";
import React from 'react'
import Image from "next/image";
import { ConnectedNavbar } from '@/uikits/navbar';
import Sidebar from '@/uikits/sidebar';
import { withAuth } from '@/hocs/withAuth';

function Dashboard() {
    {/* <Image
    src={session.user?.image}
    fill
    alt=""
    className="object-cover rounded-full"/> */}

    return (
        <div>
            <div className="dashboard">
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident asperiores facilis ad eaque exercitationem cumque dolorum enim excepturi, aliquid quasi quos veritatis! Totam fuga quisquam quas autem velit ducimus vero!
                </p>
            </div>
        </div>
    )
}

export default withAuth(Dashboard);
