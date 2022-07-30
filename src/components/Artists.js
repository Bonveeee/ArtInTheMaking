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
        setArtists(data.data);
      });
  };

  useEffect(artistFetcher, []);

  function handleClick(){
    alert("See More!");
    }
    
  const eachArtist = artists.map((artist) => (
    <div className="grid">
    <div className="cards">

         <img src="https://images.unsplash.com/photo-1551180452-aea351b23949?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="artist"/>
           <div className="text" key={artist.id} >
              <h3>Name : {artist.title}</h3>
              <h4>Birth Date: {artist.birth_date}</h4>
                <h4>Death : {artist.death_date}</h4>
                <button onClick={handleClick}>More about the Artist</button>
         </div>
    </div>
    </div>
      ));

      return (
    <div>
     <h1 id="artist-title">Meet our International Artists and Designers </h1>
      {}   
      {eachArtist}
    </div>
  );
}

export default Artists;


// rem to apply use random images
//https://www.nicesnippets.com/blog/how-to-create-random-image-in-react-native