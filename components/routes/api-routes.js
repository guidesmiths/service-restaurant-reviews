module.exports = () => {
	const start = ({ app, controller }) => {
		app.get('/api/v1/restaurants', async (req, res, next) => {
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
