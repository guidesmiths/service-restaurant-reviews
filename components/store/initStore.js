module.exports = () => {
	const start = async ({ pg }) => {
		const getAllRestaurants = async () => {
			const t = await pg.formattedQuery('all-restaurants');
			return t.rows;
		};

		return {
			getAllRestaurants,
		};
	};

	return { start };
};
