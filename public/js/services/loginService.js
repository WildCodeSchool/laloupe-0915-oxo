// LOGIN SERVICE
function loginService($http) {
		return {
		connect: function(data){
			return $http.post('/login', data);
		},
		disconnect: function(){
			return $http.post('/logout');
		}
	}
}