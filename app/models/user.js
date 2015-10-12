// MODEL USER

var Sequelize = require('sequelize');
var db = require('../../config/database.js');

/*var User = db.define('User', {
description: Sequelize.STRING
});*/


var User = db.define('user', {
	pseudo: Sequelize.STRING,
	ville: Sequelize.STRING,
	email:Sequelize.STRING,
	mdp: Sequelize.STRING

});

//User.sync().then(function(){});
User.sync().then(function(){});


module.exports.create = function(req, res) {
	User.create({
		pseudo: req.body.nickname,
		ville: req.body.ville,
		email: req.body.email,
		mdp: req.body.password
	}).then(function(){
		res.sendStatus(200);
	})
};

module.exports.findAll = function(req, res) {
	User.findAll().then(function (data) {
		res.json(data);
	});
};

module.exports.update = function(req, res){
	User.update({
		pseudo: req.body.pseudo,
		ville: req.body.ville,
		email: req.body.email,
		mdp: req.body.mdp
	}, {
		where: {
			id: req.params.id
		}
	}).then(function(){
		res.sendStatus(200);
	})
}

module.exports.delete = function(req, res){
	User.destroy({
		where: {
			id: req.params.id
		}
	}).then(function(){
		res.sendStatus(200);
	})
}
