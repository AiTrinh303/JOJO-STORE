import { useState, useContext, useRef, useEffect } from 'react';
import { ShopContext } from '../Context/ShopContext';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Card from '../../components/Card';


const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  const [visibleCount, setVisibleCount] = useState(12);
  const [sortOrder, setSortOrder] = useState('default');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const loadMore = () => {
    setVisibleCount(prevCount => prevCount + 12);
  };

  const handleSort = (order) => {
    setSortOrder(order);
    setDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(prevState => !prevState);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const filteredProducts = all_product
    .filter(item => item.category === props.category)
    .sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.new_price - b.new_price;
      } else if (sortOrder === 'desc') {
        return b.new_price - a.new_price;
      }
      return 0;
    });

  return (
    <div className="shop-category">
      <img
        className="block my-8 mx-auto w-[82%] md:w-[90%] md:my-5"
        src={props.banner}
        alt="banner"
      />

      <div className="flex justify-between mx-[170px] md:mx-auto md:w-[90%] items-center">
        <p className="text-sm md:text-xs">
          <span className="font-semibold">Showing 1-{Math.min(visibleCount, filteredProducts.length)}</span> out of {filteredProducts.length} products
        </p>
        <div className="relative p-2.5 rounded-full border border-gray-500 cursor-pointer" ref={dropdownRef}>
          <div onClick={toggleDropdown} className="flex items-center">
            Sort by <ArrowDropDownIcon />
          </div>
          {dropdownOpen && (
            <div className="absolute top-full left-0 bg-white border border-gray-500 rounded-md w-full shadow-md z-10">
              <span
                onClick={() => handleSort('asc')}
                className="block p-2.5 text-sm transition-colors duration-300 cursor-pointer hover:bg-gray-200"
              >
                Price: Low to High
              </span>
              <span
                onClick={() => handleSort('desc')}
                className="block p-2.5 text-sm transition-colors duration-300 cursor-pointer hover:bg-gray-200"
              >
                Price: High to Low
              </span>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-4 gap-y-20 mx-[170px] md:mx-auto md:w-[90%] md:gap-y-10">
        {filteredProducts.slice(0, visibleCount).map((item, i) => (
          <Card
            key={i}
            id={item.id}
            title={item.title}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>

      {visibleCount < filteredProducts.length && (
        <div
          className="flex justify-center items-center my-36 mx-auto w-[233px] h-[69px] rounded-full bg-gray-200 text-gray-600 text-lg font-medium cursor-pointer md:my-24 md:w-[200px] md:h-[60px] md:text-base"
          onClick={loadMore}
        >
          Explore More
        </div>
      )}
    </div>
  );
}

export default ShopCategory;
