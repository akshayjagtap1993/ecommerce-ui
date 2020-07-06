let initialState = {
	products: [],
	cartProducts: [],
	orders: [],
}

let productReducer = (state = initialState, action) => {
	switch(action.type) {
		case "ALL_PRODUCTS":
			return Object.assign({}, state, {products: action.data});
		case "ADD_PRODUCT":
			return Object.assign({}, state, {products: state.products.concat(action.data)});
		case "CART_PRODUCTS":
			return Object.assign({}, state, {cartProducts: action.data});
		case "ORDERS":
			return Object.assign({}, state, {orders: action.data});
		default:
			return state;
	}
}

export default productReducer;
