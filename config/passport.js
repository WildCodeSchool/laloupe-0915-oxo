/* --------------------------------------------- *\
					PASSPORT
\* --------------------------------------------- */

var LocalStrategy	= require('passport-local').Strategy;
var User			= require('../app/models/user.js');

module.exports = function (passport) {
  // serialize sessions
  passport.serializeUser(function(user, done) {
    done(null, user);
  });

  passport.deserializeUser(function(user, done) {
    done(null, user);
  });


  passport.use(new LocalStrategy(
	{
		usernameField: 'pseudo',
		passwordField: 'mdp'
	},
	function(pseudo, mdp, done) {
		User.login(pseudo, mdp).then(function(user){
			if (user === null)
				return done(null, false, {message: "Identifiant et/ou mot de passe incorrecte"});
			else
				return done(null, user);
		})
		
	}));

};