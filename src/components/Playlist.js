import React, { useState } from 'react';
import Song from './Song';
import PlaylistPopUp from './PlaylistPopUp';
import '../styles/playlist.css';

const Playlist = () => {
    const [show, setShowPopUp] = useState(false);
    function hidePopUp() {
        setShowPopUp(false);
    }
    function showPopUp() {
        setShowPopUp(true);
    }
    return (
        <div id="playlist-container">
            <div className="playlist-wrapper">
                <div className="playlist-left">
                    <img
                        alt="playlist"
                        className="playlist-img"
                        src="https://i.scdn.co/image/ab67706f00000002026bb258da135fa6d8744b0c"
                    />
                    <div className="playlist-left-title">
                        <h2>Impulso Creativo</h2>
                        <a href="/">Spotify</a>
                    </div>
                    <div className="playlist-left-buttons">
                        <button
                            className="playlist-button"
                            onClick={() => {
                                showPopUp();
                            }}
                        >
                            REPRODUCIR
                        </button>
                        <div className="playlist-fav">
                            <img
                                className="playlist-icon"
                                alt="fav"
                                src="https://image.flaticon.com/icons/svg/1077/1077035.svg"
                                onClick={() => {
                                    showPopUp();
                                }}
                            />
                            <img
                                className="playlist-icon"
                                alt="more"
                                src="https://image.flaticon.com/icons/svg/2089/2089792.svg"
                            />
                        </div>
                        <p>80 CANCIONES</p>
                    </div>
                </div>
                <ul className="playlist-right">
                    <Song showPopUp={showPopUp} />
                    <Song showPopUp={showPopUp} />
                    <Song showPopUp={showPopUp} />
                    <Song showPopUp={showPopUp} />
                    <Song showPopUp={showPopUp} />
                    <Song showPopUp={showPopUp} />
                    <Song showPopUp={showPopUp} />
                    <Song showPopUp={showPopUp} />
                    <Song showPopUp={showPopUp} />
                    <Song showPopUp={showPopUp} />
                </ul>
            </div>
            <PlaylistPopUp
                show={show}
                hidePopUp={hidePopUp}
                image="https://i.scdn.co/image/ab67706f00000002026bb258da135fa6d8744b0c"
            />
        </div>
    );
};
export default Playlist;
