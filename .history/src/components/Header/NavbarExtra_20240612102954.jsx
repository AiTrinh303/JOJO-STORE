import CloseIcon from '@mui/icons-material/Close';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { useState } from 'react';

const NavbarExtra = () => {
  const [showSale, setShowSale] = useState(true);

  return (
    <div data-aos="fade-down" className="navbar h-12">
      {showSale ? (
        <div className="wrapper py-2 px-4 md:px-10 flex items-center justify-center items-center gap-5 bg-red-600 text-black-600 text-xs md:text-sm">
          <div>
            <p>Summer Extra 10% Sale: code <strong>JOJOSALE</strong></p>
          </div>
          <div>
            <CloseIcon onClick={() => setShowSale(false)} className="text-black-700 hover:text-black-900"/>
          </div>
        </div>
      ) : (
        <div className="wrapper py-2 px-4 md:px-10 flex flex-col md:flex-row items-center justify-between bg-gray-200 text-gray-500 text-xs md:text-sm">
          <div className="my-1 md:my-0">
            <p>Help and Contact</p>
          </div>
          <div className="my-1 md:my-0">
            <p><LocalShippingIcon /Free standard delivery over €50 & free return*</p>
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