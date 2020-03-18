const bodyParser = require('body-parser');

module.exports = () => {
	const start = ({ app, controller, auth }) => {
		app.use(bodyParser.json());
		app.get('/api/v1/restaurants', auth.authenticate, async (req, res, next) => {
			try {
				const data = await controller.getAllRestaurants();
				res.json(data);
			} catch (error) {
				next(error);
			}
		});
		app.get('/api/v1/review/:restaurantId', auth.authenticate, async (req, res, next) => {
			try {
				const id = req.params.restaurantId;
				const data = await controller.getRestaurantReviews(id);
				res.json(data);
			} catch (error) {
				next(error);
			}
		});
		app.post('/api/v1/review', auth.authenticate, async (req, res, next) => {
			try {
				const data = await controller.insertReview(req.body);
				res.json(data);
			} catch (error) {
				next(error);
			}
		});
		return Promise.resolve();
	};
	return { start };
};
