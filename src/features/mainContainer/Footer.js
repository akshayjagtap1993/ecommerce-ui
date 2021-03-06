import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import styles from '../counter/Counter.module.css';

class Footer extends Component {

	constructor(props) {
		super(props);
		this.onAboutUsClick = this.onAboutUsClick.bind(this);
	}

	onAboutUsClick() {
		browserHistory.push("/about");
		window.scrollTo(0,0);
	}

	render() {
		return (
			<div style={{"marginLeft":"280px", "marginRight":"30px"}}>
			<footer className="w3-padding-64 w3-light-grey w3-small w3-center" id="footer">
			    <div className="w3-row-padding">

			      <div className="w3-col s6">
			        <h4>About</h4>
			        <p onClick={this.onAboutUsClick} className={styles.pointer}>About us</p>
			        <p><a href="/">We're hiring</a></p>
			        <p><a href="/">Support</a></p>
			        <p><a href="/">Find store</a></p>
			        <p><a href="/">Shipment</a></p>
			        <p><a href="/">Payment</a></p>
			        <p><a href="/">Gift card</a></p>
			        <p><a href="/">Return</a></p>
			        <p><a href="/">Help</a></p>
			      </div>

			      <div className="w3-col s6 w3-justify">
			        <h4>Store</h4>
			        <p><i className="fa fa-fw fa-map-marker"></i> India Store</p>
			        <p><i className="fa fa-fw fa-phone"></i> 0044123123</p>
			        <p><i className="fa fa-fw fa-envelope"></i> akshay@gmail.com</p>
			        <h4>We accept</h4>
			        <p><i className="fa fa-fw fa-cc-amex"></i> PayTM</p>
			        <p><i className="fa fa-fw fa-credit-card"></i> Credit Card</p>
			        <br />
			        <i className="fa fa-facebook-official w3-hover-opacity w3-large"></i>
			        <i className="fa fa-instagram w3-hover-opacity w3-large"></i>
			        <i className="fa fa-snapchat w3-hover-opacity w3-large"></i>
			        <i className="fa fa-pinterest-p w3-hover-opacity w3-large"></i>
			        <i className="fa fa-twitter w3-hover-opacity w3-large"></i>
			        <i className="fa fa-linkedin w3-hover-opacity w3-large"></i>
			      </div>
			    </div>
			  </footer>
			  <div className="w3-black w3-center w3-padding-24">Developed By 
			  	<i className="w3-hover-opacity"> Akshay</i>
			  </div>
			</div>
		);
	}
}

export default Footer;