// import { useContext } from 'react';
// import './CartPage.css';
// import { ShopContext } from '../../Context/ShopContext';
// import ClearIcon from '@mui/icons-material/Clear';

// const CartPage = () => {

//     const { all_product, cartItems, removeFromCart, getTotalCartAmount, addToCart } = useContext(ShopContext);

//     return (
//         <div className='cart-items'>
//             <div className="cart-items-format-main">
//                 <p>Products</p>
//                 <p>Title</p>
//                 <p>Size</p>
//                 <p>Price</p>
//                 <p>Quantity</p>
//                 <p>Total</p>
//                 <p>Remove</p>
//             </div>

//             <hr />

//             {all_product.map((product) => {
//                 if (cartItems[product.id] > 0) {
//                     return (
//                         <div key={product.id}>
//                             <div className="cart-items-format-main cart-items-format">
//                                 <img src={product.image} alt={product.title} className='cart-icon-product-icon' />
//                                 <p>{product.title}</p>
//                                 <p>{product.size}</p>
//                                 <p>${product.new_price.toFixed(2)}</p>
//                                 <div className='cart-items-quantity-controls'>
//                                     <button onClick={() => addToCart(product.id)}>+</button>
//                                     <button className='cart-items-quantity'>{cartItems[product.id]}</button>
//                                     <button onClick={() => removeFromCart(product.id)}>-</button>
//                                 </div>
//                                 <p>${(product.new_price * cartItems[product.id]).toFixed(2)}</p>
//                                 <div className='cart-items-remove-icon' onClick={() => removeFromCart(product.id)}>
//                                     <ClearIcon />
//                                 </div>
//                             </div>
//                             <hr />
//                         </div>
//                     );
//                 }
//                 return null;
//             })}

//             <div className="cart-items-down">
//                 <div className="cart-items-total">
//                     <h1>Cart Totals</h1>
//                     <div>
//                         <div className="cart-items-total-item">
//                             <p>Subtotal</p>
//                             <p>${getTotalCartAmount().toFixed(2)}</p>
//                         </div>
//                         <hr />
//                         <div className="cart-items-total-item">
//                             <p>Shipping Fee</p>
//                             <p>Free</p>
//                         </div>
//                         <hr />
//                         <div className="cart-items-total-item">
//                             <h3>Total</h3>
//                             <h3>${getTotalCartAmount().toFixed(2)}</h3>
//                         </div>
//                     </div>
//                     <button>PROCEED TO CHECKOUT</button>
//                 </div>
//                 <div className="cart-items-promo-code">
//                     <p>If you have a promo code, Enter it here</p>
//                     <div className="cart-items-promo-box">
//                         <input type="text" placeholder='promo code' />
//                         <button>Submit</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default CartPage;
import { useContext, useState } from 'react';
import './CartPage.css';
import { ShopContext } from '../../Context/ShopContext';
import ClearIcon from '@mui/icons-material/Clear';

const CartPage = () => {
    const { all_product, cartItems, removeFromCart, getTotalCartAmount, addToCart } = useContext(ShopContext);

    const saleCodes = [
        { sale: 'JOJO10', discount: 0.1 },
        { sale: 'JOJO20', discount: 0.2 }, { sale: 'JOJO15', discount: 0.15 }];
    
    const [promoCode, setPromoCode] = useState('');
    const [discount, setDiscount] = useState(0);

    const handlePromoCodeSubmit = () => {
        const foundCode = saleCodes.find(code => code.sale === promoCode.toUpperCase());
        if (foundCode) {
            setDiscount(foundCode.discount);
        } else {
            setDiscount(0);
            alert('Invalid promo code');
        }
    };

    const totalAmount = getTotalCartAmount();
    const discountedTotal = totalAmount - (totalAmount * discount);

    return (
        <div className='cart-items'>
            <div className="cart-items-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Size</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>

            <hr />

            {all_product.map((product) => {
                if (cartItems[product.id] > 0) {
                    return (
                        <div key={product.id}>
                            <div className="cart-items-format-main cart-items-format">
                                <img src={product.image} alt={product.title} className='cart-icon-product-icon' />
                                <p>{product.title}</p>
                                <p>{product.size}</p>
                                <p>${product.new_price.toFixed(2)}</p>
                                <div className='cart-items-quantity-controls'>
                                    <button onClick={() => addToCart(product.id)}>+</button>
                                    <button className='cart-items-quantity'>{cartItems[product.id]}</button>
                                    <button onClick={() => removeFromCart(product.id)}>-</button>
                                </div>
                                <p>${(product.new_price * cartItems[product.id]).toFixed(2)}</p>
                                <div className='cart-items-remove-icon' onClick={() => removeFromCart(product.id)}>
                                    <ClearIcon />
                                </div>
                            </div>
                            <hr />
                        </div>
                    );
                }
                return null;
            })}

            <div className="cart-items-down">
                <div className="cart-items-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cart-items-total-item">
                            <p>Subtotal</p>
                            <p>${totalAmount.toFixed(2)}</p>
                        </div>
                        <hr />
                        <div className="cart-items-total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cart-items-total-item">
                            <h3>Total</h3>
                            <h3>${discountedTotal.toFixed(2)}</h3>
                        </div>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cart-items-promo-code">
                    <p>If you have a promo code, Enter it here</p>
                    <div className="cart-items-promo-box">
                        <input 
                            type="text" 
                            placeholder='promo code' 
                            value={promoCode} 
                            onChange={(e) => setPromoCode(e.target.value)} 
                        />
                        <button onClick={handlePromoCodeSubmit}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartPage;
