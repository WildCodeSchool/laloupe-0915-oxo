//LIST VIDEOS GAMES SERVICE
function list_vgService($http) {
		return {
			get : function(param) {
				return $http.jsonp('http://www.giantbomb.com/api/search/?api_key=763bf3053c5f0506cbaffd8c9ea343e8dd4834e2&format=json&query=' + param + '&resources=game');
        }
}
}