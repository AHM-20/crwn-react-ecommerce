import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';
import { selcetCartItems } from '../../redux/cart/cart.selectors';

const CartDropdown = ({ cartItems }) => (
	<div className="cart-dropdown">
		<div className="cart-items">{cartItems.map((cartItem) => <CartItem key={cartItem.id} item={cartItem} />)}</div>
		<CustomButton>GO TO CHECKOUT</CustomButton>
	</div>
);

const mapStateToProps = (state) => ({
	cartItems: selcetCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);
