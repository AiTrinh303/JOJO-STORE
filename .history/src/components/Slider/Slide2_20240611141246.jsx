import React from 'react';
import hand_icon from '../../assets/hand_icon.png';

const Slide2 = ({ image }) => {
  return (
    <div className="relative w-full flex-shrink-0">
      <img src={image} alt="" className="object-cover w-full h-full" />
      <div className="absolute text-gray-500 font-bold text-2xl bg-transparent p-2.5 rounded-lg">
     
            <h2 className="text-gray-900 text-2xl font-semibold">NEW ARRIVALS ONLY</h2>
            <p className="text-gray-700 text-5xl font-bold">collections</p>
            <p className="text-gray-700 text-5xl font-bold">for everyone</p>
            <div className="flex items-center gap-5 mt-8">
              <p className="text-gray-500 text-2xl font-semibold">New</p>
              <img src={hand_icon} alt="hand" className="w-26" />
            </div>
            <button className="mt-8 flex justify-center items-center gap-3.5 w-45 h-12 rounded-full bg-blue-600 text-white text-xl font-medium">
              Shop now
            </button>
        </div>
      </div>

  );
};

export default Slide2;

