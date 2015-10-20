 // MODEL USER

var Sequelize = require('sequelize');
var db = require('../../config/database.js');


var Utilisateur = db.define('user', {
	pseudo: Sequelize.STRING,
	mdp: Sequelize.STRING

});

//User.sync().then(function(){});
Utilisateur.sync().then(function(){});


module.exports.findAll = function(req, res) {
	Utilisateur.findOrCreate({
		where :{
			pseudo: req.body.pseudo,
			mdp: req.body.mdp
		}
	}).then(function (data) {
		res.json(data);
	});
};