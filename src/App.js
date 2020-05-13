import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import LeftBar from './components/LeftBar';
import MainNav from './components/MainNav';
import Player from './components/Player';
import RegisterBar from './components/RegisterBar';
import AlbumsContainer from './components/AlbumsContainer';
// import AlbumApi from './components/AlbumApi';
import RegisterPopUp from './components/RegisterPopUp';
import Search from './components/Search';
import Playlist from './components/Playlist';

function App() {
  const [popUp, setPopUp] = useState(false);
  function hidePopUp() {
    setPopUp(false);
  }
  function showPopUp() {
    setPopUp(true);
  }
  return (
    <Router>
      <div className="App">
        <div className="bars">
          <LeftBar hidePopUp={hidePopUp} showPopUp={showPopUp} />
          <div className="RightBar">
            <MainNav />
            <Switch>
              <Route exact path="/">
                <div className="albumesContainer">
                  <AlbumsContainer />
                  <AlbumsContainer />
                  <AlbumsContainer />
                </div>
              </Route>
              <Route exact path="/spotifu">
                <div className="albumesContainer">
                  <AlbumsContainer />
                  <AlbumsContainer />
                  <AlbumsContainer />
                </div>
              </Route>
              <Route exact path="/search">
                <Search />
              </Route>
              <Route exact path="/playlist">
                <Playlist />
              </Route>
            </Switch>
          </div>
        </div>
        <RegisterBar />
        <Player />
        <RegisterPopUp hidePopUp={hidePopUp} show={popUp} />
      </div>
    </Router>
  );
}

export default App;
