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
{/* <p>Merci de faire partie de la communauté <strong>[Nom de la Plateforme]</strong>  */ }