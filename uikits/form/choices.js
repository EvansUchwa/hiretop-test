import { ErrorMessage, Field, useField } from 'formik'
import React, { useEffect } from 'react'

export function InputRadioWithFormik({ name, label, options, optionsL, rqrd }) {
    const [field, meta, helpers] = useField(name);
    const { value } = meta;
    return (
        <div className='formField radioField'>
            <label htmlFor="">{label}
                {rqrd && <sup>Champs Obligatoire</sup>}
            </label>
            <div className='flex'>
                {
                    options.map((item, i) => <React.Fragment key={'radion nb' + i}>
                        <Field type="radio"
                            name={name}
                            value={item}
                            checked={value == item}
                            id={name + 'chk-' + i} />
                        <label className='flex'
                            htmlFor={name + 'chk-' + i}
                        >
                            <span></span>
                            <b>
                                {optionsL[item]}
                            </b>
                        </label>
                    </React.Fragment>)
                }
            </div>
            <ErrorMessage name={name} component="div" className="input-error-msg" />
        </div>
    )
}

export function InputCheckboxWithFormik({ name, label, options, optionsL, rqrd }) {
    const [field, meta, helpers] = useField(name);
    const { value } = meta;


    return (
        <div className='formField checkboxField'>
            <label htmlFor="">{label}
                {rqrd && <sup>Champs Obligatoire</sup>}
            </label>
            <div className='flex'>
                {
                    options.map((item, i) => <React.Fragment key={'radion nb' + i}>
                        <Field name={name} type="checkbox" value={item}
                            checked={value.includes(item)}
                            id={name + 'chk-' + i} />
                        <label className='flex'
                            htmlFor={name + 'chk-' + i}
                        >
                            <span></span>
                            <b>
                                {optionsL[item]}
                            </b>
                        </label>
                    </React.Fragment>)
                }
            </div>
            <ErrorMessage name={name} component="div" className="input-error-msg" />
        </div>
    )
}

