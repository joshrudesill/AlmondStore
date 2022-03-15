import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { ReactComponent as Logo} from '../../assets/binoculars.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import Cart from '../cart/cart.component';
import { auth } from '../../firebase/firebase.utils';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';
import './header.styles.scss';

const Header = ({ currentUser, showCart }) => (
    <div className='header'>
        <Link to='/' className='logo-container'>
            <Logo className='logo' width={50} height={50} viewBox='0 0 16 16'/>
        </Link>
            <div className='options'>
                <Link className='option' to='/shop'>Shop</Link>
                <Link className='option' to='/contact'>Contact</Link>
                {
                    currentUser ? 
                    <div className='option' onClick={() => auth.signOut()}>Sign Out</div> 
                    :
                    <Link className='option' to='/signin'>Sign In</Link> 
                }
                
                <CartIcon/>
            </div>
            {
                showCart ?
                <Cart />
                :
                null
            }

    </div>
)

const mapState = createStructuredSelector({
    currentUser: selectCurrentUser,
    showCart: selectCartHidden
})


export default connect(mapState)(Header);