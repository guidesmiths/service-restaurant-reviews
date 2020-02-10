const { get } = require('axios');

module.exports = () => {
	const start = async ({ config }) => {
		const isTokenValidForGoogle = token =>
			get(`https://oauth2.googleapis.com/tokeninfo?id_token=${token}`)
				.then(response => response.data)
				.catch(err => err);

		const authenticate = async (req, res, next) => {
			try {
				const token = req.headers.authorization;
				if (!token) throw new Error('Missing token');
				const payloadFromGoogle = await isTokenValidForGoogle(token);
				if (payloadFromGoogle.aud !== config.googleClientId) throw new Error('Invalid token');
				if (!(payloadFromGoogle.email && payloadFromGoogle.email.endsWith('guidesmiths.com'))) {
					throw new Error('Invalid email - you need a GuideSmiths email to browse this app');
				}
				return next();
			} catch (error) {
				return res.status(404).send(`Authentication failed: ${error.message}`);
			}
		};

		return {
			authenticate,
		};
	};

	return { start };
};
