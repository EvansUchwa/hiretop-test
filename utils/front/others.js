import { toast } from 'sonner'
import frLang from './langages/fr.json';
import enLang from './langages/en.json';
const dayjs = require('dayjs');
const relativeTime = require('dayjs/plugin/relativeTime');

// Ajouter le plugin de temps relatif
dayjs.extend(relativeTime);

// Fonction pour afficher la durée relative
export function formatRelativeTime(date) {
    // Convertir la date en objet dayjs
    const now = dayjs();
    const targetDate = dayjs(date);

    // Calculer la différence de temps relative
    const diffInMinutes = now.diff(targetDate, 'minute');
    const diffInHours = now.diff(targetDate, 'hour');
    const diffInDays = now.diff(targetDate, 'day');
    const diffInWeeks = now.diff(targetDate, 'week');

    // Afficher la durée relative
    if (diffInMinutes < 60) {
        return `il y a ${diffInMinutes} minute${diffInMinutes > 1 ? 's' : ''}`;
    } else if (diffInHours < 24) {
        return `il y a ${diffInHours} heure${diffInHours > 1 ? 's' : ''}`;
    } else if (diffInDays < 7) {
        return `il y a ${diffInDays} jour${diffInDays > 1 ? 's' : ''}`;
    } else if (diffInWeeks < 4) {
        return `il y a ${diffInWeeks} semaine${diffInWeeks > 1 ? 's' : ''}`;
    } else {
        // Utiliser dayjs pour formater la date de manière plus détaillée si nécessaire
        return targetDate.fromNow();
    }
}


export function successAlert(type, result) {
    toast.success(frLang.alerts[type][result])
}

export function errorAlert(error) {
    const { type, result } = error.response.data;
    toast.error(frLang.alerts[type][result])
}

export function createFormDataFromObject(obj) {
    const formData = new FormData();
    let parentKey = '';
    // for (const key in obj) {
    //     if (Object.prototype.hasOwnProperty.call(obj, key)) {
    //         formData.append(key, obj[key]);
    //     }
    // }

    // return formData;
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const value = obj[key];
            const fullKey = key;

            if (Array.isArray(value)) {
                // Si la valeur est un tableau, ajouter chaque élément au FormData avec la clé appropriée
                formData.append(fullKey, JSON.stringify(value));
            } else {
                // Sinon, ajouter la paire clé-valeur au FormData
                formData.append(fullKey, value);
            }
        }
    }

    return formData;
}

export const handleEnterKeyPress = (e) => {
    // Prevent form submission on Enter key press
    if (e.key === 'Enter') {
        e.preventDefault();
    }
};

export function checkUrl(chaine) {
    var index = chaine.indexOf("/public");
    if (index !== -1) {
        var nouvelleChaine = chaine.substring(0, index) + chaine.substring(index + "/public".length);
        return nouvelleChaine;
    } else {
        return chaine;
    }
}


export function getQueryParams(params) {
    const queryParams = new URLSearchParams(
        Object.entries(params)
            .filter(([key, value]) => value !== '') // Ne pas inclure les valeurs vides
    )
    return queryParams;
}

export function filterJobsByZA(data, key, setData) {
    // Trier les offres d'emploi par ordre alphabétique inverse du nom de l'emploi (Z à A)
    const sortedJobs = data.sort((a, b) => {
        const jobNameA = a[key].toLowerCase();
        const jobNameB = b[key].toLowerCase();
        return jobNameB.localeCompare(jobNameA);
    });

    setData(sortedJobs);
}
export function filterJobsByAZ(data, key, setData) {
    // Trier les offres d'emploi par ordre alphabétique du nom de l'emploi (A à Z)
    const sortedJobs = data.sort((a, b) => {
        const jobNameA = a[key].toLowerCase();
        const jobNameB = b[key].toLowerCase();
        return jobNameA.localeCompare(jobNameB);
    });

    setData(sortedJobs);
}

export function filterJobsByCreatedAtRecent(jobs, setData) {
    const sortedData = jobs.sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
    });
    setData(sortedData);
}
export function filterJobsByCreatedAtOldest(jobs, setData) {
    const sortedData = jobs.sort((a, b) => {
        return new Date(a.createdAt) - new Date(b.createdAt);
    });
    setData(sortedData);
}

export function filterJobsByMostViews(jobs, setData) {
    // Trier les offres d'emploi par nombre de vues (du plus grand au plus petit)
    const sortedData = jobs.sort((a, b) => {
        const viewsA = a.views.length; // Nombre de vues de l'offre d'emploi a
        const viewsB = b.views.length; // Nombre de vues de l'offre d'emploi b
        return viewsB - viewsA;
    });
    setData(sortedData);
}

export function filterJobsByLeastViews(jobs, setData) {
    // Trier les offres d'emploi par nombre de vues (du plus grand au plus petit)
    const sortedData = jobs.sort((a, b) => {
        const viewsA = a.views.length; // Nombre de vues de l'offre d'emploi a
        const viewsB = b.views.length; // Nombre de vues de l'offre d'emploi b
        return viewsA - viewsB;
    });
    setData(sortedData);
}