import React, { useState } from 'react';
import 'react-h5-audio-player/lib/styles.css';
import '../styles/player.css';

const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [percentage, setPercentage] = useState('0%');
  const [currentSong, setCurrentSong] = useState({
    currentTime: '0:00',
    duration: '0:00'
  });
  let interval;
  function actualPercentage() {
    if (currentSong) {
      let percentage = (
        (currentSong.currentTime * 100) /
        currentSong.duration
      ).toFixed(2);
      setPercentage(`${percentage}%`);
    }
  }

  function toMinutes(time) {
    if (!time) {
      return '0:00';
    }
    let minutes = Math.floor(time / 60);
    let seconds = time - minutes * 60;
    return `${minutes}:${seconds.toFixed(0) < 10 ? '0' : ''}${seconds.toFixed(
      0
    )}`;
  }
  return (
    <div className="BottomPlayer">
      <div className="PlayerControllers">
        <div className="PlayerButtons">
          <input
            className="PlayerControllersButton"
            id="randomButton"
            type="image"
            alt="randomButton"
            src="https://image.flaticon.com/icons/svg/724/724979.svg"
          />
          <input
            className="PlayerControllersButton"
            onClick={() => {
              currentSong.currentTime -= 5;
              actualPercentage();
            }}
            id="previousPlayerButton"
            type="image"
            alt="previousPlayerButton"
            src="https://image.flaticon.com/icons/svg/149/149656.svg"
          />
          <audio
            ref={mySong => {
              setCurrentSong(mySong);
            }}
          >
            <source src={require('../musics/pm.mp3')} type="audio/mpeg" />
          </audio>
          <input
            className="PlayerControllersButton"
            onClick={() => {
              setIsPlaying(!isPlaying);
              if (isPlaying === true) {
                currentSong.pause();
                clearInterval(interval);
              } else {
                interval = setInterval(actualPercentage, 1000);
                currentSong.play();
              }
            }}
            id="playPlayerButton"
            type="image"
            alt="playPlayerButton"
            src={
              isPlaying === true
                ? 'https://image.flaticon.com/icons/svg/2404/2404385.svg'
                : 'https://image.flaticon.com/icons/svg/142/142457.svg'
            }
          />
          <input
            className="PlayerControllersButton"
            onClick={() => {
              currentSong.currentTime += 5;
              actualPercentage();
            }}
            id="nextPlayerButton"
            type="image"
            alt="nextPlayerButton"
            src="https://image.flaticon.com/icons/svg/149/149656.svg"
          />
          <input
            className="PlayerControllersButton"
            id="repeatPlayerButton"
            type="image"
            alt="repeatPlayerButton"
            src="https://image.flaticon.com/icons/svg/709/709583.svg"
          />
        </div>
        <div className="PlayerBar">
          <span>{toMinutes(currentSong.currentTime)}</span>
          <div id="progressBar">
            <div
              id="progressBarStatus"
              style={{ width: percentage }}
              onClick={() => {
                actualPercentage();
              }}
            ></div>
          </div>
          <span>{toMinutes(currentSong.duration)}</span>
        </div>
      </div>
    </div>
  );
};
export default Player;
