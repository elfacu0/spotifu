import React from 'react';
import { Link } from 'react-router-dom';

const LeftBar = props => {
  return (
    <div className="leftNavBar">
      <Link to="/">
        <img
          alt="spotify-logo"
          id="spotify-logo"
          src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
        />
      </Link>
      <nav className="leftMenu">
        <ul>
          <li>
            <Link className="leftMenuOptions" to="/" onClick={props.hidePopUp}>
              <div className="leftMenuOption leftMenuOptionSelected">
                <img
                  alt="icon"
                  src="https://pngimage.net/wp-content/uploads/2018/06/home-icon-white-png-1.png"
                ></img>
                <p>Incio</p>
              </div>
            </Link>
          </li>

          <li>
            <Link className="leftMenuOptions" to="/search">
              <div className="leftMenuOption">
                <img
                  alt="icon"
                  id="search"
                  src="https://image.flaticon.com/icons/svg/483/483356.svg"
                ></img>
                <p>Buscar</p>
              </div>
            </Link>
          </li>

          <li>
            <Link className="leftMenuOptions" to="/" onClick={props.showPopUp}>
              <div className="leftMenuOption">
                <img
                  alt="icon"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSngen86KVAR3SrNyLn4O_OyWC7yAYs-oEIOHaavdu_7CxABqjB"
                ></img>
                <p>Tu biblioteca</p>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="leftNavFooter">
        <div className="leftNavFooterOptions">
          <a href="https://www.spotify.com/ar/legal/cookies-policy/">Cookies</a>
          <p>---</p>
          <a href="https://www.spotify.com/legal/privacy-policy/">privacidad</a>
        </div>
      </div>
    </div>
  );
};
export default LeftBar;
