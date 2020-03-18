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
				expect(response.body.length).to.equal(1);
			}));
	it('returns list of reviews for a certain restaurant', () =>
		request
			.get('/api/v1/review/1')
			.expect(200)
			.then(response => {
				expect(response.body[1].length).to.equal(2);
			}));
	it('returns rates for a certain restaurant', () =>
		request
			.get('/api/v1/review/1')
			.expect(200)
			.then(response => {
				expect(response.body[0]).to.have.property('cuisineavgrate');
			}));
	it('adds a new review for a certain restaurant', async () => {
		await request
			.post('/api/v1/review')
			.send({ restaurant_id: 1, authorname: 'Carlos', authorimg: '', date: '2020-03-01', content: 'holi', rate: 10.0, cuisinerate: 9.5, pricerate: 9.8, settingrate: 9.7 })
			.expect(200)
			.then(response => {
				expect(response.body[0].content).to.equal('holi');
			});
		await request
			.get('/api/v1/review/1')
			.expect(200)
			.then(response => {
				expect(response.body[1].length).to.equal(3);
			});
	});
});
