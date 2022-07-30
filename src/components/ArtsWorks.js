import React, { useState , useEffect } from 'react'

const ARTWRKS_URL = "https://api.artic.edu/api/v1/artworks?fields=id,title,date_display,date_display,main_reference_number,dimensions,artist_id,artist_title,artwork_type_title,image_id,medium_display,dimensions,place_of_origin,thumbnail,term_titles"


function ArtsWorks() {

  const [artsWorks, setArtWorks] = useState([])

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
//const imageUrl= `https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`

const eachArtWorks = artsWorks.map((arts)  =>(
       <div className='card-images' key={arts.id}>
      <div className='cardsimages'>
           {/* <img className='img' src={imageUrl} alt ="artImage" /> */}
        <h2>{arts.date_display}</h2>
        <h2>{arts.artist_title}</h2>
        <h2>{arts.medium_display}</h2>
        <h2>{arts.dimensions}</h2>
      </div>
    </div>
 
 
  ))

  return (
    <div>
    {eachArtWorks}
    </div>
  )
}

export default ArtsWorks