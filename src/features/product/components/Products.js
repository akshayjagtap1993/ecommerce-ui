import React, { Component } from 'react';

class Products extends Component {

	constructor(props) {
		super(props);
		this.setDefaultImage = this.setDefaultImage.bind(this);
	}

	setDefaultImage(event) {
		event.target.src = '/images/notavailable.png';
	}

	render() {
		return (
			<div>
			<div className="w3-display-container w3-container" style={{"marginBottom": "20px"}}>
			    <img src="/images/jeans.jpg" alt="Jeans" style={{"width":"100%"}} />
			    <div className="w3-display-topleft w3-text-white" style={{"padding":"24px 48px"}}>
			      <h1 className="w3-jumbo w3-hide-small">New arrivals</h1>
			      <h1 className="w3-hide-large w3-hide-medium">New arrivals</h1>
			      <h1 className="w3-hide-small">COLLECTION 2020</h1>
			      <p><a href="#jeans" className="w3-button w3-black w3-padding-large w3-large">SHOP NOW</a></p>
			    </div>
			</div>
			<div className="w3-row w3-grayscale">
			    <div className="w3-col l3 s6">
			      <div className="w3-container">
			        <img src="/images/jeans1.jpg" alt="Not available" onError={this.setDefaultImage} style={{"width":"100%"}} />
			        <p>Ripped Skinny Jeans<br/><b>$24.99</b></p>
			      </div>
			      <div className="w3-container">
			        <img src="/images/jeans2.jpg" alt="Not available" onError={this.setDefaultImage} style={{"width":"100%"}} />
			        <p>Mega Ripped Jeans<br/><b>$19.99</b></p>
			      </div>
			    </div>

			    <div className="w3-col l3 s6">
			      <div className="w3-container">
			        <div className="w3-display-container">
			          <img src="/images/jeans6.jpg" alt="Not available" onError={this.setDefaultImage} style={{"width":"100%"}} />
			          <span className="w3-tag w3-display-topleft">New</span>
			          <div className="w3-display-middle w3-display-hover">
			            <button className="w3-button w3-black">Buy now <i className="fa fa-shopping-cart"></i></button>
			          </div>
			        </div>
			        <p>Mega Ripped Jeans<br/><b>$19.99</b></p>
			      </div>
			      <div className="w3-container">
			        <img src="/images/jeans3.jpg" alt="Not available" onError={this.setDefaultImage} style={{"width":"100%"}} />
			        <p>Washed Skinny Jeans<br/><b>$20.50</b></p>
			      </div>
			    </div>

			    <div className="w3-col l3 s6">
			      <div className="w3-container">
			        <img src="/images/jeans7.jpg" alt="Not available" onError={this.setDefaultImage} style={{"width":"100%"}} />
			        <p>Washed Skinny Jeans<br/><b>$20.50</b></p>
			      </div>
			      <div className="w3-container">
			        <div className="w3-display-container">
			          <img src="/images/jeans4.jpg" alt="Not available" onError={this.setDefaultImage} style={{"width":"100%"}} />
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
			        <img src="/images/jeans8.jpg" alt="Not available" onError={this.setDefaultImage} style={{"width":"100%"}} />
			        <p>Vintage Skinny Jeans<br/><b>$14.99</b></p>
			      </div>
			      <div className="w3-container">
			        <img src="/images/jeans5.jpg" alt="Not available" onError={this.setDefaultImage} style={{"width":"100%"}} />
			        <p>Ripped Skinny Jeans<br/><b>$24.99</b></p>
			      </div>
			    </div>
			  </div>
			  </div>
		);
	}
}

export default Products;