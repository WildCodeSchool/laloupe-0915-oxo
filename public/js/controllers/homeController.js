//HOME Controller

function homeController($scope, $http, $rootScope, $location, userService) {

	function load(){

		userService.getById($rootScope.user.id).then(function(res){
			$scope.pseudo = res.data.pseudo;
            $scope.avatar = res.data.avatar;
			$scope.ville = res.data.ville;
            
        });

     userService.findByUser($rootScope.user.id).then(function(res){
            $scope.games = res.data;

     }); 

    }

    $scope.voirProfil = function() {
                $location.path('/profil');
            }
    
    load()
      
}
        