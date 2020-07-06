import React, { Component } from 'react';
import styles from '../counter/Counter.module.css';
import { browserHistory } from 'react-router';

class Header extends Component {

	constructor(props) {
		super(props);
		this.state = {};
		this.loginClick = this.loginClick.bind(this);
		this.signupClick = this.signupClick.bind(this);
		this.logoutClick = this.logoutClick.bind(this);
		this.addProductClick = this.addProductClick.bind(this);
		this.cartClick = this.cartClick.bind(this);
		this.myOrdersClick = this.myOrdersClick.bind(this);
		this.homeClick = this.homeClick.bind(this);
	}

	loginClick(event) {
		browserHistory.push("/login");
		window.scrollTo(0,0);
	}

	signupClick(event) {
		browserHistory.push("/signup");
		window.scrollTo(0,0);
	}

	logoutClick() {
		localStorage.removeItem("loggedUser");
		this.setState({});
		browserHistory.push("/");
	}

	addProductClick() {
		browserHistory.push("/addproduct");
		window.scrollTo(0,0);
	}

	cartClick() {
		window.scrollTo(0,0);
		browserHistory.push("/usercart");
	}

	myOrdersClick() {
		window.scrollTo(0,0);
		browserHistory.push("/orders");
	}

	homeClick() {
		window.scrollTo(0,0);
		browserHistory.push("/");	
	}

	render() {
		let loggedUser = localStorage.getItem('loggedUser');
		let fullName = 'Guest';
		if(loggedUser) {
			loggedUser = JSON.parse(loggedUser);
			fullName = loggedUser.fullName;
		}
		return (
			<div className="w3-container w3-xlarge" style={{"marginLeft":"250px"}}>
				<header className="w3-container w3-xlarge">
			    <p className="w3-left">{'Welcome ' + fullName}</p>
			    <p className="w3-right">
			      <i className={"fa fa-home w3-margin-right "+styles.pointer} onClick={this.homeClick}></i>
			      {loggedUser ?
			      	<span>
			      		<i className="fa fa-heart w3-margin-right"></i>
			      		<i className={"fa fa-shopping-cart w3-margin-right "+styles.pointer} onClick={this.cartClick}></i>
			      		<span className={"w3-margin-right "+styles.pointer} onClick={this.myOrdersClick}>My Orders</span>
			      	</span>
			      	: null
			      }
			      {loggedUser && loggedUser.admin ?
			      	<span className={"w3-margin-right "+styles.pointer} onClick={this.addProductClick}>Add Product</span>
			      	:
			      	null
			      }
			      {loggedUser ? 
			      	<span className={"w3-margin-right "+styles.pointer} onClick={this.logoutClick}>Logout</span>
			      	:
			      	<i>
				      	<span className={"w3-margin-right "+styles.pointer} onClick={this.loginClick}>Login</span>
				      	<span className={"w3-margin-right "+styles.pointer} onClick={this.signupClick}>Signup</span>
			      	</i>
			      }
			    </p>
			  </header>
		  </div>
		);
	}
}

export default Header;