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
			      <span className="w3-margin-right">Login</span><span>Register</span>
			    </p>
			  </header>
			  <div className="w3-display-container w3-container">
			    <img src="/images/jeans.jpg" alt="Jeans" style={{"width":"100%"}} />
			    <div className="w3-display-topleft w3-text-white" style={{"padding":"24px 48px"}}>
			      <h1 className="w3-jumbo w3-hide-small">New arrivals</h1>
			      <h1 className="w3-hide-large w3-hide-medium">New arrivals</h1>
			      <h1 className="w3-hide-small">COLLECTION 2016</h1>
			      <p><a href="#jeans" className="w3-button w3-black w3-padding-large w3-large">SHOP NOW</a></p>
			    </div>
			  </div>
		  </div>
		);
	}
}

export default Header;