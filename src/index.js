import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import MainContainer from './features/mainContainer/MainContainer';
import ProductDetails from './features/product/components/ProductDetails';

ReactDOM.render(
  // <React.StrictMode>
    <Provider store={store}>
    	<Router history = {browserHistory}>
	      <Route path = "/" component = {App}>
	      	<IndexRoute component = {MainContainer} />
			<Route path = "/home" component = {MainContainer} />
			<Route path = "/about" component = {MainContainer} />
			<Route path = "/contact" component = {MainContainer} />
			<Route path = "/products/:productId" component = {ProductDetails} />
	      </Route>
	   </Router>
    </Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
