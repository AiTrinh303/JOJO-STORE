import { useContext, useState } from 'react';
import star_icon from '../assets/star_icon.png';
import star_dull_icon from '../assets/star_dull_icon.png';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { ShopContext } from '../Context/ShopContext';

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart, addToWishlist } = useContext(ShopContext);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('');
  const [iconColor, setIconColor] = useState("#2879fe");

  const handleCheckout = () => {
    addToCart(product.id, quantity);
  };

  const handleFavoriteClick = (event) => {
    event.preventDefault();
    setIconColor("red");
    addToWishlist({
      id: product.id,
      image: product.image,
      title: product.title,
      new_price: product.new_price,
      old_price: product.old_price,
    });
  };

  return (
    <div className="flex mx-44 my-0">
      {/* left-images */}
      <div className="flex gap-4">
        <div className="flex flex-col gap-5">
          <img className="h-44 w-44 align-middle object-cover" src={product.image} alt="img1" />
          <img className="h-44 w-44 align-middle object-cover" src={product.image} alt="img2" />
          <img className="h-44 w-44 align-middle object-cover" src={product.image} alt="img3" />
          <img className="h-44 w-44 align-middle object-cover" src={product.image} alt="img4" />
        </div>
        <div className="img">
          <img style= {{height: '765px', width: '800px'}} className="object-cover" src={product.image} alt="img0" />
        </div>
      </div>

      {/* right-content */}
      <div className="ml-20 flex flex-col">
        <h1 className="text-[#3d3d3d] text-4xl font-bold">{product.title}</h1>

        <div className="flex items-center mt-3.5 gap-1 text-[#1c1c1c] text-lg">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>303</p>
        </div>

        <div className="flex my-10 gap-7.5 text-2xl font-bold">
          <div className="text-[#818181] line-through mr-5">${product.old_price}</div>
          <div className="text-[#ff4141]">${product.new_price}</div>
        </div>

        <div className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus laborum corrupti facere voluptates odit, cum expedita velit consequuntur eveniet voluptate libero soluta sapiente dolor ipsam architecto porro voluptatum est debitis!
        </div>

        <div className="mt-14">
          <h1 className="text-xl font-semibold mb-5">Select Size</h1>
          <div className="flex my-7.5 gap-5 mb-5">
            {['S', 'M', 'L', 'XL', 'XXL'].map(size => (
              <div
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-6 py-4 bg-gray-100 border border-[#ebebeb] rounded cursor-pointer ${selectedSize === size ? 'bg-gray-300 text-gray-800' : ''}`}
              >
                {size}
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2.5 mb-5">
          <button onClick={() => setQuantity(prev => (prev === 1 ? 1 : prev - 1))} className="w-11 h-7 flex items-center justify-center mb-5 cursor-pointer bg-gray-200"> - </button>
          <span className="w-8 h-8 flex items-center justify-center mb-5">{quantity}</span>
          <button onClick={() => setQuantity(prev => prev + 1)} className="w-11 h-7 flex items-center justify-center border-none mb-5 cursor-pointer bg-gray-200"> + </button>
        </div>

        <button className="px-7 py-4 w-52 text-lg font-semibold text-white bg-blue-500 my-3.5 border-none outline-none cursor-pointer
 hover:bg-blue-400" onClick={handleCheckout}>ADD TO CART</button>

        <div className="flex items-center text-xs mb-6 cursor-pointer" style={{ color: iconColor }} onClick={handleFavoriteClick}>
          <FavoriteBorderIcon />
          ADD TO WISH LIST
        </div>

        <p className="category">
          <span className="font-semibold">Category :</span> Women, T-shirt, Crop Top
        </p>
        <p className="category">
          <span className="font-semibold">Tags :</span> Modern, Latest, Trendy
        </p>
      </div>
    </div>
  );
}

export default ProductDisplay;
