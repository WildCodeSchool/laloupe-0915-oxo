// about CONTROLLER
function aboutController($scope, $http, todoService, $location) {
	$scope.title = "S'inscrire";
	$scope.EMAIL_REGEXP = /^[a-zA-Z0-9._]+@[a-z]+\.[a-z.]{2,3}$/;

	function load(){
		todoService.get().then(function(res){
			$scope.todos = res.data;
		});
	}

	$scope.send = function(){
		var data = {};
		data.ville = $scope.ville;
		data.email = $scope.field;
		
		$location.path('/connecter');	

		todoService.create(data).then(function(res){
			load();
		});
			console.log(data);
	}

	load();
}
