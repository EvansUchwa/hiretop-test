import { sortApplyFields } from "@/utils/front/form/fieldsArrays";
import { useFormik } from "formik";
import { FormikProvider } from "formik";
import FormFieldProvider from "../formFieldProvider";
import MyCustomFormikForm from "../other";
import { useEffect, useState } from "react";

const { ApplyCardViewBySociety } = require("../jobApply/card");

export function JobWithHerApplys({ job, jobsWithApplysRefetch }) {
    const [finalApplys, setFA] = useState(job.applys);
    return <div
        className='jobWithApplys flex f-column'>
        <h2>{job.jobTitle} </h2>
        <section className="jwa-filter">
            <JobApplysFilter setFA={setFA} applys={job.applys}
                job={job} />
        </section>
        <div className='flex f-wrap'>
            {
                finalApplys.map((item, i) => <ApplyCardViewBySociety
                    key={'apply nb' + i}
                    apply={item}
                    jobsWithApplysRefetch={jobsWithApplysRefetch}
                />)
            }
        </div>
    </div>
}

function makeApplyFilter(values, applys) {
    const copy = [...applys];
    let filtered = copy.filter(item => {
        let final = true;
        if (values.gender)
            final = final && (item.talent.gender == values.gender)
        if (values.lastDegree)
            final = final && (item.talent.lastDegree == values.lastDegree)
        if (values.expYears)
            final = final && (item.talent.expYears == values.expYears)
        return final;
    })
    return filtered;
}

export function JobApplysFilter({ setFA, applys, job }) {
    const formik = useFormik({
        initialValues: { gender: '', lastDegree: '', expYears: '' }
    });
    const { values } = formik;

    useEffect(() => {
        if (values.gender || values.lastDegree || values.expYears) {
            let results = makeApplyFilter(values, applys);
            setFA(results)
        }
    }, [values]);

    return <div >
        <FormikProvider value={formik}>
            <MyCustomFormikForm>
                {
                    sortApplyFields().map((item, i) => <FormFieldProvider key={job._id + ' sorter nb' + i}
                        {...item} />)
                }
            </MyCustomFormikForm>
        </FormikProvider>
    </div>
}