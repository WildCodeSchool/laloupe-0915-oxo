// FIND CONTROLLER 
function findController($scope, $http, $rootScope, findService){
	var firstTime = true;
	var map = {};

	function init(position){
		map = L.map('map').setView([position.lat, position.lon], 12);
		L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
		    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
		}).addTo(map);
		var popup = L.popup()
		    .setLatLng([position.lat, position.lon])
		    .setContent("Tu es à " + $scope.findCity + "."+ " Il y a "+ $scope.town + " gamer"+ $scope.pluriel+"!")
		    .openOn(map);
	    
		firstTime = false;
	}

 	function updateMap(position) {
		map.resize;
		map.panTo(new L.LatLng(position.lat, position.lon));
		var popup = L.popup()
		    .setLatLng([position.lat, position.lon])
		    .setContent("Tu es à " + $scope.findCity + "."+ " Il y a "+ $scope.town + " gamer"+ $scope.pluriel+"!")
		    .openOn(map);
	}

	//$scope.logoOxo = 'image/OXOlogo.png';
	$scope.map = true;

	$scope.send = function(){
		var data = {};
		data.city = $scope.findCity;

		var location = $scope.findCity;

		$scope.map = false;

		findService.get(location).then(function(res){
			//var lat = res.data.coord.lat;
			console.log(res.data.coord);
			if (firstTime) {
				init(res.data.coord);
			} else {
				updateMap(res.data.coord);
			}
			$scope.findCity = "";

		});


			function findPlayer () {
				findService.getTown(location).then(function(res){
					$scope.town = res.data.length;
					$scope.listPlayers = res.data;
					$scope.trouverJoueur = true;

					if (res.data.length > 1) {
						$scope.pluriel = "s";
					} else {
						$scope.pluriel = "";
					}

					console.log(res.data);
				});
			}
			findPlayer();
	}
}