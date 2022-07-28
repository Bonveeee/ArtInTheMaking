import React from 'react'
import { Search } from 'react-feather'

function Home() {
  return (
    <div className='home'>
    <h1>Elevate your World With Unique Art and Design</h1>
    <img className='img'
        src="https://www.artic.edu/iiif/2/24347d10-6df9-589e-5818-46ddcf18966f/full/843,/0/default.jpg"
        alt="car"
      />
    
    <Search/>
    </div>
  )
}

export default Home

//https://api.artic.edu/api/v1/artworks?fields=id,title,date_display,date_display,main_reference_number,dimensions,artist_id,artist_title,artwork_type_title,image_id,medium_display,dimensions,place_of_origin,thumbnail,term_titles
//https://api.artic.edu/api/v1/artworks/search?fields=id,title,date_display,date_display,main_reference_number,dimensions,artist_id,artist_title,artwork_type_title,image_id,medium_display,dimensions,place_of_origin,thumbnail,term_titles

//https://api.artic.edu/api/v1/artists

//https://api.artic.edu/api/v1/artworks?fields=id,title,artist_id,artist_title,image_id,config


//https://www.artic.edu/iiif/2/{image_id}/full/843,/0/default.jpg