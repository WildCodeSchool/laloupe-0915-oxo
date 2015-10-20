// CONTROLLER LOGIN

var Login = require('../models/login.js');

module.exports 	= function(app) {

	app.post('/Logins', Login.findAll);
}