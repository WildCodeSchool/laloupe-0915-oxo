// LOGIN CONTROLLER
function loginController($scope, $http, $rootScope, loginService, $location) {
	$scope.title = "LOGIN";

	$scope.send = function(){
		var data = {};
		data.pseudo = $scope.pseudo;
		data.mdp = $scope.mdp;

		

		loginService.post(data).then(function(res){
			console.log(res.data);
			if (!res.data){
				alert("boulet !!!!");
				$location.path('/');
			}

			else {
				$rootScope.user = res.data;
				$location.path('/home');
			}
		});
	}

	$scope.register = function(){


		$location.path('/formulaire');

	}
}