//PROFIL Controller
function profilController($scope, $http, $rootScope, $location, userService) {

	function load(){
		userService.getById($rootScope.user.id).then(function(res){
			$scope.users = res.data;
			$scope.user = res.data.pseudo;
			$scope.ville = res.data.ville;
			$scope.email = res.data.field;
			
			console.log(res.data);
			
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