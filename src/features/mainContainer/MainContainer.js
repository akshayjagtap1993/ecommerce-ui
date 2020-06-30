import React from 'react';
import Products from '../product/components/Products';
import Header from './Header';
import Footer from './Footer';

export function MainContainer() {
	return(
		<div>
			<Header />
			<Products />
			<Footer />
		</div>
	);
}
