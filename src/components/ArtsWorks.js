import React, { useState, useEffect } from "react";

const ARTWRKS_URL =
  "https://api.artic.edu/api/v1/artworks?fields=id,title,date_display,place_of_origin,dimensions,thumbnail,artist_id,artist_title,artwork_type_title,image_id,term_titles,medium_display,dimensions";

function ArtsWorks() {
  const [artsWorks, setArtWorks] = useState([]);
 // const[imageId , setImageId] = useState([])

  const artworksFetcher = () => {
    fetch(ARTWRKS_URL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data);
        setArtWorks(data.data);
        // setImageId(artsWorks.image_id)
        // console.log(artsWorks.image_id)
      });
  };

  useEffect(artworksFetcher, []);

  // const image_id = artsWorks.image_id
  // console.log(image_id)
  //const imageUrl = "https://www.artic.edu/iiif/2/{image_id}/full/843,/0/default.jpg"  //Const imageUrl= "/"+config.ii_url +"/"+ image_id + "anything here"
  //https://www.artic.edu/iiif/2/24347d10-6df9-589e-5818-46ddcf18966f/full/843,/0/default.jpg
  //let  imageUrl= `https://www.artic.edu/iiif/2/${arts.image_id}/full/843,/0/default.jpg`

  const eachArtWorks = artsWorks.map((arts) => (
    <div className="card-images" key={arts.id}>
      <div className="cardsimages">
      {/* <img  src={arts.thumbnail.lqip} alt="artimage" /> */}
        <h2>{arts.artist_title}</h2>
        <h2>{arts.medium_display}</h2>
        <h2>{arts.date_display}</h2>
        <h2>{arts.dimensions}</h2>
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
      {eachArtWorks}
    </div>
  );
}

export default ArtsWorks;
