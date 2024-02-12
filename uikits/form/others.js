import { ErrorMessage, Field, useField } from "formik";
import { useState } from "react";
import SimpleButton from "../button";

export function TextAreaWithFormik(props) {
    const { name, ph, label, type, rqrd, ...rest } = props;
    return <div className={' formField  formFiedTextArea '}>
        <label htmlFor="">{label}
            {rqrd && <sup>*</sup>}
        </label>
        <section className="">
            <Field as="textarea"
                name={name}
                placeholder={ph}
                {...rest}
                row={100} />
        </section>
        <ErrorMessage name={name} component="div" className="input-error-msg" />
    </div>;
}

export function MultipleTextWithFormik(props) {
    const { name, ph, label, type, btnsLang, rqrd, ...rest } = props;
    const [newText, setNewText] = useState();
    const [allText, setAT] = useState([]);

    const [showInput, setSI] = useState(false);
    const [field, meta, helpers] = useField(name);
    const { value } = meta;
    const { setValue } = helpers;

    function handleChange(e) {
        const { value } = e.target;
        setNewText(value)
    }
    return <div className={' formField  formFiedMultipletext '}>
        <label htmlFor="">{label}
            {rqrd && <sup>*</sup>}
        </label>
        {
            value && <div>
                {
                    value.map((item, i) => <span key={name + 'multiple text nb' + i}>
                        {item}
                    </span>)
                }
            </div>
        }
        <section className="">
            {
                !showInput && <SimpleButton
                    text={btnsLang[name]}
                    onClick={() => setSI(true)}
                />
            }
            {
                showInput && <div >
                    <input type="text"
                        onChange={handleChange}
                    />
                    <br />
                    <br />
                    <SimpleButton
                        text="Ajouter"
                        onClick={() => {
                            const copy = [...value]
                            copy.push(newText)
                            setValue(copy)
                            setSI(false)
                            // setAT(copy)
                        }}
                    />
                </div>
            }
            {/* <Field as="textarea"
                name={name}
                placeholder={ph}
                {...rest}
                row={100} /> */}
        </section>
        <ErrorMessage name={name} component="div" className="input-error-msg" />
    </div>;
}

export function MultipleTextBlockWithFormik(props) {
    const { name, ph, label, type, btnsLang, rqrd, ...rest } = props;
    const [newDesc, setND] = useState(null);
    const [newStartDate, setNSD] = useState(null);
    const [newEndDate, setNED] = useState(null);

    const [allText, setAT] = useState([]);

    const [showInput, setSI] = useState(false);
    const [field, meta, helpers] = useField(name);
    const { value } = meta;
    const { setValue } = helpers;

    function handleStartDateChange(e) {
        const { value } = e.target;
        setNSD(value)
    }
    function handleEndDateChange(e) {
        const { value } = e.target;
        setNED(value)
    }
    function handleDescChange(e) {
        const { value } = e.target;
        setND(value)
    }
    return <div className={' formField  formFiedMultipletext '}>
        <label htmlFor="">{label}
            {rqrd && <sup>*</sup>}
        </label>
        {
            value && <div>
                {
                    value.map((item, i) => <article key={name + 'multiple text nb' + i}>
                        <p>
                            <b>Debut:</b> {item.start}
                        </p>
                        <p>
                            <b>Fin:</b> {item.end}
                        </p>
                        <p>
                            <b>Description:</b> {item.desc}
                        </p>
                    </article>)
                }
            </div>
        }
        <section className="">
            {
                !showInput && <SimpleButton
                    text={btnsLang[name]}
                    onClick={() => setSI(true)}
                />
            }
            {
                showInput && <div >
                    <label htmlFor="">Date de debut</label>
                    <input type="date"
                        onChange={handleStartDateChange}
                    />
                    <label htmlFor="">Date de fin</label>
                    <input type="date"
                        onChange={handleEndDateChange}
                    />
                    <label htmlFor="">Description</label>
                    <textarea cols="30" rows="10"
                        onChange={handleDescChange}></textarea>

                    <SimpleButton
                        text="Ajouter"
                        disabled={(newStartDate && newEndDate && newDesc) ? false : true}
                        onClick={() => {
                            const copy = [...value]
                            copy.push({ desc: newDesc, start: newStartDate, end: newEndDate })
                            setValue(copy)
                            setSI(false)
                            setNSD(null)
                            setNED(null)
                            setND(null)
                            // setAT(copy)
                        }}
                    />
                </div>
            }
        </section>
        <ErrorMessage name={name} component="div" className="input-error-msg" />
    </div>;
}