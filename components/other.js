import SimpleButton from '@/uikits/button';
import {
    filterJobsByAZ, filterJobsByZA, filterJobsByCreatedAtRecent, filterJobsByCreatedAtOldest, filterJobsByMostViews,
    filterJobsByLeastViews, handleEnterKeyPress
} from '@/utils/front/others'
import { Form } from 'formik'
import React, { useEffect, useState } from 'react'

export function MyCustomFormikForm({ children }) {
    return (
        <Form onKeyDown={handleEnterKeyPress}>{children}</Form>
    )
}

export function DataSorter({ dataToSort, setDataToSort }) {
    const [sorter, setSorter] = useState('aToz');

    function handleChange(e) {
        const { value } = e.target;
        setSorter(value)
    }

    useEffect(() => {
        const copy = [...dataToSort]
        console.log('her');
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
    }, [sorter])
    return (<section>
        <select onChange={(e) => handleChange(e)}>
            <option value="aToz">A a Z</option>
            <option value="zToa">Z a A</option>
            <option value="latestToldest">Plus recent au moins recent</option>
            <option value="oldestToLatest">Moins recent au plus recent</option>
            <option value="viewsHighToLow">Plus visible au moins visible</option>
            <option value="viewsLowToHigh">Moins visible au plus visible</option>
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


export default MyCustomFormikForm
