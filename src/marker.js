import React from 'react';
import './marker.css';

const Marker = (props) => {
    const { color, province, country, latest } = props;
    return (
      <div className="marker bounce"
        style={{ backgroundColor: color, cursor: 'pointer'}}
        title={province || country}
      > 
      <div className="pulse"></div>
      <div className="container">
        <div className="counter" >
            <p className="count text-white">{latest}</p>
        </div>
      </div>
      </div>
    );
  };

  export default Marker;