//LIST VIDEOS GAMES SERVICE
function userService($http) {
		return {
			get : function() {
				return $http.get('/https://videogamesrating.p.mashape.com/get.php');
		}
};