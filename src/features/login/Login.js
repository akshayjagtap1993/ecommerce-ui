import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import loginActions from './loginActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Login extends Component {

	constructor(props) {
		super(props);
		this.state = {
			emailId: '',
			password: ''
		};

		this.fieldChange = this.fieldChange.bind(this);
		this.onLogin = this.onLogin.bind(this);
		this.onCancel = this.onCancel.bind(this);
	}

	fieldChange(event) {
		let name = event.target.name;
		let value = event.target.value;
		if(name === 'emailId'){
			this.setState({emailId: value});
		}
		else if(name === 'password'){
			this.setState({password: value});
		}
	}

	onLogin() {
		if(!this.state.emailId){
			alert('Please enter Email ID');
			return;
		}
		if(!this.state.password){
			alert('Please enter Password');
			return;
		}
		let user = {
			emailId: this.state.emailId,
			password: this.state.password
		};
		this.props.loginActions.login(user);

	}

	onCancel() {
		browserHistory.push("/");
		window.scrollTo(0,0);
	}

	render() {
		return(
			<div>
				<h2>Login page</h2>
				<br/><br/>
				<div className="container">
					<div className="row">
						<div className="col-md-offset-1 col-md-2 text-right">
							<span>Email ID :</span>
						</div>
						<div className="col-md-4">
							<input name="emailId" value={this.state.emailId} onChange={this.fieldChange}
								placeholder="Enter Email Id" type="email"/>
						</div>
					</div>
					<br/>
					<div className="row">
						<div className="col-md-offset-1 col-md-2 text-right">
							<span>Password :</span>
						</div>
						<div className="col-md-4">
							<input name="password" value={this.state.password} onChange={this.fieldChange}
								placeholder="Enter Password" type="password"/>
						</div>
					</div>
					<br/>
					<div className="row">
						<div className="col-md-offset-3 col-md-1">
							<button className="btn-success" onClick={this.onLogin}>Login</button>
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
		loginActions: bindActionCreators(loginActions, dispatch),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
