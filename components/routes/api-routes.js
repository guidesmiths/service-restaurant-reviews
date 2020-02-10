module.exports = () => {
	const start = ({ app, controller, auth }) => {
		app.get('/api/v1/restaurants', auth.authenticate, async (req, res, next) => {
			try {
				const data = await controller.getAllRestaurants();
				res.json(data);
			} catch (error) {
				next(error);
			}
		});
		return Promise.resolve();
	};
	return { start };
};
