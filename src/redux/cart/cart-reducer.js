import { CartActionTypes } from "./cart.types";

const INITIAL_STATE = {
    showCart: false
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART:
            return {
                ...state,
                showCart: !state.showCart
            }
        default:
            return state;
    }
}

export default cartReducer;