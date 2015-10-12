// connecter CONTROLLER
function connecterController($scope, $http, userService, $location) {
	$scope.title = "Etape deux";

	console.log($scope);

	function load(){
		userService.get().then(function(res){
			$scope.users = res.data;

		});
	}

	$scope.send = function(){
		var data = {};
		data.nickname = $scope.pseudo;
		data.password = $scope.mdp;

		password.$error = { minlength : true, required : true };
		$location.path;

		userService.create(data).then(function(res){
			load();
			console.log(data);
		});

		$scope.description = "";
	}

	load();
}
