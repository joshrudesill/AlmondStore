import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import './checkout.styles.scss';
import StripeCheckoutButton from '../../components/stripe-button/stripe-buttom.component';

const CheckoutPage = ({cartItems, total}) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(item => 
                <CheckoutItem cartItem={item} key={item.id}/>
            )
        }
        <div className='total'>
            <span>Total: ${total}</span>
        </div>
        <StripeCheckoutButton price={total} />
    </div>
);

const mapStateToProps = () => createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})



export default connect(mapStateToProps, null)(CheckoutPage);
