import React, { Component } from 'react';

class Products extends Component {

	componentDidMount() {
		console.log('make ajax calls here');
	}

	render() {
		return (
			<div>
				Products will be shown here !!!
			</div>
		);
	}
}

export default Products;