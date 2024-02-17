'use client';
import { ErrorMessage, Field, useField } from 'formik';
import { MaterialSymbolsSearch } from '../icon';
import { useState } from 'react';

export function TextFieldWithFormik({ label, type, placeholder, name, rqrd }) {
    return (
        <div className='formField passwordField'>
            <label htmlFor="">
                {label}
                {rqrd && <sup>*</sup>}
            </label>
            <section>
                <Field type={type} name={name}
                    placeholder={placeholder} />
            </section>
            <ErrorMessage name={name} component="div" className="input-error-msg" />
        </div>
    )
}

export function TextFieldWithOkWithFormik({ label, type, placeholder, name, rqrd }) {
    const [field, meta, helpers] = useField(name);
    const [tempValue, setTV] = useState();
    const { value } = meta;
    function handleChange(e) {
        setTV(e.target.value)
    }
    return (
        <div className='formField fieldWithOk'>
            <label htmlFor="">
                {label}
                {rqrd && <sup>*</sup>}
            </label>
            <section className='flex'>
                <input type={type} name={name}
                    placeholder={placeholder}
                    value={tempValue ? tempValue : value}
                    onChange={handleChange} />
                <span onClick={() => helpers.setValue(tempValue)}>Ok</span>
            </section>
            <ErrorMessage name={name} component="div" className="input-error-msg" />
        </div>
    )
}

export function SearchFieldWithFormik({ label, type, placeholder, name, rqrd }) {
    const [field, meta, helpers] = useField(name);
    const [tempValue, setTV] = useState();
    const { value } = meta;
    function handleChange(e) {
        setTV(e.target.value)
    }
    return (
        <div className='formField searchField'>
            {/* {value} */}
            <section>
                <input type={type} name={name}
                    placeholder={placeholder}
                    value={tempValue ? tempValue : value}
                    onChange={handleChange} />
                <span onClick={() => helpers.setValue(tempValue)}>
                    <MaterialSymbolsSearch />
                </span>
            </section>
        </div>
    )
}
