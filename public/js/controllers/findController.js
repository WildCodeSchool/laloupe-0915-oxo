// FIND CONTROLLER 
function findController($scope, $http, $rootScope, userService, findService){
	var firstTime = true;
	var map = {};
    var positionSaved;

	function init(position){
        positionSaved = position;
		map = L.map('map').setView([position.lat, position.lon], 12);
		L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
		    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
		}).addTo(map);
		var popup = L.popup()
		    .setLatLng([position.lat, position.lon])
		    .setContent("Tu es à " + $scope.findCity + "."+ " Il y a "+ $scope.town + " oxoer"+ $scope.pluriel+"!")
		    .openOn(map);
	    
		firstTime = false;
	}

 	function updateMap(position) {
		map.resize;
		map.panTo(new L.LatLng(position.lat, position.lon));
		var popup = L.popup()
		    .setLatLng([position.lat, position.lon])
		    .setContent("Tu es à " + $scope.findCity + "."+ " Il y a "+ $scope.town + " oxoer"+ $scope.pluriel+"!")
		    .openOn(map);
	}

    
    $scope.selectGame = function(){
        updateMap(positionSaved);
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
                    
                    console.log(res.data);

					if (res.data.length > 1) {
						$scope.pluriel = "s";
					} else {
						$scope.pluriel = "";
					}

                    $scope.listPlayers.forEach(function(player){
                        userService.findByUser(player.id).then(function(res){
                            player.games = res.data;
                            console.log(res.data)
                        });
                    })
                    
				});
                
                
                
			}
                
			findPlayer();
	}
    
    function load(){
        
		userService.findByUser($rootScope.user.id).then(function(res){
            $scope.games = res.data;
     }); 
	}
    
    $scope.user = $rootScope.user;
    
    load();

}