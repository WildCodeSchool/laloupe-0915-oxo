function profilController($scope, $http, $location, formulaireService) {

	function load(){
		formulaireService.get().then(function(res){
			$scope.users = res.data;
			console.log(res.data);
			debugger
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
}