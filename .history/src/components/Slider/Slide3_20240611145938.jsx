import React from 'react';

const Slide3 = ({ image }) => {
  return (
    <div className="w-full flex-shrink-0 relative">
      <img src={image} alt="" className="object-cover w-full h-full" />
      <div className="slide3 absolute justify-end right-20 top-50 text-gray-700 font-bold text-start bg-transparent py-5 px-10 rounded-2xl">
        <h2 className="text-2xl font-semibold text-gray-500">Even more than you expect</h2>
        <p className="mt-8 text-lg font-medium">
        Fashion, Beauty, Sportwear,
        <br/>
        <br/>
        Accessories, and more ...
        </p>
        
  </div> 
    </div>
  );
};

export default Slide3;
