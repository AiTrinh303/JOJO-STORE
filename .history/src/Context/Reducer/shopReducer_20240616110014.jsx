
import all_product from "../../assets/all_product";

const getDefaultValue = () => {
    let cart = {};
    for (let index = 0; index < all_product.length; index++) {
        cart[index] = 0;
    }
    return cart;
};

export const initialState = {
    cartItems: getDefaultValue(),
    wishlist: []
};

export const shopReducer = (state, action) => {
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
                    [action.payload.itemId]: Math.max(0, state.cartItems[action.payload.itemId] - 1) 
                }
            };
        case "RESET_CART":
            return {
                ...state,
                cartItems: getDefaultValue()
            };
        case "ADD_TO_WISHLIST":
            if (!state.wishlist.includes(action.payload.itemId)) {
                return {
                    ...state,
                    wishlist: [...state.wishlist, action.payload.itemId]
                };
            }
            return state;
        case "REMOVE_FROM_WISHLIST":
            newWishlist = [...state.wishlist];
                return {
                    ...state,
                    wishlist: state.newishlist.filter((item) => item.itemId !== action.payload.itemId)
                };
                
        default:
            return state;
    }
};
