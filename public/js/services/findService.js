// FIND SERVICE

function findService($http){
	return {
		get : function(location) {
				return $http.get("http://api.openweathermap.org/data/2.5/weather?q=" + location + "&units=metric&APPID=39583154fb47ae5a44360b9c46bb99d2");
		},
		getTown : function(location) {
				return $http.get('/Users/town/' + location);
		}
}
}