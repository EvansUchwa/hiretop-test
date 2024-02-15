'use client'
import { ErrorMessage, useField } from "formik";
import { useLang } from "@/contexts/langContext";

export function DocFileInputWithFormik(props) {
    const { name, label, accept } = props;
    const [field, meta, helpers] = useField(name);
    const { value } = meta;
    const { setValue } = helpers;
    const { formsL } = useLang();


    return <div className="formField flex f-column docFileField">
        <label>{label}</label>

        <section>
            <input type="file" name={name}
                id={"fileInp-" + name}
                onChange={(e) => setValue(e.target.files[0])}
                accept={accept ? accept : ''} />
            <label htmlFor={"fileInp-" + name} className={value ? 'fileSelected' : ''}>
                <span >
                    {formsL.chooseFile}
                </span>
                {
                    value && <p>{value.name} </p>
                }
            </label>
        </section>
        <ErrorMessage name={name} component="div" className="input-error-msg" />
    </div>
}