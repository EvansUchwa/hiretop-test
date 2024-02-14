import {
    addressField, advantagesField, applyLimitDateField, countryField, descriptionField, emailField, genderField,
    jobDescriptionField,
    jobSectorField,
    jobTitleField,
    jobTypeField,
    locationField,
    passwordConfirmationField, passwordField, phoneField, profilPicField, remoteAcceptedField, requiredDegreeField, requiredExpYearField, requiredLangField, salaryField, societyNameField, workSectorField, tasksField, firstnameField, lastnameField, ageField, formationsField, experiencesField, skillsField, resumeField, desiredSalaryField, preferredLocationsField, linkedinUrlField, lastDegreeField, titleField, professionField, expYearsField, langagesField, applyerMessageField, recrutorMessageField, interviewDateField, interviewHourField, interviewTypeField, currentPasswordField, newPasswordField, searchKeyField, searchTalentKeyWordField, searchJobKeywordField
} from "./fields"


export function signupFields() {
    return [
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

export function changePaswordFields() {
    return [
        newPasswordField,
        passwordConfirmationField
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
    return [formationsField, experiencesField, skillsField, lastDegreeField, expYearsField];
}

export function talentProfilPicAndResumeFields() {
    return [
        profilPicField, resumeField
    ];
}

export function talentOtherDataFields() {
    return [
        desiredSalaryField, preferredLocationsField, linkedinUrlField, langagesField, descriptionField
    ];
}

export function updateTalentGeneralData() {
    return [
        ...talentGeneralFields(),
        ...talentSkillsExpAndFormationsFields(),
        ...talentOtherDataFields()
    ]
}

export function updateTalentFiles() {
    return talentProfilPicAndResumeFields()
}

export function updateSocietyGeneralData() {
    return [
        phoneField,
        addressField,
        societyNameField,
        countryField,
        workSectorField,
        descriptionField
    ]
}
export function updateSocietyFiles() {
    return [profilPicField]
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

export function jobSearchFields() {
    return [
        searchJobKeywordField,
        jobSectorField,
        jobTypeField,
        requiredDegreeField,
        requiredExpYearField,
        locationField,
        remoteAcceptedField,
        salaryField
    ]
}

export function newAppplyFields() {
    return [
        applyerMessageField
    ]
}

export function validateAppplyFields() {
    return [
        recrutorMessageField, interviewTypeField, interviewDateField, interviewHourField
    ]
}

export function rejectAppplyFields() {
    return [
        recrutorMessageField
    ]
}

export function changePaswwordFields() {
    return [
        currentPasswordField,
        ...changePaswordFields()
    ]
}

export function forgotPasswordStep1() {
    return [
        emailField
    ]
}

export function forgotPasswordStep2() {
    return changePaswordFields()
}

export function sortApplyFields() {
    return [
        genderField,
        lastDegreeField, expYearsField
    ]
}

export function searchOrSortTalentApplyFields() {
    return [
        searchTalentKeyWordField, genderField, lastDegreeField, expYearsField
    ]
}