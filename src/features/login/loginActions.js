import axios from 'axios';
import { baseUrl } from '../../utils/appConst';
import { browserHistory } from 'react-router';

let loginActions = {

	login: (user) => {
		return (dispatch, getState) => {
			let request = {
			    method: 'post',
			    url: baseUrl + "/api/login",
			    data: user,
			};
			axios(request)
		    .then(function (response) {
		        console.log('login response -> ' + JSON.stringify(response.data, null, 2));
		        if(response.data.data) {
					localStorage.setItem('loggedUser',JSON.stringify(response.data.data));
					browserHistory.push("/");
				}
				else {
					alert('Please enter valid credentials');
				}
		    })
		    .catch(function (err) {
		        console.log(err);
				throw err;
		    });
		}
	},

}

export default loginActions;