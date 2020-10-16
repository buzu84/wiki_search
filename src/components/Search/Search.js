import React, { Component,  } from 'react'
import './style.css'

class Search extends Component {
  state = {
    searchTerm: "",
    results: []
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

    return (
      <>
        <form className="form">
          <input
            type="text"
            name="searchTerm"
            value={searchTerm}
            onChange={this.handleInputChange}
          >
          </input>
        </form>
        {results.map(element => {
          return <span key={element.pageid}>{element.title}</span>
        })}
      </>
    )
  }
}


export default Search;
