import { createSelector } from 'reselect';

const selcetCart = (state) => state.cart;

export const selcetCartItems = createSelector([ selcetCart ], (cart) => cart.cartItems);

export const selectCartItemsCount = createSelector(
	//total of all items quantity
	[ selcetCartItems ],
	(cartItems) => cartItems.reduce((accumalated, cartItem) => accumalated + cartItem.quantity, 0)
);
