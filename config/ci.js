module.exports = {
	logger: { transport: null },
	metrics: {
		key: 'this is some key',
		insightsConfig: {
			disableAppInsights: true,
		},
	},
	pg: {
		connection: {
			host: 'postgres-db',
			port: 5432,
			ssl: false,
		},
	},
};
