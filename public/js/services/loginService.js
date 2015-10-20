// LOGIN SERVICE
function loginService($http) {
		return {
			post : function(data) {
				return $http.post('/Logins', data);
			},	
		}
};