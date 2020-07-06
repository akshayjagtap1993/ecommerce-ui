import React, { Component } from 'react';
import { connect } from 'react-redux';
import productActions from '../actions/productActions';
import { bindActionCreators } from 'redux';
import styles from '../../counter/Counter.module.css';
import modelUtils from '../../../utils/modelUtils';

class Orders extends Component {

	constructor(props) {
		super(props);
		this.setDefaultImage = this.setDefaultImage.bind(this);
		this.downloadOrderSummery = this.downloadOrderSummery.bind(this);
	}

	setDefaultImage(event) {
		event.target.src = '/images/notavailable.png';
	}

	downloadOrderSummery() {
		let loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
		this.props.productActions.downloadOrderSummery(loggedUser.userId);
	}

	componentDidMount() {
		let loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
		this.props.productActions.getAllOrders(loggedUser.userId);
	}

	render() {
		let orders = this.props.orders || [];
		return (
			<div>
				<h3><strong>Orders Page</strong></h3>
				<br/>
				{
					orders.length > 0 ?
					<span>
						<span onClick={this.downloadOrderSummery} className={styles.pointer}>Download Order summery  <i className="fa fa-download"/></span>
						<br/><br/>
					</span>
					:
					null
				}
				<div>
					{
						orders.length === 0 ?
						<div>
							<h2>No orders to show</h2><br/><br/>
						</div>
						:
					  <div className="container">
					  	{orders.map((productDto, index) => {
					  		let product = productDto.product;
					  		return(
					  			<div className="row" key={product.productName + index}>
						  			<div className="row">
							  			<div className="col-md-4">
												<img src={"data:image/jpeg;base64,"+product.image}
								  				alt="Not available" onError={this.setDefaultImage} 
								  				style={{"width":"60%"}}/>
											</div>
											<div className="col-md-4 text-left">
												<br/><br/><br/><br/>
												<span>{product.productName}</span><br/>
												<span><strong><span>{'Rs.'+product.discountedPrice}</span></strong></span><br/>
												<span>{"Order Date: "+ modelUtils.convertDateTime(productDto.orderDate)}</span><br/>
												<span>{"Status: "+productDto.status}</span><br/>
												<span>{"Sent At: "+productDto.user.address}</span><br/>
											</div>
										</div>
										<br/><br/>
					  			</div>
					  		);
					  	})}
					  </div>
					}
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		orders: state.product.orders,
	}
}

function mapDispatchToProps(dispatch) {
	return {
		productActions: bindActionCreators(productActions, dispatch),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders);