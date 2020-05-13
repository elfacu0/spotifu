import React from 'react';
import '../styles/registerBar.css';

const RegisterBar = () => {
  return (
    <div className="registerContainer">
      <div className="registerWrapper">
        <div className="registerAdv">
          <p id="registerTitle">Muestra de Spotify</p>
          <p id="registerDescription">
            Regístrate para disfrutar de canciones y podcasts sin límites, con
            anuncios ocasionales. No hace falta tarjeta de crédito.
          </p>
        </div>
        <div className="registerAdvButton">
          <button>REGISTRARTE GRATIS</button>
        </div>
      </div>
    </div>
  );
};
export default RegisterBar;
