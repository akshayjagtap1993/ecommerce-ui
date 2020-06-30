import React, { Component } from 'react';

class Products extends Component {

	render() {
		return (
			<div className="w3-row w3-grayscale" style={{"marginLeft":"280px", "marginRight":"30px", "marginTop":"20px"}}>
			    <div className="w3-col l3 s6">
			      <div className="w3-container">
			        <img src="/images/jeans1.jpg" alt="Not available" style={{"width":"100%"}} />
			        <p>Ripped Skinny Jeans<br/><b>$24.99</b></p>
			      </div>
			      <div className="w3-container">
			        <img src="/images/jeans2.jpg" alt="Not available" style={{"width":"100%"}} />
			        <p>Mega Ripped Jeans<br/><b>$19.99</b></p>
			      </div>
			    </div>

			    <div className="w3-col l3 s6">
			      <div className="w3-container">
			        <div className="w3-display-container">
			          <img src="/images/jeans6.jpg" alt="Not available" style={{"width":"100%"}} />
			          <span className="w3-tag w3-display-topleft">New</span>
			          <div className="w3-display-middle w3-display-hover">
			            <button className="w3-button w3-black">Buy now <i className="fa fa-shopping-cart"></i></button>
			          </div>
			        </div>
			        <p>Mega Ripped Jeans<br/><b>$19.99</b></p>
			      </div>
			      <div className="w3-container">
			        <img src="/images/jeans3.jpg" alt="Not available" style={{"width":"100%"}} />
			        <p>Washed Skinny Jeans<br/><b>$20.50</b></p>
			      </div>
			    </div>

			    <div className="w3-col l3 s6">
			      <div className="w3-container">
			        <img src="/images/jeans7.jpg" alt="Not available" style={{"width":"100%"}} />
			        <p>Washed Skinny Jeans<br/><b>$20.50</b></p>
			      </div>
			      <div className="w3-container">
			        <div className="w3-display-container">
			          <img src="/images/jeans4.jpg" alt="Not available" style={{"width":"100%"}} />
			          <span className="w3-tag w3-display-topleft">Sale</span>
			          <div className="w3-display-middle w3-display-hover">
			            <button className="w3-button w3-black">Buy now <i className="fa fa-shopping-cart"></i></button>
			          </div>
			        </div>
			        <p>Vintage Skinny Jeans<br/><b className="w3-text-red">$14.99</b></p>
			      </div>
			    </div>

			    <div className="w3-col l3 s6">
			      <div className="w3-container">
			        <img src="/images/jeans8.jpg" alt="Not available" style={{"width":"100%"}} />
			        <p>Vintage Skinny Jeans<br/><b>$14.99</b></p>
			      </div>
			      <div className="w3-container">
			        <img src="/images/jeans5.jpg" alt="Not available" style={{"width":"100%"}} />
			        <p>Ripped Skinny Jeans<br/><b>$24.99</b></p>
			      </div>
			    </div>
			  </div>
		);
	}
}

export default Products;