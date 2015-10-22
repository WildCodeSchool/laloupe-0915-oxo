// MODEL FORMULAIRE

var Sequelize = require('sequelize');
var db = require('../../config/database.js');



var User = db.define('user', {
	ville: Sequelize.STRING,
	field: Sequelize.STRING,
	pseudo:Sequelize.STRING,
	mdp: Sequelize.STRING

});

User.sync().then(function(){});


module.exports.create = function(req, res) {
	User.create({
		ville: req.body.a,
		field: req.body.b,
		pseudo: req.body.c,
		mdp: req.body.d
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

module.exports.findByEmail = function(req, res, next) {
	User.findOne({
	where : {
		field: req.body.email
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
		pseudo: req.body.c
	}}).then(function (data) {
		if (data)
			res.status(409).send("Oh le pseudo " + req.body.c + " existe déjà !");
		else
			next();
	});
};

module.exports.update = function(req, res){
	User.update({
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
	User.destroy({
		where: {
			id: req.params.id
		}
	}).then(function(){
		res.sendStatus(200);
	})
}

