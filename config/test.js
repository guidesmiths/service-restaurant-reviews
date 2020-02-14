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
			user: 'postgres',
			database: 'postgres',
			password: 'postgres',
			host: 'postgres-db',
			port: 5432,
			ssl: false,
			sql: ['sql/queries', 'test/sql/queries'],
		},
	},
};
