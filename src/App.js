import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import SelectView from "./components/selectView";
import MainView from "./components/MainView";
import SideView from "./components/sideView";
import Card from "./components/card";
import { render } from "react-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SelectView />
        <Card
          title1="George Washington"
          title2="John Adams"
          title3="Thomas Jefferson"
          subtitle1="1st President"
          subtitle2="2nd President"
          subtitle3="3rd President"
        />

        <MainView />
        <SideView />
      </div>
    );
  }
}

export default App;
