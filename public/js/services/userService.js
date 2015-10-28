// USERSERVICE

function userService($http){
	return {
		get : function() {
				return $http.get('/Users');
		},
		getById : function(id) {
				return $http.get('/Users/' + id);
		},
		checkMail : function(email) {
				return $http.post('/CheckMail', email);
		},
		update : function(id, account){
				return $http.put('/Users/' + id, account);
		},
		create : function(account) {
				return $http.post('/Users', account);
		},
		delete : function(id) {
				return $http.delete('/Users/' + id);
		},
		findByUser : function(id) {
				return $http.get('/user_games/' + id);
		}
		
	}
};