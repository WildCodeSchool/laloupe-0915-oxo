// USER SERVICE
function userService($http) {
		return {
			get : function() {
				return $http.get('/Users');
			},
			update : function(id, data){
				return $http.put('/Users/' + id, data);
			},
			create : function(data) {
				return $http.post('/Users', data);
			},
			delete : function(id) {
				return $http.delete('/Users/' + id);
			}
		}
};
