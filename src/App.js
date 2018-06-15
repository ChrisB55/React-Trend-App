import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import SelectView from "./components/selectView";
import MainView from "./components/MainView";
import SideView from "./components/sideView";
import Card from "./components/card";
import { render } from "react-dom";
import data from './apiData';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = data;
  }
  
  
  render() {
    
    return (
      <div className="App">
        <SelectView />
        <Card
          title="George Washington"
          subtitle="1st President"
         
        />

        <MainView />
    
      </div>
    );
  }
}

export default App;
