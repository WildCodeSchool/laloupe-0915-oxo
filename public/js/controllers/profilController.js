//PROFIL Controller
function profilController($scope, $http, $rootScope, $location, userService) {

	function load(){

		userService.getById($rootScope.user.id).then(function(res){
			$scope.pseudo = res.data.pseudo;
			$scope.ville = res.data.ville;
			$scope.mail = res.data.mail;
			
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

		$scope.addGame = function() {
		$location.path('/VideosGames');
	}
		$scope.editUser = function() {
		$location.path('/editUser');
	}

	load();
}