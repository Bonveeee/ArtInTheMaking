import React, { useEffect, useState } from "react";

const ARTISTS_LIST =
  "https://api.artic.edu/api/v1/artists?fields=id,title,birth_date,death_date,artwork_ids,description";
//console.log(ARTISTS_LIST)

function Artists() {
  const [artists, setArtists] = useState([]);

  const artistFetcher = () => {
    fetch(ARTISTS_LIST)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data);
        setArtists(data);
      });
  };

  useEffect(artistFetcher, []);

  // const eachArtist = artists.data.map((artist) => (
  //   <div className="cards">
  //     <div className="artist-card" key={artist.id}>
  //       <h3>Name : {artist.title}</h3>
  //       <h4>Birth Date: {artist.birth_date}</h4>
  //       <h4>Death : {artist.death_date}</h4>
  //     </div>
  //   </div>
  // ));

  // const artistName = artists.data.title
  // console.log(artistName)

  return (
    <div>
      {}
      {/* {eachArtist} */}
    </div>
  );
}

export default Artists;
