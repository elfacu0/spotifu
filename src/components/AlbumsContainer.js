import React from 'react';
import Album from './Album';
import '../styles/album.css';

const AlbumsContainer = props => {
  let width = window.innerWidth;
  let cantAlbums = [1];
  if (width <= 768) {
    cantAlbums = [1, 2];
  } else if (width <= 1024) {
    cantAlbums = [1, 2, 3, 4];
  } else if (width <= 1444) {
    cantAlbums = [1, 2, 3, 4, 5];
  } else if (width > 1444) {
    cantAlbums = [1, 2, 3, 4, 5, 6];
  }
  return (
    <div className="albumsContainer">
      <div className="albumsWrapper">
        <div className="albumsHeader">
          <div className="albumsTitle">
            <h2>Concentración</h2>
          </div>
          <div className="albumsMore">
            <p className="albumButton">VER MÁS</p>
          </div>
        </div>
        <div className="albumsDescription">
          <p>Música para ayudar a concentrarte.</p>
        </div>
        <div className="albumsRecoContainer">
          {cantAlbums.map(e => (
            <Album key={e} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlbumsContainer;
