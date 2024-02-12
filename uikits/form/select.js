'use client';
import { ErrorMessage, useField } from "formik";
import { useState } from "react";
// import { CarbonChevronDown } from "../icons";
import { useEffect } from "react";


export function SelectWithFormik(props) {
    const { name, label, chooseLabel, options, optionsL, rqrd } = props;
    const [toggleSelection, setToggleSelection] = useState(false);
    const [field, meta, helpers] = useField(name);
    const [currentValueLabel, setCVL] = useState(false);
    const { value } = meta;

    useEffect(() => {
        if (value) {
            const filt = options.filter(item => item == value);
            setCVL(optionsL[filt[0]]);
        }
    }, [value])

    return <div className={'formField selectField'}>
        <label htmlFor="">{label}
            {rqrd && <sup>*</sup>}
        </label>
        <span onClick={() => setToggleSelection(prev => !prev)}
            className="flex">
            {currentValueLabel ? currentValueLabel : chooseLabel}
            {/* <CarbonChevronDown /> */}
        </span>
        {
            toggleSelection && <div className="flex f-column">
                {
                    options.map((fc, i) => <span
                        key={'select ' + name + ' nb' + i}
                        onClick={() => {
                            helpers.setValue(fc)
                            // setCVL(fc[labelKey]);
                            setToggleSelection(false)
                        }}
                        className={fc == value ? 'currentSelected' : ''}
                    >
                        {optionsL[fc]}
                    </span>)
                }
            </div>
        }

        <ErrorMessage name={name} component="div" className="input-error-msg" />
    </div>;
}
