module.exports = () => {
	const start = async () => {
		const authenticate = async (req, res, next) => next();

		return {
			authenticate,
		};
	};

	return { start };
};
