// import { useState, useContext } from "react";
// import { Link } from "react-router-dom";

// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import SearchIcon from "@mui/icons-material/Search";
// import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
// import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
// import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
// import { ShopContext } from '../../Context/ShopContext';
// import Cart from "../Cart";
// import DarkMode from "./DarkMode";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);
//   const { getTotalCartItems } = useContext(ShopContext);
//   const [currency, setCurrency] = useState('USD');
//   const [flag, setFlag] = useState('src/assets/en.png');

//   const handleToggle = (type) => {
//     if (type === 'currency') {
//       setCurrency(currency === 'USD' ? 'EUR' : 'USD');
//     } else if (type === 'flag') {
//       setFlag(flag === 'src/assets/en.png' ? 'src/assets/de.png' : 'src/assets/en.png');
//     }
//   };

//   return (
//     <div data-aos="zoom-in" className="navbar h-20">
//       <div className="wrapper py-2 px-8 flex items-center justify-between">
//         {/* Left section */}
//         <div className="left flex items-center gap-6">
//           {/* Flag */}
//           <div className="item flex items-center text-lg cursor-pointer" onClick={() => handleToggle('flag')}>
//             <img src={flag} alt="flag_icon" className="w-6 h-4" />
//             <KeyboardArrowDownIcon />
//           </div>
//           {/* Currency */}
//           <div className="item flex items-center text-lg cursor-pointer" onClick={() => handleToggle('currency')}>
//             <span>{currency}</span>
//             <KeyboardArrowDownIcon />
//           </div>
//           {/* Categories */}
//           {['women', 'men', 'kids'].map((category) => (
//             <div className="item" key={category}>
//               <Link className="link category text-xl hover:text-blue-500" to={`/${category}`}>{category.charAt(0).toUpperCase() + category.slice(1)}</Link>
//             </div>
//           ))}
//         </div>

//         {/* Center section */}
//         <div className="center text-3xl tracking-wide">
//           <Link className="link" to="/">
//           <h1 className="text-blue-500 font-bold text-3xl md:text-4xl lg:text-5xl flex items-center">
//             <span className="p-1 bg-gradient-to-r from-green-400 via-blue-700 to-red-400 bg-clip-text text-transparent">JO</span>
//             <span className="p-1 bg-gradient-to-r from-green-400 via-blue-700 to-red-400 bg-clip-text text-transparent">JO</span>
//             <span className="p-1">STORE</span>
//           </h1>
//           </Link>
//         </div>

//         {/* Right section */}
//         <div className="right flex items-center gap-6">
//           <div className="icons flex items-center gap-4 text-gray-500 cursor-pointer">
//             {/* Search */}
//             <div className="flex justify-between items-center gap-4">
//               <div className="relative group hidden sm:block">
//               <Link to="/filtered-products">
//                 <input
//                   type="text"
//                   placeholder="Search"
//                   aria-label="Search"
//                   className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800"
//                 />
//                 </Link>
//                 <SearchIcon className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
//               </div>
//             </div>
//             {/* Login */}
//             <Link to="/login">
//               <PersonOutlineOutlinedIcon />
//             </Link>
//             {/* Wishlist */}
//             <Link to="/wishlists">
//               <FavoriteBorderOutlinedIcon className="wishlistIcon hover:text-blue-500" />
//             </Link>
//             {/* Cart */}
//             <div className="relative" onClick={() => setOpen(!open)}>
//               <ShoppingCartOutlinedIcon />
//               <span className="absolute top-[-10px] right-[-10px] text-xs w-5 h-5 rounded-full bg-blue-500 text-white flex items-center justify-center">
//                 {getTotalCartItems()}
//               </span>
//           </div>
//             {/* Dark Mode */}
//             <div>
//               <DarkMode/>
//             </div>
//           </div>
//         </div>
//       </div>
//       {open && <Cart />}
//     </div>
//   );
// };

// export default Navbar;

import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { AuthContext } from "../../Context/AuthContext"; // Import AuthContext
import { ShopContext } from "../../Context/ShopContext";
import Cart from "../Cart";
import DarkMode from "./DarkMode";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user:userProfile, logout } = useContext(AuthContext); 
  const [currency, setCurrency] = useState("USD");
  const [flag, setFlag] = useState("src/assets/en.png");
  const { getTotalCartItems } = useContext(ShopContext);

  const handleToggle = (type) => {
    if (type === "currency") {
      setCurrency(currency === "USD" ? "EUR" : "USD");
    } else if (type === "flag") {
      setFlag(flag === "src/assets/en.png" ? "src/assets/de.png" : "src/assets/en.png");
    }
  };

  const handleLogout = () => {
    logout(); 
  };

  return (
    <div data-aos="zoom-in" className="navbar h-20">
      <div className="wrapper py-2 px-8 flex items-center justify-between">
        {/* Left section */}
        <div className="left flex items-center gap-6">
          {/* Flag */}
          <div className="item flex items-center text-lg cursor-pointer" onClick={() => handleToggle("flag")}>
            <img src={flag} alt="flag_icon" className="w-6 h-4" />
            <KeyboardArrowDownIcon />
          </div>
          {/* Currency */}
          <div className="item flex items-center text-lg cursor-pointer" onClick={() => handleToggle("currency")}>
            <span>{currency}</span>
            <KeyboardArrowDownIcon />
          </div>
          {/* Categories */}
          {["women", "men", "kids"].map((category) => (
            <div className="item" key={category}>
              <Link className="link category text-xl hover:text-blue-500" to={`/${category}`}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Link>
            </div>
          ))}
        </div>

        {/* Center section */}
        <div className="center text-3xl tracking-wide">
          <Link className="link" to="/">
            <h1 className="text-blue-500 font-bold text-3xl md:text-4xl lg:text-5xl flex items-center">
              <span className="p-1 bg-gradient-to-r from-green-400 via-blue-700 to-red-400 bg-clip-text text-transparent">JO</span>
              <span className="p-1 bg-gradient-to-r from-green-400 via-blue-700 to-red-400 bg-clip-text text-transparent">JO</span>
              <span className="p-1">STORE</span>
            </h1>
          </Link>
        </div>

        {/* Right section */}
        <div className="right flex items-center gap-6">
          <div className="icons flex items-center gap-4 text-gray-500 cursor-pointer">
            {/* Search */}
            <div className="flex justify-between items-center gap-4">
              <div className="relative group hidden sm:block">
                <Link to="/filtered-products">
                  <input
                    type="text"
                    placeholder="Search"
                    aria-label="Search"
                    className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800"
                  />
                </Link>
                <SearchIcon className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
              </div>
            </div>
            {/* User actions */}
            {userProfile ? (
              // If user is logged in, show avatar and logout option
              <div className="flex items-center gap-4">
                <Link className="relative">
                  <img src={userProfile.avatar} alt="User Avatar" className="rounded-full w-8 h-8" />
                </Link>
                {/* <span className="cursor-pointer" onClick={handleLogout}>
                  Logout
                </span> */}
              </div>
            ) : (
              // If user is not logged in, show login link
              <Link to="/login">
                <PersonOutlineOutlinedIcon />
              </Link>
            )}
            {/* Wishlist */}
            <Link to="/wishlists">
              <FavoriteBorderOutlinedIcon className="wishlistIcon hover:text-blue-500" />
            </Link>
            {/* Cart */}
            <div className="relative" onClick={() => setOpen(!open)}>
              <ShoppingCartOutlinedIcon />
              <span className="absolute top-[-10px] right-[-10px] text-xs w-5 h-5 rounded-full bg-blue-500 text-white flex items-center justify-center">
                {getTotalCartItems()}
              </span>
            </div>
            {/* Dark Mode */}
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
