/* eslint-disable camelcase */
module.exports = () => {
	const start = async ({ pg }) => {
		const getAllRestaurants = async () => {
			const { rows } = await pg.formattedQuery('select-all-restaurants');
			return rows;
		};
		const getRestaurantReviews = async id => {
			const rates = (await pg.query('select-restaurant-rates', [id])).rows[0];
			const reviews = (await pg.query('select-restaurant-reviews', [id])).rows;
			return [rates, reviews];
		};
		const insertReview = async ({ restaurant_id, authorname, authorimg, date, content, rate, cuisinerate, pricerate, settingrate }) => {
			const { rows } = await pg.query('insert-review', [restaurant_id, authorname, authorimg, date, content, rate, cuisinerate, pricerate, settingrate]);
			return rows;
		};

		return {
			getAllRestaurants, getRestaurantReviews, insertReview,
		};
	};

	return { start };
};
