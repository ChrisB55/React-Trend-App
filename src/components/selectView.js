import React, { Component } from 'react';
import '../App.css';
//Dummy API data
const data = [
        { 
        id: 1,
        title: 'First',
        subtitle: 'first subtitle',  
        url: 'www.first.com'
        },
        {
        id:2, 
        title: 'Second',
        subtitle: 'second subtitle',  
        url: 'www.second.com'
        },
        { 
        id: 3,
        title: 'Third',
        subtitle: 'Third subtitle',  
        url: 'www.third.com'
        },
    ]

class SelectView extends Component {
  render() {
      
    return (
    // This is a functional style, creating a similar effect to a for loop. 
        <div className="container">
          {data.map((data, id) =>
             <div key={id}className="selectView">
              {data.title} 
              <br />
              {data.subtitle}
              <br />
              {data.url} 
              </div>
            )}
        </div>
        
      
    );
}
  }


export default SelectView;
