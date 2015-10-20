// CONTROLLER EMAIL

var Email = require('../models/email.js');

module.exports 	= function(app) {

	app.get('/Emails', Email.findAll);

	app.post('/Emails', Email.create);

	app.put('/Emails/:id', Email.update);

	app.delete('/Emails/:id', Email.delete);

}
