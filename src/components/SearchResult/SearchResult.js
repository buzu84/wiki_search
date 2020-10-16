import React from 'react'
import './style.css'

const SearchResult = ({ element }) => {
  return (

    <div className="search_result">
      <h1>{element.title}</h1>
      <p>{element.snippet}</p>
    </div>

  )
}

export default SearchResult;
