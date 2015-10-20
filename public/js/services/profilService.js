// PROFIL SERVICE

function profilService($http){
	return {
		get : function() {
				return $http.get('/Formulaires');
		},
		update : function(id, account){
				return $http.put('/Formulaires/' + id, account);
		},
		create : function(account) {
				return $http.post('/Formulaires', account);
		},
		delete : function(id) {
				return $http.delete('/Formulaires/' + id);
		}
	}
};