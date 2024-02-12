'use client';
import { SearchJobForm } from "./search";
import { useState } from "react";
const { DataSorter } = require("../other");
const { default: JobCard } = require("./card");

export function JobSearchLayout({ children }) {
    return <div className='jobList'>
        <SearchJobForm />
        {children}
    </div>
}

export function JobListSorterLayout({ jobs, user, langData }) {
    const [resultJobs, setRJ] = useState(jobs);
    const formL = langData.form.fields;
    return <>
        <DataSorter
            dataToSort={jobs}
            setDataToSort={setRJ}
        />
        <div>
            {
                resultJobs.map((item, i) => <JobCard
                    key={'job card nb' + i}
                    item={item}
                    formL={formL}
                    user={user}
                />)
            }
        </div>
    </>
}