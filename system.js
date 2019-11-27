const System = require('systemic');
const { join } = require('path');

module.exports = () => new System({ name: 'service-matteoaffinity' }).bootstrap(join(__dirname, 'components'));
