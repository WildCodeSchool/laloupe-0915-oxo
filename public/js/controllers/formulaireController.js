// formulaire CONTROLLER

function formulaireController($scope, $rootScope, $http, userService, $location) {
	$scope.title1 = "Etape deux";
	$scope.title2 = "Etape trois";
	$scope.EMAIL_REGEXP = /^[a-zA-Z0-9._]+@[a-z]+\.[a-z.]{2,3}$/;


	$scope.next = function(){
		$scope.displayNext = true;
	}

	$scope.send = function(){
		var data = {};
		data.ville = $scope.ville;
		data.mail = $scope.field;
		data.pseudo = $scope.pseudo;
		data.mdp = $scope.mdp;

		$scope.dtc = $scope.pseudo;
		if ($scope.mdp === $scope.password2) {
			userService.create(data).then(function(res){
				// SUCCESS
				$rootScope.user = res.data;
				$location.path('/home');
			}).catch(function(){
				//ERROR
				$scope.pseudoUsed = true;
				setTimeout(function(){ $scope.pseudoUsed = false}, 1000);
			});

		} 
		else {
			$scope.alertError = true;
			$scope.password2 = "";
		}	

	}
}

