import CloseIcon from '@mui/icons-material/Close';
import React, { useState } from 'react';

const NavbarExtra = () => {
  const [showSale, setShowSale] = useState(true);

  return (
    <div data-aos="fade-down" className="navbar h-12">
      {showSale ? (
        <div className="wrapper py-2 px-4 md:px-10 flex items-center justify-center bg-red-700 text-black-600 text-xs md:text-sm">
          <div className="flex-1">
            <p>Extra Sale: Use code <strong>JOJOSALE</strong></p>
          </div>
          <div>
            <CloseIcon /
            <button onClick={() => setShowSale(false)} className="text-red-700 hover:text-red-900">
              &times;
            </button>
          </div>
        </div>
      ) : (
        <div className="wrapper py-2 px-4 md:px-10 flex flex-col md:flex-row items-center justify-between bg-gray-200 text-gray-500 text-xs md:text-sm">
          <div className="my-1 md:my-0">
            <p>Help and Contact</p>
          </div>
          <div className="my-1 md:my-0">
            <p>Free standard delivery over €50 & free return*</p>
          </div>
          <div className="my-1 md:my-0">
            <p>100-day return policy</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavbarExtra;