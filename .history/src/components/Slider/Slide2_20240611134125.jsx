import React from 'react';
import hand_icon from '../../assets/hand_icon.png';

const Slide2 = ({ image }) => {
  return (
    <div className="w-full flex-shrink-0 h-0vh relative">
      <img src={image} alt="" className="object-cover w-full h-full" />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-50">
        <h2 className="text-4xl font-bold">NEW ARRIVALS ONLY</h2>
        <div className="mt-4">
          <div className="hero-hand-icon flex items-center">
            <p className="mr-2 text-xl">New</p>
            <img src={hand_icon} alt="hand" className="w-8 h-8" />
          </div>
          <p>collections</p>
          <p>for everyone</p>
        </div>
        <button className="mt-4 px-6 py-2 bg-blue-500 rounded text-white">
          Shop now
        </button>
      </div>
    </div>
  );
};

export default Slide2;
