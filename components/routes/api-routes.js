module.exports = () => {
	const start = ({ app, controller }) => {
		app.get('/restaurants', (req, res, next) => {
			controller
				.getAllRestaurants()
				.then(data => res.json(data))
				.catch(next);
		});
		return Promise.resolve();
	};
	return { start };
};
