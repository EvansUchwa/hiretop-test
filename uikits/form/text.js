'use client';
import { ErrorMessage, Field } from 'formik';

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

