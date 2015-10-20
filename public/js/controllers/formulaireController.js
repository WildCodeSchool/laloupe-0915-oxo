// formulaire CONTROLLER

function formulaireController($scope, $http, formulaireService, $location) {
	$scope.title1 = "Etape deux";
	$scope.title2 = "Etape trois";
	$scope.EMAIL_REGEXP = /^[a-zA-Z0-9._]+@[a-z]+\.[a-z.]{2,3}$/;

	console.log($scope);

	function load(){
		formulaireService.get().then(function(res){
			$scope.users = res.data;

		});
	}
	
	$scope.next = function(){
		$scope.displayNext = true;
	}

	$scope.send = function(){
		var data = {};
		data.a = $scope.ville;
		data.b = $scope.field;
		data.c = $scope.pseudo;
		data.d = $scope.mdp;

		password.$error = { minlength : true, required : true };
		$location.path('/home');

		formulaireService.create(data).then(function(res){
			// SUCCESS
			load();
			console.log(data);
		}, function(){
			//ERROR
		});

	}

	load();
}
