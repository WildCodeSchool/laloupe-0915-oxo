function profilController($scope, $http, $location, formulaireService) {

	function load(){
		formulaireService.get().then(function(res){
			$scope.user = res.data[0].pseudo;
			$scope.ville = res.data[0].ville;
		});
	}
		$scope.myProfil = function(){
		$location.path('/profil');
	}
		$scope.findGame = function(){
		$location.path('/findGame');
	}
		$scope.findPlayer = function(){
		$location.path('/findPlayer');
	}
	load();
}