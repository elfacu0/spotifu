import React from 'react';
import '../styles/mainNav.css';
import { useHistory } from 'react-router';

const MainNav = props => {
  const history = useHistory();
  return (
    <div className="mainNav">
      <div className="MainNavControllers">
        <input
          className="controllersButtons"
          id="previousButton"
          type="image"
          alt="previousButton"
          src="https://dls.tepapa.govt.nz/images/icons/png/icon-previous-spot.png"
          onClick={() => {
            history.goBack();
            console.log(history);
          }}
        />
        <input
          className="controllersButtons"
          id="nextButton"
          type="image"
          alt="nextButton"
          src="https://dls.tepapa.govt.nz/images/icons/png/icon-previous-spot.png"
          onClick={() => {
            history.goForward();
            console.log(history);
          }}
        />
      </div>
      <div className="mainNavButtons">
        <button id="register">REGISTRARTE</button>
        <button id="login">INICIAR SESIÓN</button>
      </div>
    </div>
  );
};

export default MainNav;
