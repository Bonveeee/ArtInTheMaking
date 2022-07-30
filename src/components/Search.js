import React, { useState, useEffect } from "react";

//this search component will make users search for keywords on the site
const SEARCH = "https://api.artic.edu/api/v1/artworks/search?"

function Search() {

  const [searchItem, setSearchItem] = useState("")
    const [counter, setCounter] = useState(0)
    const [results, setResults] = useState(0)

    const handleSearch = (event) => {
        setSearchItem(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setCounter(counter + 1)
    }

    const searchInfo = () => {

      const actualSearch = SEARCH + searchItem

      fetch(actualSearch)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
          setSearchItem("")
          setResults(data.data== null ? 0 : data.data.length )
              })
  }

  useEffect(
      searchInfo, [counter]
  )



  return (
    <div className="search-container">
            <form onSubmit={handleSubmit}>
                <div>
                   <input type="text" placeholder="What are you looking for?" className="form-control" id="search" name="search" value={searchItem} onChange={handleSearch}/>
                </div>
            </form>
            <h3>Available results({results})</h3>
            <div className="row">
                {/* TODO: POPULATE RESULTS */}
            </div>
        </div>
  )
}

export default Search