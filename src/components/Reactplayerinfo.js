import React from 'react'; // Importa React

import ReactPlayer from 'react-player';

const Reactplayerinfo = () => {



  return (
    <div className="container"  >
 <div className="card"> 
  <h4 className="card-title" style={{ textAlign: 'left' }}>Inscription et Connexion</h4>
  <p className="card-text" style={{ textAlign: 'left' }}>
    Pour commencer à utiliser notre application, vous devez d'abord vous inscrire, puis vous connecter. Suivez ces étapes :
  </p>
  <ol style={{ textAlign: 'left' }}>
    <li>Sur la page d'accueil, cliquez sur "Inscription" ou "Créer un compte".</li>
    <li>Remplissez le formulaire d'inscription avec votre nom, votre adresse e-mail et votre mot de passe. Assurez-vous que votre mot de passe est sécurisé et contient au moins 8 caractères.</li>
    <li>Confirmez votre mot de passe en le saisissant à nouveau dans le champ correspondant.</li>
    <li>Cliquez sur le bouton "S'inscrire" pour terminer le processus d'inscription.</li>
    <li>Une fois inscrit, retournez à la page d'accueil et sélectionnez "Se connecter".</li>
    <li>Saisissez votre adresse e-mail et le mot de passe que vous avez enregistrés.</li>
    <li>Cliquez sur le bouton "Se connecter" pour accéder à votre compte.</li>
  </ol>
  <p className="card-text" style={{ textAlign: 'left' }}>
    Si vous commettez une erreur lors de l'inscription ou de la connexion, l'application vous affichera un message d'erreur avec des instructions pour la corriger. Profitez de notre application !
  </p>



      <ReactPlayer style={{
        width: '100%',
        height: '100%',
      }}
        url={'/registro.mp4'}
        width="100%"
        height="100%"
        controls

      />
      </div>
     </div>
  )
}

export default Reactplayerinfo;
