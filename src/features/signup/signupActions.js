import axios from 'axios';
import { baseUrl } from '../../utils/appConst';
import { browserHistory } from 'react-router';

let signupActions = {

	signup: (user) => {
		return (dispatch, getState) => {
			// axios.post(baseUrl + "/api/signup", {data: user}).then(response => {
			// 	console.log('signup response post -> ' + JSON.stringify(response.data, null, 2));
			// }).catch(err => {
			// 	console.log(err);
			// 	throw err;
			// });

			let request = {
			    method: 'post',
			    url: baseUrl + "/api/signup",
			    data: user,
			};
			axios(request)
		    .then(function (response) {
		        console.log('signup response -> ' + JSON.stringify(response.data, null, 2));
		        alert('Signup successful.');
		        localStorage.setItem('loggedUser',JSON.stringify(response.data.data));
		        browserHistory.push("/");
		    })
		    .catch(function (err) {
		        console.log(err);
				throw err;
		    });
		}
	},

}

export default signupActions;