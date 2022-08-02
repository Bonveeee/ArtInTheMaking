import React, { useState, useEffect } from "react";
import NewArtForm from "./NewArtForm";

const ARTWRKS_URL =
  "https://api.artic.edu/api/v1/artworks?fields=id,title,date_display,date_display,main_reference_number,dimensions,artist_id,artist_title,artwork_type_title,image_id,medium_display,dimensions,place_of_origin,thumbnail,term_titles";

function ArtsWorks() {
  const [form, setForm] = useState("false");
  const [artsWorks, setArtWorks] = useState([]);
  const [data, setData] = useState([]);
  // const[imageId , setImageId] = useState([])

  const artworksFetcher = () => {
    //fetches general artworks info
    fetch(ARTWRKS_URL)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        //   console.log(data);
        setArtWorks(data.data);
        //console.log(data.data)
      });
  };
  //console.log(artsWorks)
  console.log(data);

  useEffect(artworksFetcher, []);

  function handleClick(event) {
    setForm((form) => !form);
  }

  function addArt(newAddedArt) {
    setArtWorks([...artsWorks, newAddedArt]);
  }

  const eachArtWorks = artsWorks.map((arts) => (
    <div className="card-images" key={arts.id}>
    
      <div className="cardsimages">
    <div id="imgdiv">
    <img
     id="imgArt"
          src={
            data.config.iiif_url +
            "/" +
            arts.image_id +
            "/full/843,/0/default.jpg"
          }
          alt={arts.title}
        />
    </div>    
        <h2>Title : {arts.title}</h2>
        <h2>Artist : {arts.artist_title}</h2>
        <h2>Medium : {arts.medium_display}</h2>
        <h2>Display Date : {arts.date_display}</h2>
        <h2>Dimensions : {arts.dimensions}</h2>
        {/* <h2> Url:{data.config.iiif_url + "/" +arts.image_id + "/full/843,/0/default.jpg"}</h2> */}
        {/* getting image through linking configurl and image id from API as per API docs */}
             </div>
    </div>
  ));

  return (
    <div>
      <h1 id="art-title">Available Arts</h1>
      {eachArtWorks}
      <h1 id="input">Are you an Artist? Add your Art?</h1>
      <button onClick={handleClick}>Click To Add</button>
      {form ? <NewArtForm addArt={addArt} /> : null}
    </div>
  );
}

export default ArtsWorks;
