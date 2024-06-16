import React from 'react';

const Slide1 = ({ image }) => {
  return (
    <div className="slide">
      <img src={image} alt="" />
      <div className="slide1">
        <p>SEASON SALE</p>
        <h2>Get 50% off</h2>
        <span>End In</span>
        <p className="countdown">{formatCountdown(countdown)}</p>
      </div>
    </div>
  );
};

export default Slide1;
