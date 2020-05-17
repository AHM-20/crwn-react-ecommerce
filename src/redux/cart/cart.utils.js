export const addItemTOCart = (cartItems, cartItemToAdd) => {
	const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToAdd.id);

	// if the item is in the cart we increase the quantity
	if (existingCartItem) {
		return cartItems.map(
			(cartItem) =>
				cartItem.id === cartItemToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
		);
	}

	// if its a new item we add a initilise the quantity as 1
	return [ ...cartItems, { ...cartItemToAdd, quantity: 1 } ];
};
