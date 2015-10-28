// MODEL FORMULAIRE

var Sequelize = require('sequelize');
var db = require('../../config/database.js');



var User = db.define('user', {
	ville: Sequelize.STRING,
	mail: Sequelize.STRING,
	pseudo: Sequelize.STRING,
	mdp: Sequelize.STRING,
	anniversaire: Sequelize.DATE,
	nom: Sequelize.STRING,
	prenom: Sequelize.STRING,
	avatar: Sequelize.BLOB,
	sex: Sequelize.STRING,
	description: Sequelize.STRING(1234)



});

User.sync().then(function(){});


module.exports.create = function(req, res) {
	User.create({
		ville: req.body.ville,
		mail: req.body.mail,
		pseudo: req.body.pseudo,
		mdp: req.body.mdp,
		anniversaire: req.body.anniversaire,
		nom: req.body.nom,
		prenom: req.body.prenom,
		avatar :req.body.avatar,
		sex: req.body.sex,
		presentation: req.body.presentation

	}).then(function(user){
		res.json(user);
	})
};


module.exports.login = function(req, res) {
	User.findOne({
		where:{
			pseudo: req.body.pseudo,
			mdp: req.body.mdp
		}
	}).then(function (data) {
		res.json(data);
	});
};

module.exports.findAll = function(req, res) {
	User.findAll().then(function (data) {
		res.json(data);
	});
};

module.exports.find = function(req, res) {
	User.findOne({
	where : {
		id: req.params.id
	}}).then(function (data) {
		res.json(data);
	});
};

module.exports.findByTown = function(req, res) {
	User.findAll({
	where : {
		ville: req.params.location
	}}).then(function (data) {
	console.log(req.body);
		res.json(data);
	});
};

module.exports.findByEmail = function(req, res, next) {
	User.findOne({
	where : {
		mail: req.body.mail
	}}).then(function (data) {
		if (data)
			res.status(409).send("Oh l'email " + req.body.email + " existe déjà !");
		else
			res.status(200).send();
	});
};

module.exports.findByName = function(req, res, next) {
	User.findOne({
	where : {
		pseudo: req.body.pseudo
	}}).then(function (data) {
		if (data)
			res.status(409).send("Oh le pseudo " + req.body.pseudo + " existe déjà !");
		else
			next();
	});
};

module.exports.update = function(req, res){
	User.update({
		ville: req.body.ville,
		mail: req.body.mail,
		pseudo: req.body.pseudo,
		mdp: req.body.mdp,
		anniversaire: req.body.anniversaire,
		nom: req.body.nom,
		prenom: req.body.prenom,
		avatar: req.body.avatar,
		sex: req.body.sex,
		presentation: req.body.presentation

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

