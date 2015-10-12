// CONTROLLER TODO

var todo = require('../models/todo.js');

module.exports 	= function(app) {

	app.get('/todos', todo.findAll);

	app.post('/todos', todo.create);

	app.put('/todos/:id', todo.update);

	app.delete('/todos/:id', todo.delete);

}
