import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Gallery from './Gallery';
import ThingsToLearn from './ThingsToLearn'
// React Component Incantation
class App extends Component {
  render() {
    return (
      <div>
        <h1>What's Up Gamers</h1>

        <h3>We are doing React</h3>
        <ThingsToLearn />
        <h3>Look at these pics</h3>
        <Gallery />
      </div>
    );
  }
}

export default App;
