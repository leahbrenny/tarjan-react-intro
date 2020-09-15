import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Gallery from './Gallery';
import ThingsToLearn from './ThingsToLearn'
// React Component Incantation
class App extends Component {

  onFeelingChange = (event) => {
    this.setState({
      feeling: event.target.value
    });
  }

  onDayChange = (event) => {
    this.setState({
      whatDayIsIt: event.target.value
    });
  }

myFancyFunction(){
  console.log('outside render', this.state);
}

  state = {
    whatDayIsIt: 'Taco Day',
    feeling: 'Happy',
    buttonClicks: 0,
    //click a button and it changed to clickalicious cage day
  }

clickyClick = () => {
  this.setState({
    feeling: 'Clickalicious',
    whatDayIsIt: 'Cage Day'
  })
}  
 onClickClick = () => {
   this.setState({
    buttonClicks: this.state.buttonClicks + 1
   });
 }
  render() {
    this.myFancyFunction();

    //access state
    console.log('app state is', this.state);
    console.log('this is', this);
    //this is referencing the App Component

    let clickCountMessage;
    if (this.state.buttonClicks < 10){
      clickCountMessage = 'Keep clicking'
    }
    else if (this.state.buttonClicks < 20){
      clickCountMessage = 'Get that bread!'
    }
    else if (this.state.buttonClicks < 40){
      clickCountMessage = 'Lets go gamer!'
    }
    else if (this.state.buttonClicks < 100){
      clickCountMessage = 'Such click much wow'
    }
    else if (this.state.buttonClicks < 400){
      clickCountMessage = 'That is a lot of clicks'
    }
    else {
      clickCountMessage = 'Chill out bro'
    }
    return (
      <div>
        <span>
        <h1>What's Up Gamers!</h1>
        <h2>It's {this.state.feeling} {this.state.whatDayIsIt}!</h2>
        <h4>Today is {getDate()}</h4>
        <input type='text' placeholder='Feeling' onChange={this.onFeelingChange} />
        <input type= 'text' placeholder='Day' onChange={this.onDayChange} />
        <button onClick={this.clickyClick}>Clickalicious</button>

        <div>
          <button onClick={this.onClickClick}>Click</button>
          <h3>You have clicked the button {this.state.buttonClicks} times</h3>
          <p onClick={this.onClickclickerCountMessage}>{clickCountMessage}</p>
        </div>
        <h3>We are doing React</h3>
        </span>
        <ThingsToLearn />
        <h3>Look at these pics</h3>
        <Gallery />
      </div>
    );
  }
}

function getDate(){
  return new Date().toLocaleString()
}

export default App;
