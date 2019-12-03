const expect = require('expect.js');
const system = require('../../system');
const supertest = require('supertest');

describe('Integration Tests', () => {
	let request;
	const sys = system();

	before(async () => {
		const { app } = await sys.start();
		request = supertest(app);
	});

	after(() => sys.stop());

	it('returns list of restaurants', () =>
		request
			.get('/restaurants')
			.expect(200)
			.then(response => {
				expect(response.body.length).to.equal(2);
			}));
});
