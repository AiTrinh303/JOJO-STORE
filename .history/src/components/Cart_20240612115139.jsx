import { useContext } from 'react';
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useNavigate } from "react-router-dom";
import { ShopContext } from '../Context/ShopContext';

const Cart = () => {
  const navigate = useNavigate();
  const { all_product, cartItems, removeFromCart, resetCart, getTotalCartAmount } = useContext(ShopContext);

  const handleCheckout = () => {
    navigate('/cartpage');
    window.scrollTo(0, 0);
  };

  return (
    <div className="absolute -top-20 z-50 bg-white p-5 shadow-lg">
      <h1 className="mb-7 text-gray-500 font-normal text-xl">Products in your cart</h1>
      {all_product.map((item) => {
        if (cartItems[item.id] > 0) {
          return (
            <div className="item flex items-center gap-5 mb-7" key={item.id}>
              <img src={item.image} alt="" className="w-20 h-24 object-cover" />
              <div className="details">
                <h1 className="text-lg font-medium">{item.title}</h1>
                <p className="text-gray-500 mb-2 text-sm">
                  {item.desc?.substring(0, 100)}
                </p>
                <div className="price text-blue-500">
                  {cartItems[item.id]} x ${item.new_price}
                </div>
              </div>
              <DeleteOutlinedIcon
                className="delete text-red-500 text-2xl cursor-pointer"
                onClick={() => removeFromCart(item.id)}
              />
            </div>
          );
        }
        return null;
      })}
      <div className="total flex justify-between font-medium text-lg mb-5">
        <span>SUBTOTAL</span>
        <span>${getTotalCartAmount()}</span>
      </div>
      <button
        className="w-62 py-2 flex items-center justify-center gap-5 cursor-pointer border-none bg-blue-500 text-white font-medium mb-5"
        onClick={handleCheckout}
      >
        PROCEED TO CHECKOUT
      </button>
      <span
        className="reset text-red-500 text-xs cursor-pointer"
        onClick={resetCart}
      >
        Reset Cart
      </span>
    </div>
  );
};

export default Cart;
