import React from 'react';
import hand_icon from '../../assets/hand_icon.png';

const Slide2 = ({ image }) => {
  return (
    <div className="slide">
      <img src={image} alt="" />
      <div className="slide2">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className="hero-hand-icon">
            <p>New</p>
            <img src={hand_icon} alt="hand" />
          </div>
          <p>collections</p>
          <p>for everyone</p>
        </div>
        <button className="hero-latest-btn">
          <div>Shop now</div>
        </button>
      </div>
    </div>
  );
};

export default Slide2;
