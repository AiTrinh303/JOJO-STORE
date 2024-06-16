import { useState, useContext } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import { ShopContext } from '../Context/ShopContext';
import DarkMode from "./DarkMode";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { getTotalCartItems } = useContext(ShopContext);
  const [currency, setCurrency] = useState('USD');
  const [flag, setFlag] = useState('/img/en.png');

  const handleCurrencyChange = () => {
    setCurrency(currency === 'USD' ? 'EUR' : 'USD'); 
  };

  const handleFlagChange = () => {
    setFlag(flag === 'src/assets/en.png' ? 'src/assets/de.png' : 'src/assets/en.png');
  };

  return (
    <div className="navbar h-20">
      <div className="wrapper py-2 px-8 flex items-center justify-between">
    {/* Left sign */}
        <div className="left flex items-center gap-6">
          <div className="item flex items-center text-lg cursor-pointer" onClick={handleFlagChange}>
            <img src={flag} alt="flag_icon" className="w-6 h-4" />
            <KeyboardArrowDownIcon />
          </div>
          <div className="item flex items-center text-lg cursor-pointer" onClick={handleCurrencyChange}>
            <span>{currency}</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <Link className="link category hover:text-blue-500" to="/women">Women</Link>
          </div>
          <div className="item">
            <Link className="link category hover:text-blue-500" to="/men">Men</Link>
          </div>
          <div className="item">
            <Link className="link category hover:text-blue-500" to="/kids">Kids</Link>
          </div>
        </div>

    {/* Center */}
        <div className="center text-3xl tracking-wide">
          <Link className="link" to="/">
            <h1 className="text-blue-500 font-bold">JOJOSTORE</h1>
          </Link>
        </div>

        <div className="right flex items-center gap-6">
          <div className="icons flex items-center gap-4 text-gray-500 cursor-pointer">
          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800  "
              />
              <SearchIcon className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>
            </div>  
           
            <Link to="/loginsignup">
              <PersonOutlineOutlinedIcon />
            </Link>
            <Link to="/wishlists">
              <FavoriteBorderOutlinedIcon className="wishlistIcon hover:text-blue-500" />
            </Link>
            <div className="cartIcon relative" onClick={() => setOpen(!open)}>
              <ShoppingCartOutlinedIcon />
              <span className="absolute top-[-0.5rem] right-[-0.5rem] bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">{getTotalCartItems()}</span>
            </div>
            {/* Darkmode Switch */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
};

export default Navbar;
