import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import signupActions from './signupActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DatePicker from 'react-datepicker';

class Signup extends Component {

	constructor(props) {
		super(props);
		this.state = {
			emailId: '',
			password: '',
			fullName: '',
			dateOfBirth: null
		};

		this.fieldChange = this.fieldChange.bind(this);
		this.onSignup = this.onSignup.bind(this);
		this.onCancel = this.onCancel.bind(this);
		this.dobChange = this.dobChange.bind(this);
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
		else if(name === 'fullName'){
			this.setState({fullName: value});
		}
	}

	onSignup() {
		if(!this.state.emailId){
			alert('Please enter Email ID');
			return;
		}
		if(!this.state.password){
			alert('Please enter Password');
			return;
		}
		if(!this.state.fullName){
			alert('Please enter Full Name');
			return;
		}
		if(!this.state.dateOfBirth){
			alert('Please enter dateOfBirth');
			return;
		}
		let user = {
			emailId: this.state.emailId,
			password: this.state.password,
			fullName: this.state.fullName,
			dateOfBirth: this.state.dateOfBirth
		};
		this.props.signupActions.signup(user);

	}

	onCancel() {
		browserHistory.push("/");
		window.scrollTo(0,0);
	}

	dobChange(dateOfBirth) {
		this.setState({dateOfBirth: dateOfBirth});
	}

	render() {
		return(
			<div>
				<h2>Signup page</h2>
				<br/><br/>
				<div className="container">
					<div className="row">
						<div className="col-md-offset-1 col-md-2 text-right">
							<span>Full Name :</span>
						</div>
						<div className="col-md-4">
							<input name="fullName" value={this.state.fullName} onChange={this.fieldChange}
								placeholder="Enter Full Name"/>
						</div>
					</div>
					<br/>
					<div className="row">
						<div className="col-md-offset-1 col-md-2 text-right">
							<span>Date of Birth :</span>
						</div>
						<div className="col-md-4">
							<DatePicker selected={this.state.dateOfBirth} onChange={date => this.dobChange(date)} 
								maxDate={new Date()}/>
						</div>
					</div>
					<br/>
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
							<button className="btn-success" onClick={this.onSignup}>Signup</button>
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
		signupActions: bindActionCreators(signupActions, dispatch),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
