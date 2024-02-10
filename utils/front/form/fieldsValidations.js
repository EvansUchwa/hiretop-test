import * as Yup from 'yup';
import { countrysOptions, wsOptions } from './fields';
const email = Yup.string().email('Email').required("Champs requis");
const phone = Yup.string().required("Champs requis");
const address = Yup.string().required("Champs requis");
const societyName = Yup.string().required("Champs requis");

const firstname = Yup.string().required("Champs requis");
const lastname = Yup.string().required("Champs requis");
const gender = Yup.string().required("Champs requis");

const age = Yup.number().required("Champs requis");

const desiredSalary = Yup.number().required("Champs requis");
const preferredLocations = Yup.array().min(1, 'Minimum 1 valeur').required("Champs requis");
const linkedinUrl = Yup.string().required("Champs requis");

// const lastname = Yup.string().required("Champs requis");



const profilPic = Yup.mixed().required("Champs requis");
const resume = Yup.mixed().required("Champs requis");

const description = Yup.string().required("Champs requis");

const location = Yup.string().required("Champs requis");



const jobTitle = Yup.string().required("Champs requis");
const jobSector = Yup.string().required("Champs requis");
const jobType = Yup.string().required("Champs requis");
const requiredDegree = Yup.string().required("Champs requis");
const requiredExpYear = Yup.string().required("Champs requis");
const remoteAccepted = Yup.string().required("Champs requis");
const requiredLang = Yup.array().min(1, 'Minimum 1 secteur').required("Champs requis");
const advantages = Yup.array().min(1, 'Minimum 1 avantage').required("Champs requis");
const tasks = Yup.array().min(1, 'Minimum 1 tache').required("Champs requis");

const applyLimitDate = Yup.string().required("Champs requis");
const salary = Yup.number().notRequired();

const experiences = Yup.array().min(1, 'Minimum 1 valeur').notRequired();
const formations = Yup.array().min(1, 'Minimum 1 valeur').notRequired();
const skills = Yup.array().min(1, 'Minimum 1 valeur').notRequired();

const jobDescription = description;

function countryIsValid(postalCode) {
    const filter = countrysOptions.filter(item => item == postalCode)
    if (filter && filter.length > 0)
        return true;
    return false;
}

function workSectorIsValid(postalCode) {
    const filter = wsOptions.filter(item => item == postalCode)
    if (filter && filter.length > 0)
        return true;
    return false;
}

const country = Yup.string().required("Champs requis").test(
    "is-valid-cuntry",
    "Le pays est invalide",
    (value) => value && countryIsValid(value)
);

const workSector = Yup.array().min(1, 'Minimum 1 secteur').required("Champs requis");


const password = Yup.string().min(8, 'Too short!').max(150, 'Too Long')
    .required("Champs requis");
const passwordConfirmation = Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required("Champs requis");

export const SignupValidation = Yup.object().shape({
    email, password, passwordConfirmation
});

export const LoginValidation = Yup.object().shape({
    email, password
});

export const societyfinaliseAccountValidation = Yup.object().shape({
    phone, address, societyName, profilPic, country, workSector, description
});

export const talentGeneralValidation = Yup.object().shape({
    phone, address, firstname, lastname, age, country, workSector, gender
});

export const talentSkillFormationAndExpValidation = Yup.object().shape({
    skills, formations, experiences
});

export const talentFileValidation = Yup.object().shape({
    profilPic, resume
});


export const talentOtherDataValidation = Yup.object().shape({
    desiredSalary, preferredLocations, linkedinUrl, description
});

export const jobValidation = Yup.object().shape({
    jobTitle, jobSector, jobType,
    requiredDegree, requiredExpYear, requiredLang,
    remoteAccepted, jobDescription,
    advantages, tasks, location, applyLimitDate, salary
});
