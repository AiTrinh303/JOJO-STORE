
// import all_product from "../../assets/all_product";

// const getDefaultValue = () => {
//     let cart = {};
//     for (let index = 0; index < all_product.length; index++) {
//         cart[index] = 0;
//     }
//     return cart;
// };

// export const initialState = {
//     cartItems: getDefaultValue(),
//     wishlist: []
// };

// export const shopReducer = (state, action) => {
//     switch (action.type) {
//         case "ADD_TO_CART":
//             return {
//                 ...state,
//                 cartItems: {
//                     ...state.cartItems,
//                     [action.payload.itemId]: (state.cartItems[action.payload.itemId] || 0) + action.payload.quantity
//                 }
//             };
//         case "REMOVE_FROM_CART":
//             return {
//                 ...state,
//                 cartItems: {
//                     ...state.cartItems,
//                     [action.payload.itemId]: state.cartItems[action.payload.itemId] - 1
//                 }
//             };
//         case "RESET_CART":
//             return {
//                 ...state,
//                 cartItems: getDefaultValue()
//             };
//         case "ADD_TO_WIS                    [action.payload.itemId]: (state.cartItems[action.payload.itemId] || 0) + action.payload.quantity
//                 }
//             };
//         case "REMOVE_FROM_CART":
//             return {
//                 ...state,
//                 cartItems: {
//                     ...state.cartItems,
//                     [action.payload.itemId]: state.cartItems[action.payload.itemId] - 1
//                 }
//             };
//         case "RESET_CART":
//             return {
//                 ...state,
//                 cartItems: getDefaultValue()
//             };
//         case "ADD_TO_WISHLIST":
//             return {
//                 ...state,
//                 wishlist: [...state.wishlist, action.payload.itemId]
//             };
//         case "REMOVE_FROM_WISHLIST":
//             const newWishlist = [...state.wishlist];
//             newWishlist.splice(newWishlist.indexOf(action.payload.itemId), 1)}
//             return {
//                 ...state,
//                 wishlist: newWishlist};

//         default:
//             return state;
//     }
// };


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
                    [action.payload.itemId]: Math.max(0, state.cartItems[action.payload.itemId] - 1) // Prevent negative quantities
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
                return {
                        ...state,
                        wishlist: state.wishlist.filter((itemId) => itemId !== action.payload.itemId)
                    };
                
        default:
            return state;
    }
};
