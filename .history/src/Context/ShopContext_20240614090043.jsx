// 

import { createContext, useReducer, useState } from "react";
import all_product from '../assets/all_product';
import { shopReducer, initialState } from "./Reducer/shopReducer";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    const [state, dispatch] = useReducer(shopReducer, initialState);
    const [discount, setDiscount] = useState(0);
    const [promoCode, setPromoCode] = useState('');

    const saleCodes = [
        { sale: 'SUMMER', discount: 0.1 },
        { sale: 'WINTER', discount: 0.2 },
        { sale: 'SPRING', discount: 0.15 }
    ];

    const addToCart = (itemId, quantity = 1) => {
        dispatch({ type: "ADD_TO_CART", payload: { itemId, quantity } });
    };

    const removeFromCart = (itemId) => {
        dispatch({ type: "REMOVE_FROM_CART", payload: { itemId } });
    };

    const resetCart = () => {
        dispatch({ type: "RESET_CART" });
    };

    const addToWishlist = (itemId) => {
        dispatch({ type: "ADD_TO_WISHLIST", payload: { itemId } });
    };

    const removeFromWishlist = (itemId) => {
        dispatch({ type: "REMOVE_FROM_WISHLIST", payload: itemId });
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in state.cartItems) {
            if (state.cartItems[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item));
                if (itemInfo) {
                    totalAmount += itemInfo.new_price * state.cartItems[item];
                }
            }
        }
        return totalAmount;
    };

    const getDiscountedTotal = () => {
        const totalAmount = getTotalCartAmount();
        return totalAmount - (totalAmount * discount);
    };

    const applyPromoCode = (code) => {
        const foundCode = saleCodes.find(saleCode => saleCode.sale === code.toUpperCase());
        if (foundCode) {
            setDiscount(foundCode.discount);
            setPromoCode(code);
        } else {
            setDiscount(0);
            setPromoCode('');
            alert('Invalid promo code');
        }
    };

    const contextValue = {
        all_product,
        cartItems: state.cartItems,
        wishlist: state.wishlist,
        addToCart,
        removeFromCart,
        resetCart,
        getTotalCartAmount,
        getDiscountedTotal,
        applyPromoCode,
        addToWishlist,
        removeFromWishlist,
        discount,
        promoCode
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
