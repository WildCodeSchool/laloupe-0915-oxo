// CONTROLLER FORMULAIRE

var User = require('../models/user.js');
var Auth = require('../middlewares/authorization.js');

module.exports 	= function(app, passport) {

	app.get('/Users', User.findAll);

	app.get('/Users/:id', User.find);

	app.get('/Users/town/:location', User.findByTown);

	app.post('/Users', User.findByName, User.create);

	app.post('/CheckMail', User.findByEmail);

	app.put('/Users/:id', Auth.user.hasAuthorization, User.update);

	app.delete('/Users/:id', User.delete);

}
