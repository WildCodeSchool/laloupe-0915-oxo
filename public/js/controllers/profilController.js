//PROFIL Controller

function profilController($scope, $http, $rootScope, $location, userService) {

	function load(){

		userService.getById($rootScope.user.id).then(function(res){
			$scope.pseudo = res.data.pseudo;
            $scope.avatar = res.data.avatar;
			$scope.ville = res.data.ville;
			$scope.anniversaire = res.data.anniversaire;
            $scope.sex = res.data.sex;
            $scope.nom = res.data.nom;
            $scope.prenom = res.data.prenom;
            $scope.teaser = res.data.description;
            
            

        });

     userService.findByUser($rootScope.user.id).then(function(res){
            $scope.games = res.data;

     }); 

    }

    
    $scope.editUser = function() {
                $location.path('/editUser');
            }
    
    $scope.addGame = function() {
                $location.path('/VideosGames');   
    }

    $scope.editGames = function() {
                $location.path('/editGames');
            }
    
    load()
      
}

