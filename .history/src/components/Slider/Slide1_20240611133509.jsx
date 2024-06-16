import { useState, useEffect } from 'react';

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


  const formatCountdown = (totalSeconds) => {
    const days = Math.floor(totalSeconds / (24 * 60 * 60));
    const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    const seconds = totalSeconds % 60;
    return `${days}D ${hours}H : ${minutes}M : ${seconds}s`;
  };
  return (
    <div className="w-full flex-shrink-0 h-80vh relative">
      <img src={image} alt="" className="object-cover w-full h-full" />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-50">
        <p className="text-2xl">SEASON SALE</p>
        <h2 className="text-4xl font-bold">Get 50% off</h2>
        <span>End In</span>
        <p className="text-xl countdown">{}</p>
      </div>
    </div>
  );
};

export default Slide1;
