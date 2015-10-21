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
	}).then(function(){
		res.sendStatus(200);
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
	UserUser.destroy({
		where: {
			id: req.params.id
		}
	}).then(function(){
		res.sendStatus(200);
	})
}



/*module.exports.find = function(req, res){
 Formulaire.findOne({
   where: {
     pseudo: req.body.c,
     mdp: req.body.d
   }
 }).then(function(formulaire){
   res.json(formulaire);
 })
}*/
