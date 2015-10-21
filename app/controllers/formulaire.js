// CONTROLLER FORMULAIRE

var Formulaire = require('../models/formulaire.js');

module.exports 	= function(app) {

	app.get('/Formulaires', Formulaire.findAll);

	app.post('/Formulaires', Formulaire.create);

	app.put('/Formulaires/:id', Formulaire.update);

	app.delete('/Formulaires/:id', Formulaire.delete);

}

