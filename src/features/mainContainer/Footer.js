import React, { Component } from 'react';

class Footer extends Component {

	render() {
		return (
			<div style={{"marginLeft":"280px", "marginRight":"30px"}}>
			<footer className="w3-padding-64 w3-light-grey w3-small w3-center" id="footer">
			    <div className="w3-row-padding">
			      <div className="w3-col s4">
			        <h4>Contact</h4>
			        <p>Questions? Go ahead.</p>
			        <form action="/action_page.php" target="_blank">
			          <p><input className="w3-input w3-border" type="text" placeholder="Name" name="Name" required /></p>
			          <p><input className="w3-input w3-border" type="text" placeholder="Email" name="Email" required /></p>
			          <p><input className="w3-input w3-border" type="text" placeholder="Subject" name="Subject" required /></p>
			          <p><input className="w3-input w3-border" type="text" placeholder="Message" name="Message" required /></p>
			          <button type="submit" className="w3-button w3-block w3-black">Send</button>
			        </form>
			      </div>

			      <div className="w3-col s4">
			        <h4>About</h4>
			        <p><a href="/">About us</a></p>
			        <p><a href="/">We're hiring</a></p>
			        <p><a href="/">Support</a></p>
			        <p><a href="/">Find store</a></p>
			        <p><a href="/">Shipment</a></p>
			        <p><a href="/">Payment</a></p>
			        <p><a href="/">Gift card</a></p>
			        <p><a href="/">Return</a></p>
			        <p><a href="/">Help</a></p>
			      </div>

			      <div className="w3-col s4 w3-justify">
			        <h4>Store</h4>
			        <p><i className="fa fa-fw fa-map-marker"></i> Company Name</p>
			        <p><i className="fa fa-fw fa-phone"></i> 0044123123</p>
			        <p><i className="fa fa-fw fa-envelope"></i> ex@mail.com</p>
			        <h4>We accept</h4>
			        <p><i className="fa fa-fw fa-cc-amex"></i> Amex</p>
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
			  	<i className="w3-hover-opacity"> Akshay</i></div>
			</div>
		);
	}
}

export default Footer;