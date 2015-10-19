// MODEL TODO

var Sequelize = require('sequelize');
var db = require('../../config/database.js');

var Todo = db.define('todo', {
description: Sequelize.STRING
});


Todo.sync().then(function(){});

module.exports.create = function(req, res) {
	todo.create({
		pseudo: req.body.nickname,
		ville: req.body.ville,
		email: req.body.email,
		mdp: req.body.password
	}).then(function(){
		res.sendStatus(200);
	})
};

module.exports.findAll = function(req, res) {
	todo.findAll().then(function (data) {
		res.json(data);
	});
};

module.exports.update = function(req, res){
	todo.update({
		pseudo: req.body.nickname,
		ville: req.body.ville,
		email: req.body.email,
		mdp: req.body.password
	}, {
		where: {
			id: req.params.id
		}
	}).then(function(){
		res.sendStatus(200);
	})
}

module.exports.delete = function(req, res){
	todo.destroy({
		where: {
			id: req.params.id
		}
	}).then(function(){
		res.sendStatus(200);
	})
}
