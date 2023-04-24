const bodyParser = require('body-parser');
const expressJSDocSwagger = require('express-jsdoc-swagger');

const { getCurrentDate } = require('../../lib/index');

module.exports = () => {
	const start = ({ app, controller, auth, config }) => {
		const { swaggerOptions } = config;
		expressJSDocSwagger(app)(swaggerOptions);

		app.use(bodyParser.json());

		/**
		 * GET /api/v1/restaurants
		 * @summary This endpoint serves the list of restaurants
		 * @tags Api - Everything about restaurants
		 * @return {object} 200 - Sucessful response
		*/
		app.get('/api/v1/restaurants', auth.authenticate, async (req, res, next) => {
			try {
				const data = await controller.getAllRestaurants();
				res.json(data);
			} catch (error) {
				next(error);
			}
		});

		/**
		 * GET /api/v1/review/:restaurantId
		 * @summary This endpoint serves info for a specific restaurant
		 * @tags Api - Everything about restaurants
		 * @return {object} 200 - Sucessful response
		*/
		app.get('/api/v1/review/:restaurantId', auth.authenticate, async (req, res, next) => {
			try {
				const id = req.params.restaurantId;
				const data = await controller.getRestaurantReviews(id);
				res.json(data);
			} catch (error) {
				next(error);
			}
		});

		/**
		 * POST /api/v1/review
		 * @summary This endpoint adds a new review
		 * @tags Api - Everything about restaurants
		 * @return {object} 200 - Sucessful response
		*/
		app.post('/api/v1/review', auth.authenticate, async (req, res, next) => {
			try {
				const data = await controller.insertReview({ ...req.body, ...res.locals.userData, date: getCurrentDate() });
				res.json(data);
			} catch (error) {
				next(error);
			}
		});
		return Promise.resolve();
	};
	return { start };
};
