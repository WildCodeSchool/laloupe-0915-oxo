// CONTROLLER LOGIN

var Formulaire = require('../models/formulaire.js');

module.exports 	= function(app) {

	app.post('/Logins', Formulaire.login);
}