// LOGIN CONTROLLER
function loginController($scope, $http, $rootScope, loginService, $location) {
	$scope.title = "OXO";


	$scope.connect = function(){
		loginService.connect($scope.user).then(function(res){
			$rootScope.user = res.data;
			$location.path('/home');
		}).catch(function(){
			$rootScope.loginMessage.title = "Connexion error";
			$rootScope.loginMessage.message = 'Error login or password';
		});
	}

	$scope.register = function(){


		$location.path('/formulaire');

	}
}

