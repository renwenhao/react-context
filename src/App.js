import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';
import Header from './componnets/Header';
import Main from './componnets/Main'
class App extends Component {
  static childContextTypes = {
    color:PropTypes.string,
    color1:PropTypes.string
  }

  getChildContext(){
    return {color:this.state.color,color1:this.state.color1}
  }
  constructor(props){
    super(props);
    this.state = {
      color:'deeppink',
      color1:'orange'
    }
  }



  render() {
    return (
      <div>
        <button onClick = {
          ()=>{
            const {color,color1} = this.state;
            if(color == 'deeppink'){
              this.setState({
                color:'red'
              });
            }else{
              this.setState({
                color:'deeppink'
              });
            }
            if(color1 == 'orange'){
              this.setState({
                color1:'grey'
              });
            }else{
              this.setState({
                color1:'orange'
              });
            }
          }
        }>切换颜色</button>
        <Header/>
        <Main/>
      </div>
    );
  }
}

export default App;
