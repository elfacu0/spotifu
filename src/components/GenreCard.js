import React from 'react';
import '../styles/genreCard.css';

const GenreCard = () => {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  randomColor = '#' + randomColor;
  return (
    <div className="card" style={{ backgroundColor: randomColor }}>
      <h2 className="card-title">Podcast</h2>
      <img
        className="card-image"
        alt="genre-card"
        src="https://t.scdn.co/images/ad4d5c268a214f78920517e76e6ed107.jpeg"
      />
    </div>
  );
};

export default GenreCard;
