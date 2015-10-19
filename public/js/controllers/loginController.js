// LOGIN CONTROLLER
function loginController($scope, $http, loginService, $location) {
	$scope.title = "LOGIN";

	$scope.send = function(){
		var data = {};
		data.pseudo = $scope.pseudo;
		data.mdp = $scope.mdp;

		loginService.post(data).then(function(res){
			console.log(res.data);
			if (!res.data){
				alert("boulet !!!!");
			}
		});
	}

	$scope.register = function(){
		$location.path('/about');
	}
}