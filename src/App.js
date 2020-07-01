import React, { Component } from 'react';
//import logo from './logo.svg';
//import { Counter } from './features/counter/Counter';
//import { MainContainer } from './features/mainContainer/MainContainer';
import './App.css';
import Header from './features/mainContainer/Header';
import Footer from './features/mainContainer/Footer';
import Menu from './features/mainContainer/Menu';

class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<Menu />
				<div style={{"marginLeft":"280px", "marginRight":"30px", "marginTop":"20px"}}>
			  		{this.props.children}
			  	</div>
			  	<Footer />
		    </div>
		);
	}
}

// function App() {
//   return (
//     <div>
// 		<Header />
// 		<Menu />
// 	  	{this.props.children}
// 	  	<Footer />
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <Counter />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <span>
//           <span>Learn </span>
//           <a
//             className="App-link"
//             href="https://reactjs.org/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             React
//           </a>
//           <span>, </span>
//           <a
//             className="App-link"
//             href="https://redux.js.org/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Redux
//           </a>
//           <span>, </span>
//           <a
//             className="App-link"
//             href="https://redux-toolkit.js.org/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Redux Toolkit
//           </a>
//           ,<span> and </span>
//           <a
//             className="App-link"
//             href="https://react-redux.js.org/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             React Redux
//           </a>
//         </span>
//       </header>
//     </div>
//   );
// }

export default App;
