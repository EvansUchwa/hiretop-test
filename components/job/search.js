import { jobSearchFields } from '@/utils/front/form/fieldsArrays'
import { FormikProvider, useFormik } from 'formik'
import React, { useEffect, useRef } from 'react'
import MyCustomFormikForm from '../other'
import { FormButton } from '@/uikits/button'
import { useLang } from '@/contexts/langContext'
import FormFieldProvider from '../formFieldProvider'
import { useSearchParams } from 'next/navigation'
import { useMySearchParams } from '@/contexts/searchParamContext'

export function SearchJobForm() {
    const { jobSearchParams } = useMySearchParams();
    const { langData } = useLang();
    const formik = useFormik({
        initialValues: jobSearchParams
    });
    const { isSubmitting, isValid, values } = formik;
    const isRedirecting = useRef(false);
    const previousValues = useRef(jobSearchParams);

    useEffect(() => {
        // console.log('value change');
        if (isRedirecting.current) {
            return;
        }

        if (jobSearchParams) {
            const queryParams = new URLSearchParams(
                Object.entries(values)
                    .filter(([key, value]) => value !== '') // Ne pas inclure les valeurs vides
            );
            const queryParamsSize = Array.from(queryParams).length;
            // console.log(queryParams);
            if (queryParamsSize > 0 && JSON.stringify(values) !== JSON.stringify(previousValues.current)) {
                isRedirecting.current = true;
                window.location.href = `${window.location.pathname}?${queryParams}`;
            }
        }
        // }
    }, [values])
    return (
        <div className='searchJobForm'>
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
    )
}
