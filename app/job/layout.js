'use client'
import { withAuth } from '@/hocs/withAuth'
import React from 'react'

function JLayout({ children }) {
    return children;
}

export default withAuth(JLayout)
