import React, { Component } from 'react'
import './style.css'

class Search extends Component {
  state = {
    searchTerm: ""
  }

  handleInputChange = e => {
    this.setState({searchTerm: e.target.value});
  };


  render () {
    const { searchTerm } = this.state;

    return (
      <>
        <form className="form">
          <input type="text"
          name="searchTerm"
          value={this.state.searchTerm}
          onChange={this.handleInputChange}
          >
          </input>
        </form>
        <div>{this.state.searchTerm}</div>
      </>
    )
  }
}


export default Search;
