import React from 'react';
import '../styles/album.css';
import { Link } from 'react-router-dom';

const Album = props => {
  return (
    <Link to="/playlist" className="albumContainer">
      <div className="albumWrapper">
        <img
          alt="albumImage"
          src="https://i.scdn.co/image/ab67706f00000002026bb258da135fa6d8744b0c"
        />
        <p className="albumName">Impulso Creativo</p>
        <p className="albumDescription">
          Bases suaves para inspirarte mientras...
        </p>
      </div>
      <div className="playButtonContainer">
        <div className="playButtonWrapper">
          <input
            type="image"
            alt="playButton"
            src="https://image.flaticon.com/icons/svg/109/109197.svg"
          />
        </div>
      </div>
    </Link>
  );
};
export default Album;
