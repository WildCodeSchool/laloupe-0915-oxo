// CONTROLLER USER_EMAIL

var user_emails = require('../models/user_email.js');

module.exports = function(app) {

	app.get('/user_emails/:id', user_emails.findByUserSend);

	app.get('/user_emails/receipt/:id', user_emails.findByUserReceipt);

	app.get('/user_emails/email/:id', user_emails.findByEmail);

	app.post('/user_emails', user_emails.create);

	app.delete('/user_emails/:id', user_emails.delete);

}