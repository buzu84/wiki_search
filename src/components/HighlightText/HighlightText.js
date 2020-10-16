import React, { Component } from 'react'
import './style.css'


class HighlightText extends Component {
  state = {
    highlightTerm: ""
  }

  handleInputChange = e => {
    this.setState({highlightTerm: e.target.value});
  };

  handleSubmit = e => {
    e.preventDefault();
    if (typeof this.props.setTextToHighLight === "function") {
      this.props.setTextToHighLight(this.state.highlightTerm);
    }
  }


  render () {
    const { highlightTerm } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="highlightTerm"
          value={highlightTerm}
          onChange={this.handleInputChange}
          placeholder="Tekst podświetlenia"
        >
        </input>
        <button type="submit">Podświetl wszystkie</button>
      </form>
    )
  }
}


export default HighlightText;
