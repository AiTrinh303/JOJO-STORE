import React, { useState, useEffect } from 'react';

const Slide1 = ({ image }) => {
  const [countdown, setCountdown] = useState(calculateCountdown());
  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(prevCountdown => {
        if (prevCountdown > 0) {
          return prevCountdown - 1;
        } else {
          clearInterval(interval);
          return 0;
        }
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  function calculateCountdown() {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30);
    const difference = targetDate.getTime() - new Date().getTime();
    return Math.max(0, Math.floor(difference / 1000));
  }

  

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
