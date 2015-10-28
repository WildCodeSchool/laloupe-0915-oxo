// CONTROLLER USER_GAME

var user_game = require('../models/user_game.js');

module.exports = function(app) {

	app.get('/user_games/:id', user_game.findByUser);

	app.post('/user_games', user_game.verifGame, user_game.create);

	app.delete('/user_games/:id', user_game.delete);

}