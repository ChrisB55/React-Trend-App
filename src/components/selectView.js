import React, { Component } from 'react';
import '../App.css';
import data from '../apiData';

class SelectView extends Component {
  render() {
    
    return (
    // This is a functional style, creating a similar effect to a for loop.
    //Pulling fake API, no props or state used.  
        <div className="container">
          {data.map((data, id) =>
             <div key={id}className="selectView">
              {data.title} 
              <br />
              {data.subtitle}
              <br />
              {data.url} 
              <br />
              </div>
              
            )} 
        </div> 
    );
    }
  }


export default SelectView;
