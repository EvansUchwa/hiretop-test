import { useLang } from '@/contexts/langContext';
import SimpleButton from '@/uikits/button';
import { MaterialSymbolsBrightnessAlert, MaterialSymbolsKeyboardArrowDown } from '@/uikits/icon';
import {
    filterJobsByAZ, filterJobsByZA, filterJobsByCreatedAtRecent, filterJobsByCreatedAtOldest, filterJobsByMostViews,
    filterJobsByLeastViews, handleEnterKeyPress
} from '@/utils/front/others'
import { Form } from 'formik'
import React, { useEffect, useState } from 'react'

const sorterEnums = ["aToz", "zToa", "latestToldest", "oldestToLatest", "viewsHighToLow", "viewsLowToHigh"];

export function MyCustomFormikForm({ children }) {
    return (
        <Form onKeyDown={handleEnterKeyPress}>{children}</Form>
    )
}

export function DataSorter({ dataToSort, setDataToSort }) {
    const [sorter, setSorter] = useState('aToz');
    const { formsL } = useLang();
    function handleChange(e) {
        const { value } = e.target;
        setSorter(value)
    }

    useEffect(() => {
        const copy = [...dataToSort]
        if (sorter == 'aToz') {
            filterJobsByAZ(copy, 'jobTitle', setDataToSort)
        } else if (sorter == 'zToa') {
            filterJobsByZA(copy, 'jobTitle', setDataToSort)
        } else if (sorter == 'latestToldest') {
            filterJobsByCreatedAtRecent(copy, setDataToSort)
        } else if (sorter == 'oldestToLatest') {
            filterJobsByCreatedAtOldest(copy, setDataToSort)
        }
        else if (sorter == 'viewsHighToLow') {
            filterJobsByMostViews(copy, setDataToSort)
        } else if (sorter == 'viewsLowToHigh') {
            filterJobsByLeastViews(copy, setDataToSort)
        }
    }, [sorter]);

    return (<section>
        <select onChange={(e) => handleChange(e)}>
            {
                sorterEnums.map((item, i) => <option value={item}>{
                    formsL.fields.sorterOptions[item]
                }</option>)
            }
        </select>
    </section >
    )
}

export function DataNotFoundBackToHome() {
    return <div className='dataNotFoundBackToHome'>
        <p>
            Aucune donnee correspondante retrouve
        </p>
        <SimpleButton text="Retourner a l'accueil" />
    </div>
}

export function NoDataFoundMakeAnotherActions({ message, btnLabel, btnLink }) {
    return <div className='dataNotFoundBackToHome'>
        <p>
            {message}
        </p>
        <SimpleButton text={btnLabel}
            isLink={btnLink} />
    </div>
}

export function AlertBox({ title, content }) {
    return <div className='alertBox'>
        <section className='flex'>
            <MaterialSymbolsBrightnessAlert />
            <h3>{title} </h3>
        </section>
        {content}
    </div>
}

export function WelcomeConnectedUser({ user }) {
    const { dashboardHomeL, buttonsL } = useLang();

    return <div className='dahsboard-welcome'>
        <p>
            {dashboardHomeL.welcome.title}, <b>{user.role == 'society' ? user.societyName : user.firstname}</b>
        </p>
        <p>{dashboardHomeL.welcome[user.role].callToAction}</p>
        <SimpleButton text={user.role == 'society' ? buttonsL.exploreTalents : buttonsL.exploreJobs}
            isLink={user.role == 'society' ? '/talent/all' : 'job/all'} />
    </div>
}

export function SearchAndFilterSectionWrapper({ children }) {
    const [open, setOpen] = useState(false);
    const { buttonsL } = useLang()

    return <div className='searchAndFilterSectionWrapper'>
        <p onClick={() => setOpen(prev => !prev)}>
            {buttonsL.searchAndFilter}  <MaterialSymbolsKeyboardArrowDown />
        </p>
        {
            open && children
        }
    </div>
}

export default MyCustomFormikForm
