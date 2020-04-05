const getCurrentDate = () => {
	const currentDate = new Date();
	const seconds = (`0${currentDate.getSeconds()}`).slice(-2);
	const minutes = (`0${currentDate.getMinutes()}`).slice(-2);
	const hour = (`0${currentDate.getHours()}`).slice(-2);
	const day = (`0${currentDate.getDate()}`).slice(-2);
	const month = (`0${currentDate.getMonth() + 1}`).slice(-2);
	const year = currentDate.getFullYear();
	return `${year}-${month}-${day} ${hour}:${minutes}:${seconds}`;
}
;

module.exports = { getCurrentDate }
;
