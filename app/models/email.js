// MODEL EMAIL

var Sequelize = require('sequelize');
var db = require('../../config/database.js');


var Email = db.define('email', {
	nom: Sequelize.STRING,
	desti: Sequelize.STRING,
	sujet:Sequelize.STRING,
	message: Sequelize.STRING,
	date: Sequelize.STRING
});


Email.sync().then(function(){});
//rentrer ici les colonnes a créer


module.exports.create = function(req, res) {
	Email.create({
		nom: req.body.name,
		desti: req.body.desti,
		sujet: req.body.subject,
		message: req.body.msg,
		date: req.body.date
	}).then(function(){
		res.sendStatus(200);
	})
};

module.exports.findAll = function(req, res) {
	Email.findAll().then(function (data) {
		res.json(data);
	});
};

module.exports.update = function(req, res){
	Email.update({
		nom: req.body.name,
		ville: req.body.city,
		sujet: req.body.subject,
		message: req.body.msg
	}, {
		where: {
			id: req.params.id
		}
	}).then(function(){
		res.sendStatus(200);
	})
}

module.exports.delete = function(req, res){
	Email.destroy({
		where: {
			id: req.params.id
		}
	}).then(function(){
		res.sendStatus(200);
	})
}
