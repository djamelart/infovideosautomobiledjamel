import React, {  useEffect } from 'react';
import { gapi } from "gapi-script";
 
import { GoogleLogin } from 'react-google-login';
 

const Googlelogin = () => {
  const clientID = "351306221133-hq7ie00djopipf3supf4nd30tvnc9ul4.apps.googleusercontent.com";
   
  const onSuccess = (response) => {
    // Redirige al usuario a la página de inicio después de iniciar sesión con Google correctamente.
   
  };

  const onFailure = (response) => {
    console.log("Something went wrong");
  };

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientID,
      });
    }
    gapi.load("client:auth2", start);
  }, []);

  return (
    <div>
      <div className='btn'>
      <GoogleLogin
  clientId={clientID}
  onSuccess={onSuccess}
  onFailure={onFailure}
  buttonText="Continue with Google"
  cookiePolicy={"single_host_origin"}
  redirectUri="https://localhost:3000/profile" // Cambia esto por tu URL de redirección
/>

      </div>
    </div>
  );
};

export default Googlelogin;
