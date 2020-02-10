const System = require('systemic');
const initAuth = require('./initAuth');

module.exports = new System({ name: 'auth' }).add('auth', initAuth()).dependsOn('config');
