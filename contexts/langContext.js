'use client';
import { createContext, useState, useContext } from 'react';
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

    return (
        <LangContext.Provider value={{
            lang, langData, changeLang,
            formsL: langData.form,
            buttonsL: langData.buttons,
            accountL: langData.account,
            finaliseAccountL: langData.finaliseAccount,
            authL: langData.auth,
            dashboardHomeL: langData.dashboardHome,
            finaliseAccountL: langData.finaliseAccount,
            jobL: langData.job,
            applyL: langData.apply,
            navLinksL: langData.navLinks,
            cardsL: langData.cards,
            infosL: langData.infos,
            appAdvantagesL: langData.appAdvantages,
            noDataFoundL: langData.noDataFound
        }}>
            {children}
        </LangContext.Provider>
    );
};

export const useLang = () => {
    return useContext(LangContext);
};
