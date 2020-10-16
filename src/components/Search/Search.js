import React, { Component } from 'react'
import './style.css'
import SearchResult from '../SearchResult'
import Mark from 'mark.js'

class Search extends Component {
  state = {
    searchTerm: "",
    results: []
  }

  componentDidUpdate () {
    const instance =  new Mark(document.getElementById('results'));
    instance.mark(this.props.textToHighLight)
  }

  handleInputChange = e => {
    const API = "https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srlimit=5&origin=*&srsearch="
    this.setState({searchTerm: e.target.value}, () => {
      fetch(`${API}${this.state.searchTerm}`)
        .then(response => response.json())
        .then(response => this.setState({results: response.query.search}))
        .catch(error => {
          console.log("There was an error with fetching: ", error);
        });
    });
  };


  render () {
    const { searchTerm, results } = this.state;
    const { textToHighLight} = this.props;

    return (
      <>
        <form className="form">
          <input
            type="text"
            name="searchTerm"
            value={searchTerm}
            onChange={this.handleInputChange}
            placeholder="Tekst szukaj"
          >
          </input>
        </form>
        <div id="results">
          {results.map(element => {
            return <SearchResult key={element.pageid} element={element} textToHighLight={textToHighLight}/>
          })}
        </div>
      </>
    )
  }
}


export default Search;
