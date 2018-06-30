import React, { Component } from 'react';
import './App.css';
import Textbox from './Components/Textbox.js';

class App extends Component {

  componentWillMount() {
      document.addEventListener("keydown", this.onKeyPressed.bind(this));
  }

  componentDidMount(){
    this.setState({
      text: JSON.parse(localStorage.getItem('myNotebookText')),
    });
  }

  componentWillUnmount() {
      document.removeEventListener("keydown", this.onKeyPressed.bind(this));
  }

  state = {
    text: '',
  }

  setText = (text) =>{
    this.setState({
      text: text,
    });
    localStorage.setItem('myNotebookText', JSON.stringify(text));
  }

  onKeyPressed(e) {
    if(e.keyCode === 9){
      e.preventDefault();
      this.setText(this.state.text + '   ');
    }
  }

  render() {
    return (
      <div className="App">
        <h1 className="indieFlower">My Notebook</h1>
        <Textbox
          text = {this.state.text}
          setText = {this.setText}
        />
        <h11 className="indieFlower">Created by Joji Jacob</h11>
      </div>
    );
  }
}

export default App;
