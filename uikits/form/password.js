'use client';
import React, { useState } from 'react'
import { MaterialSymbolsVisibilityOffRounded, MaterialSymbolsVisibilityRounded } from '../icon';
import { Field } from 'formik';

function PasswordFieldWithFormik({ label, placeholder, name, rqrd }) {
    let [type, setType] = useState('password');
    return (
        <div className='formField passwordField'>
            <label htmlFor="">
                {label}
                {rqrd && <sup>Champs Obligatoire</sup>}
            </label>
            <section className='pf-pwdHider'>
                <Field type={type} name={name}
                    placeholder={placeholder} />
                <span onClick={() => setType(type == 'password' ? 'text' : 'password')}>
                    {
                        type == 'text' ? <MaterialSymbolsVisibilityRounded /> : <MaterialSymbolsVisibilityOffRounded />
                    }
                </span>
            </section>
        </div>
    )
}

export default PasswordFieldWithFormik
