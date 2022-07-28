import React, { useState, useEffect } from "react";


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
          setSearchItem("")
          setResults(data.meals == null ? 0 : data.meals.length )
              })
  }

  useEffect(
      searchInfo, []
  )



  return (
    <div className="container">
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="search" className="form-label">SEARCH MEAL</label>
                    <input type="text" className="form-control" id="search" name="search" value={searchItem} onChange={handleSearch}/>
                </div>
            </form>
            <h3 className="mt-4">SEARCH RESULTS ({results})</h3>
            <div className="row">
                {/* TODO: POPULATE RESULTS */}
            </div>
        </div>
  )
}

export default Search