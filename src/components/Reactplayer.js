import React from 'react';
import ReactPlayer from 'react-player';

const VideoSection = ({ title, description, videoUrl }) => {
  const containerStyle = {
    position: 'relative',
    marginBottom: '20px', // Espacio entre las secciones
  };

  const overlayStyle = {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    padding: '10px',
  };

  const videoStyle = {
    zIndex: 1, // Coloca el video por encima del div de superposición
  };

  return (
    <div className="col-lg-3 col-md-6 col-sm-12 mb-4" style={containerStyle}>
      <div className="card">
        <div style={overlayStyle}>
          <h5 className="card-title" style={{ color: 'blue' }}>{title}</h5>
          <p className="card-text">{description}</p>
        </div>
        <ReactPlayer
          url={videoUrl}
          width="100%"
          height="100%"
          controls
          style={videoStyle}
        />
      </div>
    </div>
  );
};

const ReactPlayerMio = () => {
  return (
    <div className="container mt-5">
      <div className="row">
      <div className="card"  >
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
</div>





        <VideoSection
       
          videoUrl={process.env.PUBLIC_URL + "/registro.mp4"}
        />


<div className="card"  >
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
</div>



        <VideoSection
          title="Video 2"
          description="Descripción del Video 2"
          videoUrl={process.env.PUBLIC_URL + "/registro.mp4"}
        />


<div className="card"  >
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
</div>

        <VideoSection
          title="Video 3"
          description="Descripción del Video 3"
          videoUrl={process.env.PUBLIC_URL + "/registro.mp4"}
        />

<div className="card"  >
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
</div>


        <VideoSection
          title="Video 4"
          description="Descripción del Video 4"
          videoUrl={process.env.PUBLIC_URL + "/registro.mp4"}
        />
      </div>
    </div>
  );
};

export default ReactPlayerMio;


