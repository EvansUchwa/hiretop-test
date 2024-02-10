import {
    addressField, advantagesField, applyLimitDateField, countryField, descriptionField, emailField, genderField,
    jobDescriptionField,
    jobSectorField,
    jobTitleField,
    jobTypeField,
    locationField,
    passwordConfirmationField, passwordField, phoneField, profilPicField, remoteAcceptedField, requiredDegreeField, requiredExpYearField, requiredLangField, salaryField, societyNameField, workSectorField, tasksField, firstnameField, lastnameField, ageField, formationsField, experiencesField, skillsField, resumeField, desiredSalaryField, preferredLocationsField, linkedinUrlField, lastDegreeField, titleField, professionField
} from "./fields"


export function signupFields() {
    return [
        // genderField,
        emailField,
        passwordField, passwordConfirmationField
    ]
}

export function loginFields() {
    return [
        emailField,
        passwordField
    ]
}

export function societyFinaliseAccountFields() {
    return [
        phoneField,
        addressField,
        societyNameField,
        countryField,
        profilPicField,
        workSectorField,
        descriptionField
    ]
}

export function talentGeneralFields() {
    return [
        professionField,
        genderField,
        firstnameField, lastnameField,
        ageField,
        phoneField,
        addressField,
        countryField,
        workSectorField
    ]
}

export function talentSkillsExpAndFormationsFields() {
    return [formationsField, experiencesField, skillsField, lastDegreeField];
}

export function talentProfilPicAndResumeFields() {
    return [
        profilPicField, resumeField
    ];
}

export function talentOtherDataFields() {
    return [
        desiredSalaryField, preferredLocationsField, linkedinUrlField, descriptionField
    ];
}

export function jobFields() {
    return [
        jobTitleField,
        jobDescriptionField,
        jobSectorField,
        jobTypeField,
        requiredDegreeField,
        requiredExpYearField,
        requiredLangField,
        advantagesField,
        tasksField,
        locationField,
        remoteAcceptedField,
        salaryField,
        applyLimitDateField
    ]
}