const getCurrentDate = () => {
	const currentDate = new Date();
	const day = (`0${currentDate.getDate()}`).slice(-2);
	const month = (`0${currentDate.getMonth() + 1}`).slice(-2);
	const year = currentDate.getFullYear();
	return `${year}-${month}-${day}`;
}
;

module.exports = { getCurrentDate }
;
