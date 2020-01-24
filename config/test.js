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
			user: process.env.POSTGRES_USER || 'postgres',
			database: process.env.POSTGRES_DB || 'postgres',
			password: process.env.POSTGRES_PASSWORD || 'postgres',
			host: process.env.POSTGRES_HOST || 'postgres-db',
			port: 5432,
			ssl: false,
			sql: ['sql/queries', 'test/sql/queries'],
		},
	},
};
