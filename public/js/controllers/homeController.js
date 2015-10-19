function homeController($scope, $http, $location) {
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