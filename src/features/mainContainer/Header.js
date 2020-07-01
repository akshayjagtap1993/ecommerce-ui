import React, { Component } from 'react';

class Header extends Component {

	render() {
		return (
			<div className="w3-container w3-xlarge" style={{"marginLeft":"250px"}}>
				<header className="w3-container w3-xlarge">
			    <p className="w3-left">Jeans</p>
			    <p className="w3-right">
			      <i className="fa fa-shopping-cart w3-margin-right"></i>
			      <i className="fa fa-search w3-margin-right"></i>
			      <span className="w3-margin-right">Login</span>
			      <span className="w3-margin-right">Register</span>
			      <span>Add Product</span>
			    </p>
			  </header>
		  </div>
		);
	}
}

export default Header;