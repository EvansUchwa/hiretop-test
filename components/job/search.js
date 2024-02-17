import { jobSearchFields } from '@/utils/front/form/fieldsArrays'
import { FormikProvider, useFormik } from 'formik'
import React, { useEffect } from 'react'
import MyCustomFormikForm, { SearchAndFilterSectionWrapper } from '../other'
import { useLang } from '@/contexts/langContext'
import FormFieldProvider from '../formFieldProvider'
import { useMySearchParams } from '@/contexts/searchParamContext'
import SimpleButton from '@/uikits/button'

export function SearchJobForm() {
    const {
        searchJobKeywordSearchParam, jobSectorSearchParam, jobTypeSearchParam,
        requiredDegreeSearchParam, requiredExpYearSearchParam, remoteAcceptedSearchParam,
        locationSearchParam, salarySearchParam,

        setSJKSP, setJSSP, setJTSP, setRDSP, setREYSP, setRASP, setLSP, setSSP
    } = useMySearchParams();



    const { langData } = useLang();
    const formik = useFormik({
        initialValues: {
            searchJobKeyword: searchJobKeywordSearchParam ?? '',
            jobSector: jobSectorSearchParam ?? '', jobType: jobTypeSearchParam ?? '',
            requiredDegree: requiredDegreeSearchParam ?? '',
            requiredExpYear: requiredExpYearSearchParam ?? '',
            remoteAccepted: remoteAcceptedSearchParam ?? '',
            location: locationSearchParam ?? '',
            salary: salarySearchParam ?? '',
        }
    });


    const { values, resetForm } = formik;

    useEffect(() => {

        if (values.searchJobKeyword) {
            setSJKSP(values.searchJobKeyword)
        }

        if (values.jobSector) {
            setJSSP(values.jobSector)
        }
        if (values.jobType) {
            setJTSP(values.jobType)
        }
        if (values.requiredDegree) {
            setRDSP(values.requiredDegree)
        }
        if (values.requiredExpYear) {
            setREYSP(values.requiredExpYear)
        }
        if (values.remoteAccepted) {
            setRASP(values.remoteAccepted)
        }
        if (values.location) {
            setLSP(values.location)
        }
        if (values.salary) {
            setSSP(values.salary)
        }
    }, [values]);

    function resetSearch() {
        resetForm()
        setSJKSP(null)
        setJSSP(null)
        setJTSP(null)
        setRDSP(null)
        setREYSP(null)
        setRASP(null)
        setLSP(null)
        setSSP(null)
    }
    return (
        <SearchAndFilterSectionWrapper>
            <div className='searchJobForm'>
                {
                    (values.jobSector || values.jobType || values.requiredDegree ||
                        values.requiredExpYear || values.remoteAccepted || values.searchJobKeyword) && <div className='reinitSearchParamBtn'>
                        <SimpleButton
                            text="Reinitialiser les recherche" onClick={resetSearch} />
                    </div>
                }

                <FormikProvider value={formik}>
                    <MyCustomFormikForm>
                        {
                            jobSearchFields().map((item, i) => <FormFieldProvider
                                formLangs={langData.form.fields}
                                key={'search job field nb' + i}
                                {...item} />)
                        }
                    </MyCustomFormikForm>
                </FormikProvider>
            </div>
        </SearchAndFilterSectionWrapper>
    )
}
