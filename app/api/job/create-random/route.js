import { NextResponse } from "next/server";
import Job from "@/models/Job";
import dayjs from "dayjs";
import { categorieEnum, countrysEnum, degreeEnum, expYearsEnum, jobTypeEnum, langEnum, remoteAcceptedEnum } from "@/utils/back/enums";
import User from "@/models/User";

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function getRandomDate(startDate, endDate) {
    return new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
}

const webJobs = [
    'Développeur Web',
    'Designer Web',
    'Intégrateur Web',
    'Ingénieur DevOps',
    'Architecte Web',
    'Administrateur Système et Réseau',
    'Spécialiste en Sécurité Informatique',
    'Analyste en Expérience Utilisateur (UX)',
    'Analyste en Expérience Utilisateur (UI)',
    'Développeur Front-end',
    'Développeur Back-end',
    'Développeur Full Stack',
    'Spécialiste en Référencement (SEO)',
    'Spécialiste en Marketing Digital',
    'Chef de Projet Web',
    'Responsable Qualité Web',
    'Analyste en Business Intelligence (BI)',
    'Ingénieur en Automatisation des Tests',
    'Administrateur de Base de Données',
    'Développeur d\'Applications Mobiles',
];

function generateRandomData(userConnectedId) {
    const data = {
        autor: userConnectedId,
        jobTitle: getRandomElement(webJobs),
        jobSector: getRandomElement(categorieEnum),
        jobType: getRandomElement(jobTypeEnum),
        requiredDegree: getRandomElement(degreeEnum),
        requiredExpYear: getRandomElement(expYearsEnum),
        requiredLang: [getRandomElement(langEnum)],
        country: getRandomElement(countrysEnum),
        jobDescription: 'Random job description.',
        location: 'Random Location',
        tasks: ['Random Task'],
        advantages: ['Random Advantage'],
        salary: getRandomInt(30000, 80000),
        remoteAccepted: getRandomElement(remoteAcceptedEnum),
        applyLimitDate: getRandomDate(new Date(), new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)),
        views: [],
        createdAt: new Date(),
        updatedAt: new Date()
    };

    return data;
}

export const POST = async (req) => {
    try {
        const generatedJobs = [];
        const allSociety = await User.find({ role: 'society' }).lean();

        if (allSociety.length > 0) {
            for (let j = 0; j < allSociety.length; j++) {
                const societyId = allSociety[j]._id;
                for (let i = 0; i < 5; i++) {
                    const randomJobData = generateRandomData(societyId);
                    const newJob = new Job(randomJobData);
                    generatedJobs.push(newJob);
                    await newJob.save();
                }
            }
        }
        return NextResponse.json(generatedJobs, { status: 200 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ type: 'operation', result: 'invalid' }, { status: 401 })
    }
}
