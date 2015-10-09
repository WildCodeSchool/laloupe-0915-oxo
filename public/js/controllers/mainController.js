// MAIN CONTROLLER
function mainController($scope, $http, todoService, $location) {
	$scope.title = "Bienvenue sur OXO";

	function load(){
		todoService.get().then(function(res){
			$scope.todos = res.data;

		});
	}

	$scope.add = function(){
		var data = {};
		data.description = $scope.description;

		todoService.create(data).then(function(res){
			load();

		});

		$scope.description = "";
	}

	$scope.update = function(todo){
		todoService.update(todo.id, todo).then(function(res){
			load();
		});
	}

	$scope.delete = function(todo){
		todoService.delete(todo.id).then(function(res){
			load();
		});
	}

	$scope.register = function(){
		$location.path('/about');	
	}

	load();
}
