module.exports = () => {
	const start = async ({ store }) => {
		const getAllRestaurants = () => store.getAllRestaurants();

		return {
			getAllRestaurants,
		};
	};

	return { start };
};
