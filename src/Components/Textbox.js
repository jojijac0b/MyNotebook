import React, { Component } from 'react';
import './Textbox.css'

class Textbox extends Component {

  onChange = (e) => {
    this.props.setText(e.target.value);
  }

  render(){
    return (
      <div>
        <textarea rows="20" cols="80" placeholder="Enter text..." value={this.props.text} onChange={this.onChange} />
      </div>
    )
  }
}

export default Textbox;
