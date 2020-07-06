import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import productActions from '../actions/productActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class AddProduct extends Component {

	constructor(props) {
		super(props);
		this.state = {
			productName: '',
			description: '',
			owner: '',
			price: 0,
			discountedPrice: 0,
			image: null,
			quantity: 1
		};

		this.fieldChange = this.fieldChange.bind(this);
		this.onAddProduct = this.onAddProduct.bind(this);
		this.onCancel = this.onCancel.bind(this);
		this.onImageSelect = this.onImageSelect.bind(this);
	}

	fieldChange(event) {
		let name = event.target.name;
		let value = event.target.value;
		if(name === 'productName'){
			this.setState({productName: value});
		}
		else if(name === 'description'){
			this.setState({description: value});
		}
		else if(name === 'owner'){
			this.setState({owner: value});
		}
		else if(name === 'price'){
			this.setState({price: value});
		}
		else if(name === 'discountedPrice'){
			this.setState({discountedPrice: value});
		}
		else if(name === 'quantity'){
			this.setState({quantity: value});
		}
	}

	onAddProduct() {
		if(!this.state.productName){
			alert('Please enter Product Name');
			return;
		}
		if(!this.state.description){
			alert('Please enter Description');
			return;
		}
		if(!this.state.price){
			alert('Please enter Price');
			return;
		}
		if(!this.state.quantity){
			alert('Please enter Quantity');
			return;
		}
		let product = {
			productName: this.state.productName,
			description: this.state.description,
			owner: this.state.owner,
			price: this.state.price,
			//image: this.state.image,
			discountedPrice: this.state.discountedPrice,
			quantity: this.state.quantity
		};
		this.props.productActions.addProduct(product, this.state.image);

	}

	onImageSelect(event) {
		let image = event.target.files ? event.target.files[0] : null;
        this.setState({image: image});
    }

	onCancel() {
		browserHistory.push("/");
		window.scrollTo(0,0);
	}

	render() {
		return(
			<div>
				<h2>Add Product page</h2>
				<br/><br/>
				<div className="container">
					<div className="row">
						<div className="col-md-offset-1 col-md-2 text-right">
							<span>Product Name :</span>
						</div>
						<div className="col-md-4">
							<input name="productName" value={this.state.productName} onChange={this.fieldChange}
								placeholder="Enter Product Name"/>
						</div>
					</div>
					<br/>
					<div className="row">
						<div className="col-md-offset-1 col-md-2 text-right">
							<span>Description :</span>
						</div>
						<div className="col-md-4">
							<input name="description" value={this.state.description} onChange={this.fieldChange}
								placeholder="Enter Product Description"/>
						</div>
					</div>
					<br/>
					<div className="row">
						<div className="col-md-offset-1 col-md-2 text-right">
							<span>Owner :</span>
						</div>
						<div className="col-md-4">
							<input name="owner" value={this.state.owner} onChange={this.fieldChange}
								placeholder="Enter Owner" />
						</div>
					</div>
					<br/>
					<div className="row">
						<div className="col-md-offset-1 col-md-2 text-right">
							<span>Price :</span>
						</div>
						<div className="col-md-4">
							<input name="price" value={this.state.price} onChange={this.fieldChange}
								placeholder="Enter Price"/>
						</div>
					</div>
					<br/>
					<div className="row">
						<div className="col-md-offset-1 col-md-2 text-right">
							<span>Discounted Price :</span>
						</div>
						<div className="col-md-4">
							<input name="discountedPrice" value={this.state.discountedPrice} onChange={this.fieldChange}
								placeholder="Enter Discounted Price"/>
						</div>
					</div>
					<br/>
					<div className="row">
						<div className="col-md-offset-1 col-md-2 text-right">
							<span>Product Image :</span>
						</div>
						<div className="col-md-4">
							<input type="file" accept="image/*" onChange={this.onImageSelect} />
						</div>
					</div>
					<br/>
					<div className="row">
						<div className="col-md-offset-1 col-md-2 text-right">
							<span>Available Quantity :</span>
						</div>
						<div className="col-md-4">
							<input name="quantity" value={this.state.quantity} onChange={this.fieldChange}
								placeholder="Available Quantity"/>
						</div>
					</div>
					<br/>
					<div className="row">
						<div className="col-md-offset-3 col-md-1">
							<button className="btn-success" onClick={this.onAddProduct}>Add</button>
						</div>
						<div className="col-md-1">
							<button className="btn-danger" onClick={this.onCancel}>Cancel</button>
						</div>
					</div>
				</div>
				<br/><br/>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		
	}
}

function mapDispatchToProps(dispatch) {
	return {
		productActions: bindActionCreators(productActions, dispatch),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);
