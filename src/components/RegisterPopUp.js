import React from 'react';
import '../styles/registerPopUp.css';

const RegisterPopUp = (props) => {
    if (props.show) {
        return (
            <div className="registerPopUpContainer">
                <div
                    className="registerPopUpQuit"
                    onClick={props.hidePopUp}
                ></div>
                <div className="registerPopUpWrapper">
                    <div className="registerPopUpLeft">
                        <h1>
                            Sácale todo el partido a Spotify con una cuenta
                            gratis
                        </h1>
                        <ul>
                            <li>Sin necesidad de tarjeta de crédito, nunca</li>
                            <li>Podcasts sin límites</li>
                            <li>Escucha tu música favorita, con anuncios</li>
                        </ul>
                        <p onClick={props.hidePopUp}>CERRAR</p>
                    </div>
                    <div className="registerPopUpRight">
                        <button className="registerButton" id="register">
                            REGISTRARTE GRATIS
                        </button>
                        <hr className="solidDivisor" />
                        <p>¿Ya tienes cuenta?</p>
                        <button className="registerButton" id="login">
                            INICIAR SESIÓN
                        </button>
                    </div>
                </div>
            </div>
        );
    } else {
        return <React.Fragment />;
    }
};

export default RegisterPopUp;
