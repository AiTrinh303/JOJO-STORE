import { createContext, useReducer, useMemo } from "react";
import all_product from '../assets/all_product';
import { shopReducer, initialState } from "./Reducer/shopReducer";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    const [state, dispatch] = useReducer(shopReducer, initialState);

    const addToCart = (itemId, quantity = 1) => {
        if (all_product.some(product => product.id === itemId)) {
            dispatch({ type: "ADD_TO_CART", payload: { itemId, quantity } });
        } else {
            console.error(`Item with id ${itemId} does not exist.`);
        }
    };

    const removeFromCart = (itemId) => {
        if (all_product.some(product => product.id === itemId)) {
            dispatch({ type: "REMOVE_FROM_CART", payload: { itemId } });
        } else {
            console.error(`Item with id ${itemId} does not exist.`);
        }
    };

    const resetCart = () => {
        dispatch({ type: "RESET_CART" });
    };

    const addToWishlist = (itemId) => {
        if (all_product.some(product => product.id === itemId)) {
            dispatch({ type: "ADD_TO_WISHLIST", payload: { itemId } });
        } else {
            console.error(`Item with id ${itemId} does not exist.`);
        }
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

    const contextValue = useMemo(() => ({
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
    }), [state]);

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
