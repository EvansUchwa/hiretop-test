import { degreeEnum, expYearsEnum, jobTypeEnum, langEnum, remoteAcceptedEnum } from "@/utils/back/enums"

export let wsOptions = [
    "automobile",
    "recruitment",
    "consultancy",
    "digital",
    "industry",
    "agriculture",
    "hospitality",
    "informationTechnology",
    "foodIndustry",
    "construction",
    "finance",
    "education",
    "energy",
    "publicServices",
    "chemistry",
    "health",
    "startups",
    "services",
    "telecommunications",
    "woodPaperPrinting",
    "retail",
    "automotive",
    "engineering",
    "textile",
    "transportation",
    "environment",
    "media",
    "law",
    "artsCulture",
    "telecom"
]
export let countrysOptions = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Costa Rica",
    "Cote d'Ivoire",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czechia",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea, North",
    "Korea, South",
    "Kosovo",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe"
]

export const passwordField = { name: 'password', fieldType: 'password' }

export const passwordConfirmationField = { name: 'passwordConfirmation', fieldType: 'password' }

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

export const profilPicField = { name: 'profilPic', fieldType: 'file', rqrd: true }
export const resumeField = { name: 'resume', fieldType: 'file', rqrd: true }


export const advantagesField = { name: 'advantages', fieldType: 'multipletext', rqrd: true }
export const tasksField = { name: 'tasks', fieldType: 'multipletext', rqrd: true }


export const jobTitleField = { name: 'jobTitle', fieldType: 'text', rqrd: true }
export const jobSectorField = { name: 'jobSector', fieldType: 'select', options: wsOptions, rqrd: true }
export const jobTypeField = { name: 'jobType', fieldType: 'select', options: jobTypeEnum, rqrd: true }
export const requiredDegreeField = { name: 'requiredDegree', fieldType: 'select', options: degreeEnum, rqrd: true }
export const requiredExpYearField = { name: 'requiredExpYear', fieldType: 'select', options: expYearsEnum, rqrd: true }
export const requiredLangField = { name: 'requiredLang', fieldType: 'checkbox', options: langEnum, rqrd: true }
export const remoteAcceptedField = { name: 'remoteAccepted', fieldType: 'radio', options: remoteAcceptedEnum, rqrd: true }
export const jobDescriptionField = { name: 'jobDescription', fieldType: 'textarea', rqrd: true }
export const locationField = { name: 'location', fieldType: 'text', rqrd: true }

export const salaryField = { name: 'salary', fieldType: 'number' }
export const applyLimitDateField = { name: 'applyLimitDate', fieldType: 'date', rqrd: true }

export const desiredSalaryField = { name: 'desiredSalary', fieldType: 'number', rqrd: true }
export const preferredLocationsField = { name: 'preferredLocations', fieldType: 'multipletext', rqrd: true }
export const linkedinUrlField = { name: 'linkedinUrl', fieldType: 'text', rqrd: true }



export const countryField = {
    name: 'country', fieldType: 'select', options: countrysOptions, rqrd: true
};


export const workSectorField = {
    name: 'workSector', fieldType: 'checkbox', options: wsOptions, rqrd: true
};
export const talentWorkSectorField = {
    name: 'talentWorkSector', fieldType: 'select', options: wsOptions, rqrd: true
};

export const skillsField = {
    name: 'skills', fieldType: 'multipletext', options: wsOptions, rqrd: true
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



