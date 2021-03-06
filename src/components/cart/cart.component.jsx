import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { toggleCart } from '../../redux/cart/cart.actions';
import './cart.styles.scss';

const Cart = ({ cartItems, history, dispatch }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.length ?
                cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem}/>))
                : 
                <span className="empty-message"> 
                    Your cart is empty
                </span>
            }
        </div>
        <CustomButton onClick={
            () => {
                history.push('/checkout');
                dispatch(toggleCart());
            }
            }>Go to Checkout</CustomButton>
        
    </div>
)

const mapState = createStructuredSelector ({
    cartItems: selectCartItems
});

export default withRouter(connect(mapState)(Cart));