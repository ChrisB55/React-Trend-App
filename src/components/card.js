import React, { Component } from "react";
import "../App.css";
import data from "../apiData";

class Card extends Component {
  render() {
    this.props = data;
    return (
      // This is the same functional style used in SelectView, used with Props this time.
     /* <div className="container">
        {data.map((data, id) => (
          <div key={id} className="selectView">
            {data.title}
            <br />
            {data.subtitle}
          </div>
        ))}
      </div>*/

      <div className="container">
        <div className="cardView">
        <div className="col-sm">
             
              {this.props.title} 
              <br />
              {this.props.subtitle}
              <br />
        
              </div>
              </div>
        </div>
    );
  }
}

export default Card;
