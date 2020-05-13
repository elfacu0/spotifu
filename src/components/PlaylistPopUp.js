import React from 'react';
import '../styles/playlistPopUp.css';

const PlaylistPopUp = props => {
  if (props.show) {
    return (
      <div className="playlist-popup-container">
        <div className="playlist-popup-quit" onClick={props.hidePopUp}></div>
        <div className="playlist-popup-wrapper">
          <div className="playlist-popup-image">
            <img alt="popup-img" src={props.image} />
          </div>
          <div className="playlist-popup-description">
            <h1>Empieza a escuchar con una cuenta de Spotify gratis</h1>
            <button className="playlist-button">REGISTRATE GRATIS</button>
            <div className="playlist-popup-description-details">
              <p>¿Ya tienes cuenta?</p>
              <button className="playlist-login">INICIAR SESIÓN</button>
            </div>
          </div>
        </div>
        <button className="playlist-login" id="close" onClick={props.hidePopUp}>
          Cerrar
        </button>
      </div>
    );
  } else {
    return <React.Fragment />;
  }
};

export default PlaylistPopUp;
