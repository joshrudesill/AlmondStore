import { CartActionTypes } from "./cart.types";

export const toggleCart = () => ({
    type: CartActionTypes.TOGGLE_CART,
});

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
});

export const clearItemFromCart = item => ({
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
});