import React, { Component } from "react";
import "../App.css";


class CardList extends Component {}
  render() {
    const cardData = this.props;
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


    )
  }
}

export default CardList;