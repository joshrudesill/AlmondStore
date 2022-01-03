import React from "react";
import CustomButton from "../custom-button/custom-button.component";

import './cart.styles.scss';

const Cart = () => (
    <div className="cart-dropdown">
        <div className="cart-items"/>
            <CustomButton>Go to Checkout</CustomButton>
        
    </div>
)

export default Cart;