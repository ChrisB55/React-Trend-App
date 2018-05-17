import React, { Component } from 'react';
import '../App.css';
import StateData from '../apiStateData';


class SideView extends Component {
    render() { 
      return (
        <table cellspacing="5">
          <tr> 
            <th>Where are US Presidents from?</th>  
          </tr>
          <tr> 
            <th> State</th>  
            <th> Number </th>
          </tr>
          <tr > 
            <td>{StateData[0].title} </td>
            <td> {StateData[0].number} </td> 
          </tr>
          <tr>
            <td>{StateData[1].title} </td>
            <td>{StateData[1].number}</td>
          </tr>
          <tr>
            <td>{StateData[2].title} </td>
            <td> {StateData[2].number}</td>
          </tr>
        
         </table>
      );
    }
  }
  
  export default SideView;