import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// React Component Incantation
class Gallery extends Component {
  render() {
    return (
    <div>
        <img src="http://picsum.photos/201/200"></img>
        <img src="http://picsum.photos/200/201"></img>
        <img src="http://picsum.photos/202/200"></img>
        <img src="http://picsum.photos/200/202"></img>
        <img src="http://picsum.photos/203/200"></img>
        <img src="http://picsum.photos/200/203"></img>
    </div>
    );
  }
}

export default Gallery;