// connecter CONTROLLER
function connecterController($scope, $http, todoService, $location) {
	$scope.title = "Etape deux";
	
	console.log($scope);

	function load(){
		todoService.get().then(function(res){
			$scope.todos = res.data;

		});
	}

	$scope.send = function(){
		var data = {};
		data.nickname = $scope.pseudo;
		data.password = $scope.mdp;
		
		password.$error = { minlength : true, required : true };
		$location.path;	

		todoService.create(data).then(function(res){
			load();
		});

		$scope.description = "";
	}

	load();
}
