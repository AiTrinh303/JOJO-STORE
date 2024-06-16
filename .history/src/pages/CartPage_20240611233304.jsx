import React, { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import ClearIcon from '@mui/icons-material/Clear';

const CartPage = () => {
    const { all_product, cartItems, removeFromCart, getTotalCartAmount, addToCart } = useContext(ShopContext);

    return (
        <div className='cart-items'>
            <div className="cart-items-format-main grid grid-cols-7 items-center gap-10 py-5 text-gray-700 font-semibold">
                <p>Products</p>
                <p>Title</p>
                <p>Size</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>

            <hr className="h-3 bg-gray-300" />

            {all_product.map((product) => {
                if (cartItems[product.id] > 0) {
                    return (
                        <div key={product.id}>
                            <div className="cart-items-format-main cart-items-format flex items-center gap-10 py-3 font-normal">
                                <img src={product.image} alt={product.title} className='cart-icon-product-icon h-16' />
                                <p>{product.title}</p>
                                <p>{product.size}</p>
                                <p>${product.new_price.toFixed(2)}</p>
                                <div className='cart-items-quantity-controls flex items-center'>
                                    <button onClick={() => addToCart(product.id)}>+</button>
                                    <button className='cart-items-quantity border border-gray-300 bg-white'>{cartItems[product.id]}</button>
                                    <button onClick={() => removeFromCart(product.id)}>-</button>
                                </div>
                                <p>${(product.new_price * cartItems[product.id]).toFixed(2)}</p>
                                <div className='cart-items-remove-icon cursor-pointer' onClick={() => removeFromCart(product.id)}>
                                    <ClearIcon />
                                </div>
                            </div>
                            <hr className="h-3 bg-gray-300" />
                        </div>
                    );
                }
                return null;
            })}

            <div className="cart-items-down flex">
                <div className="cart-items-total flex flex-col flex-1 mr-20 gap-10">
                    <h1 className="text-xl font-semibold">Cart Totals</h1>
                    <div>
                        <div className="cart-items-total-item flex justify-between">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount().toFixed(2)}</p>
                        </div>
                        <hr className="h-3 bg-gray-300" />
                        <div className="cart-items-total-item flex justify-between">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr className="h-3 bg-gray-300" />
                        <div className="cart-items-total-item flex justify-between">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount().toFixed(2)}</h3>
                        </div>
                    </div>
                    <button className="w-full py-3 bg-blue-500 text-white text-center text-lg font-semibold rounded-md hover:bg-blue-600">PROCEED TO CHECKOUT</button>
                </div>
                <div className="cart-items-promo-code flex flex-col flex-1">
                    <p className="text-base text-gray-700 mb-3">If you have a promo code, Enter it here</p>
                    <div className="cart-items-promo-box flex items-center bg-gray-200 rounded-md">
                        <input type="text" placeholder='promo code' className="bg-transparent outline-none text-gray-700 text-base w-60 px-4 py-2" />
                        <button className="bg-black text-white text-base font-semibold px-6 py-2 rounded-md hover:bg-gray-800 cursor-pointer">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartPage;
