import React, { createContext, useReducer } from "react";
import all_product from '../assets/all_product';

export const ShopContext = createContext(null);

const getDefaultValue = () => {
    let cart = {};
    for (let index = 0; index < all_product.length; index++) {
        cart[index] = 0;
    }
    return cart;
};

const initialState = {
    cartItems: getDefaultValue(),
    wishlist: []
};

const shopReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cartItems: {
                    ...state.cartItems,
                    [action.payload.itemId]: (state.cartItems[action.payload.itemId] || 0) + action.payload.quantity
                }
            };
        case "REMOVE_FROM_CART":
            return {
                ...state,
                cartItems: {
                    ...state.cartItems,
                    [action.payload.itemId]: state.cartItems[action.payload.itemId] - 1
                }
            };
        case "RESET_CART":
            return {
                ...state,
                cartItems: getDefaultValue()
            };
        case "ADD_TO_WISHLIST":
            return {
                ...state,
                wishlist: [...state.wishlist, action.payload.itemId]
            };
        case "REMOVE_FROM_WISHLIST":
            return {
                ...state,
                wishlist: state.wishlist.filter(id => id !== action.payload.itemId)
            };
        default:
            return state;
    }
};

const ShopContextProvider = (props) => {
    const [state, dispatch] = useReducer(shopReducer, initialState);

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
        dispatch({ type: "REMOVE_FROM_WISHLIST", payload: { itemId } });
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

    const getTotalCartItems = () => {
        let totalItems = 0;
        for (const item in state.cartItems) {
            if (state.cartItems[item] > 0) {
                totalItems += state.cartItems[item];
            }
        }
        return totalItems;
    };

    const contextValue = {
        all_product,
        cartItems: state.cartItems,
        wishlist: state.wishlist,
        addToCart,
        removeFromCart,
        resetCart,
        getTotalCartAmount,
        getTotalCartItems,
        addToWishlist,
        removeFromWishlist
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
