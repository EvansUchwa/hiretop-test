import { degreeEnum, expYearsEnum, jobTypeEnum, langEnum, remoteAcceptedEnum, categorieEnum, countrysEnum, interviewTypesEnums } from "@/utils/back/enums"


export const passwordField = { name: 'password', fieldType: 'password' };
export const currentPasswordField = { name: 'currentPassword', fieldType: 'password' };
export const newPasswordField = { name: 'newPassword', fieldType: 'password' };


export const passwordConfirmationField = { name: 'passwordConfirmation', fieldType: 'password' }

export const newPasswordConfirmationField = { name: 'newPasswordConfirmation', fieldType: 'password' }

export const emailField = { name: 'email', fieldType: 'email' }

export const professionField = { name: 'profession', fieldType: 'text', rqrd: true }




export const firstnameField = { name: 'firstname', fieldType: 'text', rqrd: true }


export const lastnameField = { name: 'lastname', fieldType: 'text', rqrd: true }

export const ageField = { name: 'age', fieldType: 'number', rqrd: true }


export const descriptionField = { name: 'description', fieldType: 'textarea', rqrd: true }


export const genderField = {
    name: 'gender', fieldType: 'radio', options: [
        'male', 'female'
    ]
}

export const phoneField = { name: 'phone', fieldType: 'number', rqrd: true }
export const addressField = { name: 'address', fieldType: 'text', rqrd: true }
export const societyNameField = { name: 'societyName', fieldType: 'text', rqrd: true }

export const profilPicField = { name: 'profilPic', fieldType: 'file', rqrd: true, accept: "image/*" }
export const resumeField = { name: 'resume', fieldType: 'file', rqrd: true, accept: ".pdf,.docx" }


export const advantagesField = { name: 'advantages', fieldType: 'multipletext', rqrd: true }
export const tasksField = { name: 'tasks', fieldType: 'multipletext', rqrd: true }


export const jobTitleField = { name: 'jobTitle', fieldType: 'text', rqrd: true }
export const jobSectorField = { name: 'jobSector', fieldType: 'select', options: categorieEnum, rqrd: true }
export const jobTypeField = { name: 'jobType', fieldType: 'select', options: jobTypeEnum, rqrd: true }
export const requiredDegreeField = { name: 'requiredDegree', fieldType: 'select', options: degreeEnum, rqrd: true }
export const requiredExpYearField = { name: 'requiredExpYear', fieldType: 'select', options: expYearsEnum, rqrd: true }
export const requiredLangField = { name: 'requiredLang', fieldType: 'checkbox', options: langEnum, rqrd: true }
export const remoteAcceptedField = { name: 'remoteAccepted', fieldType: 'radio', options: remoteAcceptedEnum, rqrd: true }
export const jobDescriptionField = { name: 'jobDescription', fieldType: 'textarea', rqrd: true }
export const locationField = { name: 'location', fieldType: 'text', rqrd: true }

export const locationSearchParamField = { name: 'location', fieldType: 'withOk', subType: 'text', }



export const salaryField = { name: 'salary', fieldType: 'number' }

export const salarySearchParamField = { name: 'salary', fieldType: 'withOk', subType: 'number' }

export const applyLimitDateField = { name: 'applyLimitDate', fieldType: 'date', rqrd: true }

export const desiredSalaryField = { name: 'desiredSalary', fieldType: 'number', rqrd: true }
export const preferredLocationsField = { name: 'preferredLocations', fieldType: 'multipletext', rqrd: true }
export const linkedinUrlField = { name: 'linkedinUrl', fieldType: 'text', rqrd: true }



export const countryField = {
    name: 'country', fieldType: 'select', options: countrysEnum, rqrd: true
};


export const workSectorField = {
    name: 'workSector', fieldType: 'checkbox', options: categorieEnum, rqrd: true
};
export const talentWorkSectorField = {
    name: 'talentWorkSector', fieldType: 'select', options: categorieEnum, rqrd: true
};

export const skillsField = {
    name: 'skills', fieldType: 'multipletext', options: categorieEnum, rqrd: true
};

export const formationsField = {
    name: 'formations', fieldType: 'multipletextBlock', rqrd: true
};

export const experiencesField = {
    name: 'experiences', fieldType: 'multipletextBlock', rqrd: true
};

export const lastDegreeField = {
    name: 'lastDegree', fieldType: 'select', options: degreeEnum, rqrd: true
};
export const expYearsField = { name: 'expYears', fieldType: 'select', options: expYearsEnum, rqrd: true }



export const langagesField = { name: 'langages', fieldType: 'checkbox', options: langEnum, rqrd: true }

export const applyerMessageField = { name: 'applyerMessage', fieldType: 'textarea', rqrd: true }

export const recrutorMessageField = { name: 'recrutorMessage', fieldType: 'textarea', rqrd: true }

export const interviewTypeField = { name: 'interviewType', fieldType: 'select', rqrd: true, options: interviewTypesEnums }

export const interviewDateField = { name: 'interviewDate', fieldType: 'date', rqrd: true }


export const interviewHourField = { name: 'interviewHour', fieldType: 'time', rqrd: true }





export const searchTalentKeyWordField = { name: 'searchTalentKeyword', fieldType: 'search', rqrd: true }

export const searchJobKeywordField = { name: 'searchJobKeyword', fieldType: 'search', rqrd: true }

// export const searchTalentKeyWordField = { name: 'searchTalentKeyWord', fieldType: 'search', rqrd: true }
// export const searchTalentKeyWordField = { name: 'searchTalentKeyWord', fieldType: 'search', rqrd: true }
