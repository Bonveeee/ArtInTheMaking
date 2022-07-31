import React, { useState } from "react";

function NewArtForm({ addArt }) {
  const [newArt, setnewArt] = useState({
    title: "",
    artist: "",
    medium_display: "",
    date: "",
    dimensions: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log(newArt);
    fetch(
      "https://api.artic.edu/api/v1/artworks?fields=id,title,date_display,date_display,main_reference_number,dimensions,artist_id,artist_title,artwork_type_title,image_id,medium_display,dimensions,place_of_origin,thumbnail,term_titles",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: newArt.title,
          artist: newArt.artist_title,
          medium_display: newArt.medium_display,
          date_display: newArt.date_display,
          dimensions: newArt.dimensions,
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => addArt(data));
  }

  function handleChange(event) {
    console.log(event.target.name);
    setnewArt({ ...newArt, [event.target.name]: event.target.value });
  }

  return (
    <>
      <form className="new-art-form" onSubmit={handleSubmit}>
        <input
          id="input"
          name="title"
          onChange={handleChange}
          placeholder="Title"
        />
        <input
          id="input"
          name="artist"
          onChange={handleChange}
          placeholder="Artist"
        />
        <input
          id="input"
          name="medium_display"
          onChange={handleChange}
          placeholder="Medium_display"
        />
        <input
          id="input"
          name="dimensions"
          onChange={handleChange}
          placeholder="Dimensions"
        />
        <input id="input2" type="submit" value="Share your Art Details" />
      </form>
    </>
  );
}

export default NewArtForm;
