import React from 'react';

const Slide3 = ({ image }) => {
  return (
    <div className="slide">
      <img src={image} alt="" />
      <div className="slide3">
        <h2>Even more than you expect</h2>
        <p>
          Fashion, Beauty, Sportwear,
          <br /> Accessories, and more ...
        </p>
      </div>
    </div>
  );
};

export default Slide3;
