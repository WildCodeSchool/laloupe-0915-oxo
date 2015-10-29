// MODEL USER_EMAIL

var Sequelize = require('sequelize');
var db = require('../../config/database.js');


var user_emails = db.define('user_emails', {
	idUserSend: Sequelize.BIGINT,
	idUserReceive: Sequelize.BIGINT,
	date: Sequelize.DATE,
	sujet: Sequelize.STRING,
	message: Sequelize.STRING,
	nom: Sequelize.STRING,
	desti: Sequelize.STRING
})

user_emails.sync().then(function(){});

module.exports.create = function(req, res) {
	user_emails.create({
		idUserSend: req.body.idUserSend,
		idUserReceive: req.body.idUserReceive,
		date: req.body.date,
		sujet: req.body.subject,
		message: req.body.msg,
		nom: req.body.name,
		desti: req.body.desti

	}).then(function(user_emails){
		res.json(user_emails);
	})
};

module.exports.findByUserReceipt = function(req, res) {
	user_emails.findAll({
	where : {
		idUserReceive: req.params.id
	}}).then(function (data) {
		res.json(data);
	});
};

module.exports.findByUserSend = function(req, res) {
	user_emails.findAll({
	where : {
		idUserSend: req.params.id
	}}).then(function (data) {
		res.json(data);
	});
};

module.exports.findByEmail = function(req, res) {
	user_emails.findAll().then(function (data){
		res.json(data);
	});
};

module.exports.delete = function(req, res){
	user_emails.destroy({
		where: {
			id: req.params.id
		}
	}).then(function(){
		res.sendStatus(200);
	})
}