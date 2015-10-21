// MODEL FORMULAIRE

var Sequelize = require('sequelize');
var db = require('../../config/database.js');



var Formulaire = db.define('formulaire', {
	ville: Sequelize.STRING,
	field: Sequelize.STRING,
	pseudo:Sequelize.STRING,
	mdp: Sequelize.STRING

});

Formulaire.sync().then(function(){});


module.exports.create = function(req, res) {
	Formulaire.create({
		ville: req.body.a,
		field: req.body.b,
		pseudo: req.body.c,
		mdp: req.body.d
	}).then(function(){
		res.sendStatus(200);
	})
};


module.exports.login = function(req, res) {
	Formulaire.findOne({
		where:{
			pseudo: req.body.pseudo,
			mdp: req.body.mdp
		}
	}).then(function (data) {
		res.json(data);
	});
};

module.exports.findAll = function(req, res) {
	Formulaire.findAll().then(function (data) {
		res.json(data);
	});
};

module.exports.update = function(req, res){
	Formulaire.update({
		ville: req.body.a,
		field: req.body.b,
		pseudo: req.body.c,
		mdp: req.body.d
	}, {
		where: {
			id: req.params.id
		}
	}).then(function(){
		res.sendStatus(200);
	})
}

module.exports.delete = function(req, res){
	Formulaire.destroy({
		where: {
			id: req.params.id
		}
	}).then(function(){
		res.sendStatus(200);
	})
}