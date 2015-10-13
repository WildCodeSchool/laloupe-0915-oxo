//LIST VIDEOS GAMES SERVICE
function list_vgService($http) {
		return {
			get : function(param) {
                var header = { headers : {
                        Accept: 'application/json',
                        Authorization: 'Token token="123"'
                    }
                };
				return $http.get('https://www.igdb.com/api/v1/games', header);
            }
        }
}