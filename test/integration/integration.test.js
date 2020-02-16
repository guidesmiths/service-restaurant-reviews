const expect = require('expect.js');
const system = require('../../system');
const supertest = require('supertest');
const initStubAuth = require('./stubs/initStubAuth');

describe('Integration Tests', () => {
	let request;
	let pgApi;
	const sys = system().remove('auth');
	sys.set('auth', initStubAuth()).dependsOn();

	before(async () => {
		const { app, pg } = await sys.start();
		pgApi = pg;
		request = supertest(app);
	});

	beforeEach(async () => {
		await pgApi.query('truncateall');
		await pgApi.query('insertmockdata');
	});

	after(async () => {
		await pgApi.query('truncateall');
		sys.stop();
	});

	it('returns list of restaurants', () =>
		request
			.get('/api/v1/restaurants')
			.expect(200)
			.then(response => {
				expect(response.body.length).to.equal(6);
			}));
});
