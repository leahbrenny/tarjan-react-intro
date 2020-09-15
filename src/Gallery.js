import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// React Component Incantation
class Gallery extends Component {
  render() {
    return (
    <div>
        <img src="http://picsum.photos/200/200"></img>
        <img src="http://picsum.photos/200/200"></img>
        <img src="http://picsum.photos/200/200"></img>
        <img src="http://picsum.photos/200/200"></img>
        <img src="http://picsum.photos/200/200"></img>
        <img src="http://picsum.photos/200/200"></img>
    </div>
    );
  }
}

export default Gallery;