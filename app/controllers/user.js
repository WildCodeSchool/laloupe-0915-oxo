// CONTROLLER TODO

var User = require('../models/user.js');

module.exports 	= function(app) {

	app.get('/Users', User.findAll);

	app.post('/Users', User.create);

	app.put('/Users/:id', User.update);

	app.delete('/Users/:id', User.delete);

}
