'use client';
import { createContext, useState, useEffect, useContext } from 'react';
import frLang from '../utils/front/langages/fr.json';
import enLang from '../utils/front/langages/en.json';
import { lsGet, lsSet } from '@/utils/front/storage';


let langOnLocal = lsGet('current-lang')
export const LangContext = createContext();


export const LangProvider = ({ children }) => {
    const [lang, setLang] = useState(langOnLocal ? langOnLocal : 'fr');
    const [langData, setLangData] = useState(langOnLocal ? (langOnLocal == 'fr' ? frLang : enLang) : frLang);

    function changeLang(newLang) {
        setLang(newLang);
        lsSet('current-lang', newLang)
        setLangData(newLang == 'fr' ? frLang : enLang)
    }

    function getSpecificPart(part) {
        setLangData((prev) => {
            return prev[part];
        })
    }

    return (
        <LangContext.Provider value={{
            lang, langData,
            changeLang, getSpecificPart
        }}>
            {children}
        </LangContext.Provider>
    );
};

export const useLang = () => {
    return useContext(LangContext);
};
