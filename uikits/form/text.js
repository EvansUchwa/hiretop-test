'use client';
import { ErrorMessage, Field } from 'formik';

export function TextFieldWithFormik({ label, fieldType, placeholder, name, rqrd }) {
    return (
        <div className='formField passwordField'>
            <label htmlFor="">
                {label}
                {rqrd && <sup>Champs Obligatoire</sup>}

            </label>
            <section>
                <Field type={fieldType} name={name}
                    placeholder={placeholder} />
            </section>
            <ErrorMessage name={name} component="div" className="input-error-msg" />
        </div>
    )
}

