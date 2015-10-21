// CONTROLLER LOGIN

var User = require('../models/user.js');

module.exports 	= function(app) {

	app.post('/Logins', User.login);
}