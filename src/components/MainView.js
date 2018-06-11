import React, { Component } from 'react';
import '../App.css';
import data from '../apiData';


class MainView extends Component {
  render() { 
    return (
      <div className="mainView"> Item picked is 
      {data[0].title} 
      <br />
      {data[0].subtitle}
      <br />
      {data[0].url}  </div>
    );
  }
}



export default MainView;
