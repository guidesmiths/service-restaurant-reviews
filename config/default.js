module.exports = {
	server: {
		host: '0.0.0.0',
		port: process.env.PORT || 4000,
	},
	routes: {
		admin: {
			swaggerOptions: {
				info: {
					description: 'Documentation for service-restaurant-reviews',
					title: 'service-restaurant-reviews',
					version: '1.0.0',
					contact: {
						name: 'Guidesmiths',
					},
				},
				servers: [],
				security: {
					JWT: {
						type: 'apiKey',
						in: 'header',
						name: 'Authorization',
					},
				},
				baseDir: process.cwd(),
				filesPattern: './**/**-routes.js',
			},
		},
	},
	pg: {
		connection: {
			user: process.env.POSTGRES_USER || 'postgres',
			database: process.env.POSTGRES_DB || 'postgres',
			password: process.env.POSTGRES_PASSWORD || 'postgres',
			host: process.env.POSTGRES_HOST || 'localhost',
			port: process.env.POSTGRES_PORT || 5433,
			max: 10,
			migrations: [{ directory: 'sql/migrations', filter: '\\.sql$' }],
			idleTimeoutMillis: 30000,
			ssl: false,
			sql: 'sql/queries',
		},
	},
	auth: {
		googleClientId: process.env.GOOGLE_CLIENT_ID,
	},
	logger: {
		transport: 'console',
		include: [
			'tracer',
			'timestamp',
			'level',
			'message',
			'error.message',
			'error.code',
			'error.stack',
			'request.url',
			'request.headers',
			'request.params',
			'request.method',
			'response.statusCode',
			'response.headers',
			'response.time',
			'process',
			'system',
			'package.name',
			'service',
		],
		exclude: ['password', 'secret', 'token', 'request.headers.cookie', 'dependencies', 'devDependencies'],
	},
};
