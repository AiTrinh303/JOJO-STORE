import all_product from "../../assets/all_product";

const getDefaultValue = () => {
    let cart = {};
    for (let index = 0; index < all_product.length; index++) {
        cart[all_product[index].id] = 0; // Use product ID as the key
    }
    return cart;
};

export const initialState = {
    cartItems: getDefaultValue(),
    wishlist:getDefaultValue()
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
            const newQuantity = Math.max(0, state.cartItems[action.payload.itemId] - 1); // Prevent negative quantities
            return {
                ...state,
                cartItems: {
                    ...state.cartItems,
                    [action.payload.itemId]: newQuantity
                }
            };
        case "RESET_CART":
            return {
                ...state,
                cartItems: getDefaultValue()
            };
        case "ADD_TO_WISHLIST":
            if (state.wishlist.includes(action.payload.itemId)) {
                return state; // Prevent adding duplicates
            }
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
