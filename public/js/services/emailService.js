// EMAIL SERVICE
function emailService($http) {
		return {
			get : function() {
				return $http.get('/Emails');
			},
			update : function(id, data){
				return $http.put('/Emails/' + id, data);
			},
			create : function(data) {
				return $http.post('/Emails', data);
			},
			delete : function(id) {
				return $http.delete('/Emails/' + id);
			}
		}
};