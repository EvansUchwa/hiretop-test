import { useLang } from '@/contexts/langContext';
import { InputCheckboxWithFormik, InputRadioWithFormik } from '@/uikits/form/choices';
import { DocFileInputWithFormik } from '@/uikits/form/file';
import { MultipleTextBlockWithFormik, MultipleTextWithFormik, TextAreaWithFormik } from '@/uikits/form/others';
import PasswordFieldWithFormik from '@/uikits/form/password';
import { SelectWithFormik } from '@/uikits/form/select';
import { SearchFieldWithFormik, TextFieldWithFormik } from '@/uikits/form/text';
import React from 'react'


function dispatchCheckboxOptionsL(name, formLangs) {
    let key;
    if (['workSector', 'talentWorkSector'].includes(name)) {
        key = 'workSectorOptions';
    }
    else if (name == 'langages') {
        key = 'requiredLangOptions'
    }
    else {
        key = name + 'Options'
    }
    return formLangs[key];
}

function dispatchSelectOptionsL(name, formLangs) {
    let key;
    if (name == 'jobSector') {
        key = 'workSectorOptions';
    }
    else if (name == 'lastDegree') {
        key = 'requiredDegreeOptions'
    } else if (name == 'expYears') {
        key = 'requiredExpYearOptions'
    }
    else {
        key = name + 'Options'
    }
    return formLangs[key];
}
function FormFieldProvider(props) {
    const { fieldType, name, options, chooseLabel, rqrd, ...rest } = props;
    const textFields = ['email', 'text', 'date', 'number', 'hour', 'time'];
    const formLangs = useLang().langData.form.fields;
    const btnsLang = useLang().langData.buttons;

    if (fieldType == 'password') {
        return <PasswordFieldWithFormik {...rest}
            name={name}
            type={fieldType}
            label={formLangs[name].label}
            placeholder={formLangs[name].ph}
            rqrd={rqrd}

        />
    } else if (textFields.includes(fieldType)) {
        return <TextFieldWithFormik {...rest}
            name={name}
            type={fieldType}
            label={formLangs[name] && formLangs[name].label}
            placeholder={formLangs[name] && formLangs[name].ph}
            rqrd={rqrd}
        />
    } else if (fieldType == 'search') {
        return <SearchFieldWithFormik {...rest}
            name={name}
            type={'search'}
            label={''}
            placeholder={formLangs[name] && formLangs[name].ph}
        />
    } else if (fieldType == 'multipletext') {
        return <MultipleTextWithFormik {...rest}
            name={name}
            label={formLangs[name] && formLangs[name].label}
            placeholder={formLangs[name] && formLangs[name].ph}
            btnsLang={btnsLang.multipleTextBtns}
            rqrd={rqrd}
        />
    } else if (fieldType == 'multipletextBlock') {
        return <MultipleTextBlockWithFormik {...rest}
            name={name}
            label={formLangs[name] && formLangs[name].label}
            placeholder={formLangs[name] && formLangs[name].ph}
            btnsLang={btnsLang.multipleTextBtns}
            rqrd={rqrd}
        />
    } else if (fieldType == 'textarea') {
        return <TextAreaWithFormik {...rest}
            name={name}
            options={options}
            label={formLangs[name] && formLangs[name].label}
            placeholder={formLangs[name] && formLangs[name].ph}
            rqrd={rqrd}
        />
    } else if (fieldType == 'radio') {
        return <InputRadioWithFormik {...rest}
            name={name}
            options={options}
            label={formLangs[name] && formLangs[name].label}
            optionsL={formLangs[name] && formLangs[name + 'Options']}
            rqrd={rqrd}
        />
    } else if (fieldType == 'checkbox') {
        return <InputCheckboxWithFormik {...rest}
            options={options}
            name={name}
            label={formLangs[name] && formLangs[name].label}
            optionsL={dispatchCheckboxOptionsL(name, formLangs)}
            rqrd={rqrd}
        />
    }
    else if (fieldType == 'file') {
        return <DocFileInputWithFormik {...rest}
            name={name}
            type={fieldType}
            label={formLangs[name] && formLangs[name].label}
            rqrd={rqrd}
        />
    } else if (fieldType == 'select') {
        return <SelectWithFormik {...rest}
            name={name}
            options={options}
            label={formLangs[name] && formLangs[name].label}
            optionsL={dispatchSelectOptionsL(name, formLangs)}
            chooseLabel={formLangs.selectLabels[name]}
            rqrd={rqrd}
        />
    }


}



export default FormFieldProvider
