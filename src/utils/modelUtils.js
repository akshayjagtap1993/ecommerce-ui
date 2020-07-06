import moment from 'moment';

const modelUtils = {
	convertDateTime: (dateTime) => {
		return moment(dateTime).format("YYYY-MM-DD hh:mm");
	}
};

export default modelUtils;