export function welcomeEmail(validationLink) {
    return `<div>
        <p>Cher utilisateur,</p>
    
        <p>Bienvenue sur <strong>Hiretope</strong> ! Nous sommes ravis de vous compter parmi nos membres.</p>
    
        <p>Pour profiter pleinement de toutes les fonctionnalités de notre plateforme, veuillez valider votre adresse e-mail en cliquant sur le lien ci-dessous :</p>
    
        <p><a href="${validationLink}">Liens de Validation de l'Adresse Email</a></p>

        <p>Cette étape est cruciale pour garantir la sécurité de votre compte et vous assurer une expérience utilisateur optimale.</p>
        <p>Si vous n'avez pas effectué cette inscription, veuillez ignorer ce message.</p>
   !</p>
    
    </div>`
}

export function newApplyAlert(link, nomEntreprise, nomPoste, nomCandidat) {
    return `<div>
        <p>Bonjour ${nomEntreprise},</p>
    
        <p>Nous vous informons qu'une nouvelle candidature a été soumise pour le poste de ${nomPoste}.</p>
    
        <p>Nom du candidat : ${nomCandidat}</p>

        <p>Veuillez consulter votre tableau de bord pour examiner cette nouvelle candidature.</p>
        <p>Merci et bonne journée !</p>
    </div>`;
}


// Invitation à un entretien pour le poste de ${nomPoste}
export function applyAcceptedEmail(origin, recrutorMessage, interviewType, interviewDate, interviewHour, nomPoste, nomEntreprise, talentFirstaname) {

    return `
        Cher(e) ${talentFirstaname},
        <br />
        Félicitations ! Votre candidature pour le poste de ${nomPoste} chez ${nomEntreprise} a ete retenu. Vous etes inviter à un entretien pour discuter de votre candidature plus en détail.
        <br />
        Type d'entretien : ${interviewType}<br />
        Date : ${interviewDate}<br />
        Heure : ${interviewHour}<br />

        Message du recruteur :<br /> ${recrutorMessage}
        <br />

        Veuillez confirmer votre disponibilité en répondant à ce courriel.
        <br />
        Nous avons hâte de vous rencontrer !
        <br />
    `;
}

export function applyRejectedEmail(origin, nomPoste, nomEntreprise, talentFirstaname) {

    return `
        Cher(e) ${talentFirstaname},
        <br />
        Nous vous remercions d'avoir postulé au poste de ${nomPoste} chez ${nomEntreprise}.
        <br />
         Nous avons soigneusement examiné votre candidature, mais malheureusement, nous avons décidé de poursuivre avec d'autres candidats.
         <br />
        Veuillez ne pas considérer cette décision comme une indication de vos compétences ou de votre valeur. Nous avons reçu un grand nombre de candidatures exceptionnelles et la sélection a été très difficile.
        <br />
        Nous vous souhaitons le meilleur dans vos recherches d'emploi futur et nous vous remercions encore une fois de l'intérêt que vous avez manifesté pour notre entreprise.
    `;
}


export function changePasswordEmail(origin) {

    return `
        Url de reinitialisation: ${origin},
    `;
}