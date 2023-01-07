import { CartActionTypes } from "../constants/cartAction_types";

const initialState = {
    cartItems: []
}
export const CartReducer = (state = initialState, { type, payload }) => {
    let index = null;
    switch (type) {
        case CartActionTypes.ADDED_TO_CART:
            index = state.cartItems.findIndex(item => item.id === payload.id);
            if (state.cartItems.length) {
                const existedItem = state.cartItems.find(item => item.id === payload.id)
                if (existedItem != undefined) {
                    state.cartItems[index]['quantity'] += payload.quantity;
                    return { ...state, cartItems: [...state.cartItems] }
                }
                else {
                    return { ...state, cartItems: [...state.cartItems, { ...payload }] }
                }
            }
            else {
                return { ...state, cartItems: [{ ...payload }] }
            }
        case CartActionTypes.REMOVE_FROM_CART:
            index = state.cartItems.findIndex(item => item.id === payload.id);
            state.cartItems[index].quantity -= 1;
            const CartItems = state.cartItems.filter(item => item.quantity > 0);
            return { ...state, cartItems: [...CartItems] }
        case CartActionTypes.DELETE_FROM_CART:
            let data = state.cartItems.filter(item => item.id != payload.id)
            return { ...state, cartItems: [...data] }
        default:
            return state;
    }
}