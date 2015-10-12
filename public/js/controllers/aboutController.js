// about CONTROLLER
function aboutController($scope, $http, userService, $location) {
	$scope.title = "S'inscrire";
	$scope.EMAIL_REGEXP = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;

	function load(){
		userService.get().then(function(res){
			$scope.users = res.data;
		});
	}

	$scope.send = function(){
		var data = {};
		data.ville = $scope.ville;
		data.email = $scope.field;

		$location.path('/connecter');

		userService.create(data).then(function(res){
			load();
		});
			console.log(data);
	}

	load();
}
