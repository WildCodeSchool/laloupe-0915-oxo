//PROFIL Controller
function profilController($scope, $http, $rootScope, $location, userService) {

	function load(){

		userService.getById($rootScope.user.id).then(function(res){
			$scope.pseudo = res.data.pseudo;
			$scope.ville = res.data.ville;
			$scope.mail = res.data.mail;
			
			
            $scope.addGame = function() {
                $location.path('/VideosGames');
            }

            $scope.editUser = function() {
                $location.path('/editUser');
            }

        });
                                                     
    load();
        
    }
    
}
        