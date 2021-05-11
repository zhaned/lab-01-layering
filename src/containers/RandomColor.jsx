import React, { Component } from 'react';
import Display from '../components/colors/Display';

export default class randomColor extends Component {
  state = {
    color: 'grey'
  }

  changeColor = () => {
    const colorArray = [
      'red', 'blue', 'green', 'cyan', 'yellow', 'orange'
    ];
    let randColor = colorArray[Math.floor(Math.random() * colorArray.length)];
    return randColor;
  }

  componentDidMount(){
    this.interval = setInterval(() => {
      this.setState({
        color: this.changeColor()
      })
    }, 1800)
  }

  render() {
    return (
      <Display bgcolor={this.state.color}/>
    )
  }
}
