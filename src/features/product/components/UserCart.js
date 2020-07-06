import React, { Component } from 'react';
import { connect } from 'react-redux';
import productActions from '../actions/productActions';
import { bindActionCreators } from 'redux';
import styles from '../../counter/Counter.module.css';

class UserCart extends Component {

	constructor(props) {
		super(props);
		this.setDefaultImage = this.setDefaultImage.bind(this);
		this.deleteFromCart = this.deleteFromCart.bind(this);
		this.buyProduct = this.buyProduct.bind(this);
	}

	setDefaultImage(event) {
		event.target.src = '/images/notavailable.png';
	}

	deleteFromCart(beforeOrder) {
		this.props.productActions.deleteFromCart(beforeOrder);
	}

	buyProduct(product) {
		if(window.confirm('Confirm order')){
			this.props.productActions.buyProduct(product);
		}
	}

	componentDidMount() {
		let loggedUser = localStorage.getItem('loggedUser');
		if(loggedUser) {
			loggedUser = JSON.parse(loggedUser);
		}
		this.props.productActions.getAllCartProducts(loggedUser.userId);
	}

	render() {
		let cartProducts = this.props.cartProducts || [];
		return (
			<div>
				{
					cartProducts.length === 0 ?
					<div>
						<h2>Cart is empty</h2><br/><br/>
					</div>
					:
				  <div className="container">
				  	{cartProducts.map((productDto, index) => {
				  		let product = productDto.product;
				  		return(
				  			<div className="row" key={product.productName + index}>
					  			<div className="row">
						  			<div className="col-md-4">
											<img src={"data:image/jpeg;base64,"+product.image}
							  				alt="Not available" onError={this.setDefaultImage} 
							  				style={{"width":"60%"}}/>
										</div>
									</div>
									<div className="row">
							  		<div className="col-md-2 text-center">
											<span>{product.productName}</span>
										</div>
										<div className="col-md-2">
											<i className={"fa fa-remove "+styles.pointer} onClick={() => this.deleteFromCart(productDto)} style={{"color": "red"}}></i>
										</div>
									</div>
									<div className="row">
										<div className="col-md-2 text-center">
											<span><strong>
												{product.price > product.discountedPrice ?
													<span><del>{'Rs.'+product.price}</del><ins>{'  Rs.'+product.discountedPrice}</ins></span>
													:
													<span>{'Rs.'+product.price}</span>
												}
											</strong></span>
										</div>
										<div className="col-md-2">
											<i className={"fa fa-check "+styles.pointer} onClick={() => this.buyProduct(productDto)} style={{"color": "green"}}></i>
										</div>
									</div><br/>
				  			</div>
				  		);
				  	})}
				  </div>
				}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		cartProducts: state.product.cartProducts,
	}
}

function mapDispatchToProps(dispatch) {
	return {
		productActions: bindActionCreators(productActions, dispatch),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(UserCart);