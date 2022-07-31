import React, { useState, useEffect } from "react";
import NewArtForm from "./NewArtForm";

const ARTWRKS_URL =
  "https://api.artic.edu/api/v1/artworks?fields=id,title,date_display,date_display,main_reference_number,dimensions,artist_id,artist_title,artwork_type_title,image_id,medium_display,dimensions,place_of_origin,thumbnail,term_titles";

function ArtsWorks() {
  const [form, setForm] = useState("false");
  const [artsWorks, setArtWorks] = useState([]);
  // const[imageId , setImageId] = useState([])

  const artworksFetcher = () => {
    fetch(ARTWRKS_URL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data);
        setArtWorks(data.data);
       
      });
  };

  useEffect(artworksFetcher, []);

  // const image_id = artsWorks.image_id
  // console.log(image_id)
  //const imageUrl = "https://www.artic.edu/iiif/2/{image_id}/full/843,/0/default.jpg"  //Const imageUrl= "/"+config.ii_url +"/"+ image_id + "anything here"
  //https://www.artic.edu/iiif/2/24347d10-6df9-589e-5818-46ddcf18966f/full/843,/0/default.jpg
  //let  imageUrl= `https://www.artic.edu/iiif/2/${arts.image_id}/full/843,/0/default.jpg`

  function handleClick(event) {
    setForm((form) => !form);
  }

  function addArt(newAddedArt) {
    setArtWorks([...artsWorks, newAddedArt]);
    //console.log("newPoems", newAddedPoem)
  }

  const eachArtWorks = artsWorks.map((arts) => (
    <div className="card-images" key={arts.id}>
      <div className="cardsimages">
        {/* <img  src={arts.thumbnail.lqip} alt="artimage" /> */}

        <h2>Title : {arts.title}</h2>
        <h2>Artist : {arts.artist_title}</h2>
        <h2>Medium : {arts.medium_display}</h2>
        <h2>Display Date : {arts.date_display}</h2>
        <h2>Dimensions : {arts.dimensions}</h2>

        {/* <h3>{arts.image_id}</h3> */}
      </div>
    </div>
  ));
  //let image_id2 = `"/"+config.ii_url +"/"+ ${imageId }+ "anything here"`
  //console.log(image_id2)
  // const image_id = artsWorks.map((arts) => arts.image_id);
  // console.log(image_id);
  //let  imageUrl= "`https://www.artic.edu/iiif/2/+"/"+${image_id}+"/full/843,/0/default.jpg`"

  return (
    <div>
      {/* <img
          className="img"
         src={imageUrl}
          alt="artImage"
        /> */}
      <h1 id="art-title">Available Arts</h1>
      {eachArtWorks}
      <h1 id="input">Are you an Artist? Add your Art?</h1>
      <button onClick={handleClick}>Click To Add</button>
      {form ? <NewArtForm addArt={addArt} /> : null}
     
    </div>
  );
}

export default ArtsWorks;
