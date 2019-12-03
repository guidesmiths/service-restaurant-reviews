module.exports = () => {
	const start = async ({ pg, logger }) => {
		const getAllRestaurants = async () => {
			const t = await pg.formattedQuery('all-restaurants');
			logger.info(t.rows);
			return t.rows;
		};

		return {
			getAllRestaurants,
		};
	};

	return { start };
};
