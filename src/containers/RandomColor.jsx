import React, { Component } from 'react';
import Display from '../components/colors/Display';

export default class randomColor extends Component {
  state = {
    color: 'grey',
    image: ''
  }

  changeColor = () => {
    const colorArray = [
      'red', 'blue', 'green', 'cyan', 'yellow', 'orange'
    ];
    let randColor = colorArray[Math.floor(Math.random() * colorArray.length)];
    return randColor;
  };

  componentDidMount(){
    this.interval = setInterval(() => {
      let newColor = this.changeColor();
      if(newColor === this.state.color){
        this.setState({
          color: '',
          image: 'https://i.dailymail.co.uk/i/pix/2016/03/18/15/324D202500000578-3498922-image-a-33_1458315465874.jpg'
        })
      } else{
      this.setState({
        color: newColor,
        image: ''
      })
      }
    }, 1800)
  }

  render() {
    return (
      <Display bgcolor={this.state.color} bgImage={this.state.image}/>
    )
  }
}
