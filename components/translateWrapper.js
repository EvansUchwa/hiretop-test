"use client";
import { LangProvider } from '@/contexts/langContext';
import React from 'react'

const TranslateWrapper = ({ children }) => {
    return <LangProvider>
        {children}
    </LangProvider>
}

export default TranslateWrapper