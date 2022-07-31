import React from 'react'
import Search from './Search'

function Home() {
  return (
 <div className ="container">
  <img  src="https://bit.ly/3oEfATB" alt="art" style={{width:"100%"}} />
    <div className="centered"><h1>Elevate your World With Unique Art and Design</h1></div>
    <div className="search-area"><Search/></div>
</div>
  )
}

export default Home

//API links for references
//https://api.artic.edu/api/v1/artworks?fields=id,title,date_display,date_display,main_reference_number,dimensions,artist_id,artist_title,artwork_type_title,image_id,medium_display,dimensions,place_of_origin,thumbnail,term_titles
//https://api.artic.edu/api/v1/artworks/search?fields=id,title,date_display,date_display,main_reference_number,dimensions,artist_id,artist_title,artwork_type_title,image_id,medium_display,dimensions,place_of_origin,thumbnail,term_titles

//https://api.artic.edu/api/v1/artists?fields=id,title,birth_date,death_date,artwork_ids

//https://api.artic.edu/api/v1/artworks?fields=id,title,artist_id,artist_title,image_id,config


//https://www.artic.edu/iiif/2/{image_id}/full/843,/0/default.jpg

//Const imageUrl= "/"+config.ii_url +"/"+ image_id + "anything here"