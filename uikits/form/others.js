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
                style={{ height: 200 }} />
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
    function handleDeleteItem(i) {
        let copy = [...value];
        copy.splice(i, 1)
        setValue(copy)
    }
    return <div className={' formField  formFiedMultipletext '}>
        <label htmlFor="">{label}
            {rqrd && <sup>*</sup>}
        </label>
        {
            value && <div className="flex f-wrap">
                {
                    value.map((item, i) => <article key={name + 'multiple text1 nb' + i}>
                        <p>
                            {item}
                        </p>
                        <span onClick={() => handleDeleteItem(i)}>X</span>
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
                    <input type="text"
                        onChange={handleChange}
                    />
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
    const [newTitle, setNT] = useState(null);
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
    function handleTitleChange(e) {
        const { value } = e.target;
        setNT(value)
    }
    function handleDeleteItem(i) {
        let copy = [...value];
        copy.splice(i, 1)
        setValue(copy)
    }
    return <div className={' formField  formFiedMultipletext '}>
        <label htmlFor="">{label}
            {rqrd && <sup>*</sup>}
        </label>
        {
            value && <div className="flex f-column">
                {
                    value.map((item, i) => <article key={name + 'multiple text2 nb' + i}>
                        <p>
                            <b>{item.title} </b>: Du {item.start} au {item.end}
                        </p>
                        <p>
                            <b>Description:</b> {item.desc}
                        </p>
                        <span onClick={() => handleDeleteItem(i)}>X</span>
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
                    <label htmlFor="">Titre</label>
                    <input type="title"
                        onChange={handleTitleChange}
                    />
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
                        disabled={(newTitle && newStartDate && newEndDate && newDesc) ? false : true}
                        onClick={() => {
                            const copy = [...value]
                            copy.push({ title: newTitle, desc: newDesc, start: newStartDate, end: newEndDate })
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