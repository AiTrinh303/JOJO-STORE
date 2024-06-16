import React from 'react';

const Slide3 = ({ image }) => {
  return (
    <div className="w-full flex-shrink-0 relative">
      <img src={image} alt="" className="object-cover w-full h-full" />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-5">
        <h2 className="text-4xl font-bold">Even more than you expect</h2>
        <p className="mt-4 text-center">
          Fashion, Beauty, Sportwear,
          <br /> Accessories, and more ...
        </p>
      </div>
    </div>
  );
};

export default Slide3;
