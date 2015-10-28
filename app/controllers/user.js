// CONTROLLER FORMULAIRE

var User = require('../models/user.js');

module.exports 	= function(app) {

	app.get('/Users', User.findAll);

	app.get('/Users/:id', User.find);

	app.get('/Users/town/:location', User.findByTown);

	app.post('/Users', User.findByName, User.create);

	app.post('/CheckMail', User.findByEmail);

	app.put('/Users/:id', User.update);

	app.delete('/Users/:id', User.delete);

}
