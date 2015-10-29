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

	/*$scope.send = function(){
		var data = {};
		data.pseudo = $scope.pseudo;
		data.mdp = $scope.mdp;

		

		loginService.post(data).then(function(res){
			console.log(res.data);
			if (!res.data){
				alert("Vous n'êtes pas encore incrit !");
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

	}*/
}

