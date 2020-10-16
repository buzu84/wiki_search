import React from 'react'
import './style.css'

const SearchResult = ({ element, textToHighLight }) => {
  const highlight = (text, textToHighLight) => {
    if (textToHighLight) {
      return text.replaceAll(textToHighLight, '*' + textToHighLight + '*')
    } else {
      return text
    }
  }

  return (
    <div className="search_result">
      <h1>{highlight(element.title, textToHighLight)}</h1>
      <p>{highlight(element.snippet, textToHighLight)}</p>
    </div>

  )
}

export default SearchResult;
