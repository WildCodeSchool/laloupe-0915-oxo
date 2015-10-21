// USERSERVICE

function userService($http){
	return {
		get : function() {
				return $http.get('/Users');
		},
		getById : function(id) {
				return $http.get('/Users/' + id);
		},
		update : function(id, account){
				return $http.put('/Users/' + id, account);
		},
		create : function(account) {
				return $http.post('/Users', account);
		},
		delete : function(id) {
				return $http.delete('/Users/' + id);
		}
	}
};