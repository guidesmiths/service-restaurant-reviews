module.exports = () => {
	const start = async ({ store }) => {
		const getAllRestaurants = () => store.getAllRestaurants();
		const getRestaurantReviews = id => store.getRestaurantReviews(id);
		const insertReview = review => store.insertReview(review);

		return {
			getAllRestaurants, getRestaurantReviews, insertReview,
		};
	};

	return { start };
};
