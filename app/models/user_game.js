// MODEL USER_GAME 

var Sequelize = require('sequelize');
var db = require('../../config/database.js');


var user_game = db.define('user_game', {
	idGB: Sequelize.BIGINT, 
	idUser: Sequelize.BIGINT,
	idPlateform: Sequelize.BIGINT,
	gameName: Sequelize.STRING,
	gamePlateform: Sequelize.STRING

})

user_game.sync().then(function(){});

module.exports.create = function(req, res) {
	user_game.create({
		idGB: req.body.idGB,
		idUser: req.body.idUser,
		idPlateform: req.body.idPlateform,
		gameName: req.body.gameName,
		gamePlateform: req.body.gamePlateform

	}).then(function(user_game){
		res.json(user_game);
	})
};

module.exports.findByUser = function(req, res) {
	user_game.findAll({
	where : {
		idUser: req.params.id
	}}).then(function (data) {
		res.json(data);
	});
};

module.exports.verifGame = function(req, res, next) {
	user_game.findOne({
	where : {
		idGB: req.body.idGB,
		idUser: req.body.idUser,
		idPlateform: req.body.idPlateform
	}}).then(function (data){
		if (data)
			res.status(409).send("vous avez deja selectionné ce jeu !");
		else
			next();
	});
};


