import React from 'react';

const Slide3 = ({ image }) => {
  return (
    <div className="w-full flex-shrink-0 relative">
      <img src={image} alt="" className="object-cover w-full h-full" />
      <div className="slide2 absolute justify-end right-8 top-48 text-gray-700 font-bold text-start bg-transparent py-5 px-10 rounded-2xl">
    <h2 className="text-2xl font-semibold">Even more than you expect</h2>
    <p className="mt-8 text-lg font-medium">
      Fashion, Beauty, Sportwear,
        Accessories, and more ...
    </p>
  </div> 
    </div>
  );
};

export default Slide3;
