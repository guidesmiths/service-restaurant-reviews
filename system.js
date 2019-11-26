const System = require('systemic');
const { join } = require('path');

module.exports = () =>
	new System({ name: 'mentoring-service-restaurants-reviews' })
		.bootstrap(join(__dirname, 'components'));

