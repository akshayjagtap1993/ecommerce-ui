import axios from 'axios';
import { baseUrl } from '../../../utils/appConst';
import { browserHistory } from 'react-router';
import FileDownload from 'js-file-download';

let productActions = {

	getAllProducts: () => {
		return (dispatch, getState) => {
			axios.get(baseUrl + "/api/products").then(response => {
				//console.log('response.data -> ' + JSON.stringify(response.data, null, 2));
				dispatch({
					type: "ALL_PRODUCTS",
					data: response.data.data
				});
			}).catch(err => {
				console.log(err);
				throw err;
			});
		}
	},

	getAllCartProducts: (userId) => {
		return (dispatch, getState) => {
			let request = {
			    method: 'get',
			    url: baseUrl + "/api/before-order",
			    params: {
			    	userId: userId,
			    	beforeOrderType: "cart"
			    }
			};
			axios(request).then(response => {
				//console.log('response.data -> ' + JSON.stringify(response.data, null, 2));
				dispatch({
					type: "CART_PRODUCTS",
					data: response.data
				});
			}).catch(err => {
				console.log(err);
				throw err;
			});
		}
	},

	addProduct: (product, image) => {
		return (dispatch, getState) => {
			
			let formData = new FormData();
			formData.append('file', image);
			formData.append('product', JSON.stringify(product));
			
			let request = {
			    method: 'post',
			    url: baseUrl + "/api/products",
			    data: formData,
			};

			axios(request)
		    .then(function (response) {
		        //console.log('product add response -> ' + JSON.stringify(response.data, null, 2));
		        if(response.data.data) {
					alert('Product added successfully');
					dispatch({
						type: "ADD_PRODUCT",
						data: response.data.data
					});
					browserHistory.push("/");
				}
				else {
					alert('Product failed to add.');
				}
		    })
		    .catch(function (err) {
		        console.log(err);
				throw err;
		    });
		}
	},

	addProductToCart(product) {
		return (dispatch, getState) => {
			let loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
			let request = {
			    method: 'post',
			    url: baseUrl + "/api/before-order",
			    data: {
			        "user": {
			            "userId": loggedUser.userId,
			        },
			        "product": {
			            "productId": product.productId
			        },
			        "beforeOrderType": "cart"
			    },
			};

			axios(request)
		    .then(function (response) {
		        //console.log('product add response -> ' + JSON.stringify(response.data, null, 2));
		        if(response.data) {
					alert('Product added to cart');
				}
				else {
					alert('Product failed to add.');
				}
		    })
		    .catch(function (err) {
		        console.log(err);
				throw err;
		    });
		}
	},

	deleteFromCart(beforeOrder) {
		return (dispatch, getState) => {
			let loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
		    axios.delete(baseUrl + "/api/before-order", {params: {beforeOrderId: beforeOrder.beforeOrderId}})
		    .then(function (response) {
		        dispatch(productActions.getAllCartProducts(loggedUser.userId));
		    })
		    .catch(function (err) {
		        console.log(err);
				throw err;
		    });
		}
	},

	getAllOrders: (userId) => {
		return (dispatch, getState) => {
			let request = {
			    method: 'get',
			    url: baseUrl + "/api/orders",
			    params: {
			    	userId: userId
			    }
			};
			axios(request).then(response => {
				dispatch({
					type: "ORDERS",
					data: response.data
				});
			}).catch(err => {
				console.log(err);
				throw err;
			});
		}
	},

	buyProduct(order) {
		return (dispatch, getState) => {
			let loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
			let request = {
			    method: 'post',
			    url: baseUrl + "/api/orders",
			    params: {
			    	userId: loggedUser.userId,
			    	productId: order.product.productId
			    }
			};
		    
		    axios(request)
		    .then(function (response) {
		        dispatch(productActions.getAllCartProducts(loggedUser.userId));
		        dispatch(productActions.deleteFromCart(order));
		        alert('Order recieved.');
		        browserHistory.push("/")
		    })
		    .catch(function (err) {
		        console.log(err);
				throw err;
		    });
		}
	},

	downloadOrderSummery(userId) {
		return (dispatch, getState) => {
			let request = {
			    method: 'get',
			    url: baseUrl + "/api/download-order-summery",
			    params: {
			    	userId: userId
			    },
			    responseType: 'blob'
			};
			axios(request).then(response => {
				console.log('API call to "/api/download-order-summery" successful');
				FileDownload(response.data, "order-summery.pdf");
			}).catch(err => {
				console.log(err);
				throw err;
			});
		}
	},

}

export default productActions;