// formulaire CONTROLLER

function formulaireController($scope, $rootScope, $http, userService, $location) {
	$scope.title = "Level one";
	$scope.EMAIL_REGEXP = /^[a-zA-Z0-9._]+@[a-z]+\.[a-z.]{2,3}$/;

	$scope.err = "";

	$scope.next = function(){
		var data = {}
		data.email = $scope.field;
		

		userService.checkMail(data).then(function(res){
			// SUCCESS
			$scope.title = "Level two";
			$scope.displayNext = true;
			 	
		}).catch( function(err){
			//ERROR
			$scope.err = err.data;
			$scope.displayError = true;
			setTimeout(function(){ $scope.displayError = false; $scope.err= ""}, 1000);
		});


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
			}).catch(function(err){
				//ERROR
				$scope.displayError = true;
				$scope.err = err.data;
				setTimeout(function(){ $scope.displayError = false; $scope.err= ""}, 1000);
			});

		} 
		else {
			$scope.alertError = true;
			$scope.password2 = "";
		}	

	}
}

