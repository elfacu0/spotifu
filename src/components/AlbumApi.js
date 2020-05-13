import React, { useState, useEffect } from 'react';
import axios from 'axios';

// nigifed645@smlmail.com nigifed645  Nigifed6.45
// apikey = 79114747d94557ef327f00b8319187f0

const AlbumApi = () => {
  const [persona, setPersona] = useState({ body: '' });
  useEffect(() => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/album.tracks.get?album_id=13750844&page=1&page_size=2
        &apikey=79114747d94557ef327f00b8319187f0`
      )
      .then(res => {
        const persons = res.data;
        setPersona(persons);
      });
  }, []);

  return (
    <div>
      <h2>{JSON.stringify(persona)}</h2>
    </div>
  );
};

export default AlbumApi;
