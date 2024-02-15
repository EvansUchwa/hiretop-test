'use client'
import { searchOrSortTalentApplyFields } from '@/utils/front/form/fieldsArrays';
import { FormikProvider, useFormik } from 'formik';
import React, { useEffect, useRef } from 'react'
import MyCustomFormikForm from '../other';
import FormFieldProvider from '../formFieldProvider';
import { useMySearchParams } from '@/contexts/searchParamContext';
import SimpleButton from '@/uikits/button';


export function SearchOrFilterTalent({ talents, setFT, setGender }) {
    const { genderSearchParam, lastDegreeSearchParam, expYearsSearchParam, searchTalentKeywordSearchParam,
        setGSP, setLDSP, setEYSP, setSTKSP } = useMySearchParams();
    const formik = useFormik({
        initialValues: {
            gender: genderSearchParam ?? '',
            lastDegree: lastDegreeSearchParam ?? '',
            expYears: expYearsSearchParam ?? '',
            searchTalentKeyword: searchTalentKeywordSearchParam ?? ''
        }
    });
    const { values } = formik;

    useEffect(() => {

        if (values.gender || values.lastDegree || values.searchTalentKeyword || values.expYears) {
            if (values.gender) {
                setGSP(values.gender)
            }
            if (values.lastDegree) {
                setLDSP(values.lastDegree)
            }
            if (values.searchTalentKeyword) {
                setSTKSP(values.searchTalentKeyword)
            }
            if (values.expYears) {
                setEYSP(values.expYears)
            }
        } else {
            handleDeleteAllSearchParam()
        }
    }, [values]);

    function handleDeleteAllSearchParam() {
        setGSP(null)
        setLDSP(null)
        setSTKSP(null)
        setEYSP(null)
    }

    return (
        <div className='searchOrFilter'>
            {
                (values.gender || values.lastDegree || values.searchTalentKeyword || values.expYears) && <SimpleButton text='Retirer les filtre'
                    onClick={handleDeleteAllSearchParam} />
            }
            <FormikProvider value={formik}>
                <MyCustomFormikForm>
                    {
                        searchOrSortTalentApplyFields().map((item, i) => <FormFieldProvider key={'talent sorter nb' + i}
                            {...item} />)
                    }
                </MyCustomFormikForm>
            </FormikProvider>
        </div>
    )
}