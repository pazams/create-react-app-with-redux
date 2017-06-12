import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BedroomContainer from './containers/BedroomContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Anti patterns?</h2>
        </div>
        <BedroomContainer />
      </div>
    );
  }
}

export default App;
