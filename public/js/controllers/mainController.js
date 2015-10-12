// MAIN CONTROLLER
function mainController($scope, $http, userService, $location) {
	$scope.title = "Bienvenue sur OXO";

	function load(){
		userService.get().then(function(res){
			$scope.uers = res.data;

		});
	}

	$scope.add = function(){
		var data = {};
		data.description = $scope.description;

		userService.create(data).then(function(res){
			load();

		});

		$scope.description = "";
	}

	$scope.update = function(user){
		userService.update(user.id, user).then(function(res){
			load();
		});
	}

	$scope.delete = function(user){
		userService.delete(user.id).then(function(res){
			load();
		});
	}

	$scope.register = function(){
		$location.path('/about');
	}

	load();
}
