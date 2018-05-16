import React, { Component } from 'react';
import '../App.css';
import StateData from '../apiStateData';


class SideView extends Component {
    render() { 
      return (
        <table>
        <tr> {StateData[0].title} , {StateData[0].number}</tr>
        <tr> {StateData[1].title} , {StateData[1].number}</tr>
        <tr> {StateData[2].title} , {StateData[2].number}</tr>
         </table>
      );
    }
  }
  
  export default SideView;