import React from 'react';
import '../styles/playlist.css';

const Song = props => {
  return (
    <li className="song">
      <img
        alt="play-icon"
        className="playlist-icon"
        id="playlist-playnote"
        src="https://image.flaticon.com/icons/svg/727/727248.svg"
        onClick={props.showPopUp}
      ></img>
      <div className="song-name">
        <h3>Bird Song</h3>
        <a href="/">Elderbrook</a>
        <span> • </span>
        <a href="/">Old Friend</a>
      </div>
      <div className="song-more">
        <img
          id="song-more-icon"
          alt="more"
          src="https://image.flaticon.com/icons/svg/2089/2089792.svg"
        />
      </div>
      <div className="song-duration">
        <p>3:16</p>
      </div>
    </li>
  );
};
export default Song;
