import React from "react";
import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { connect } from "react-redux";
import { toggleCart } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";

const CartIcon = ({toggleCart, itemCount}) => (
    <div className="cart-icon" onClick={toggleCart}>
        <ShoppingIcon className="shopping-icon"/>
        <span className="item-count">{itemCount}</span>

    </div>
)

const mapDispatch = dispatch => ({
    toggleCart: () => dispatch(toggleCart())
});

const mapState = createStructuredSelector({
    itemCount: selectCartItemsCount
})

export default connect(mapState, mapDispatch)(CartIcon);
