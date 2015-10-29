// EMAIL SERVICE
function emailService($http) {
		return {
			getUsersSend : function(id) {
				return $http.get('/user_emails/'+ id);
			},
			getMails : function(id) {
				return $http.get('/user_emails/email/'+ id);
			},

			getDesti : function(id) {
				return $http.get('/user_emails/receipt/' + id);
			},

			create : function(data) {
				return $http.post('/user_emails', data);
			},
			delete : function(id) {
				return $http.delete('/user_emails/' + id);
			}
		}
};