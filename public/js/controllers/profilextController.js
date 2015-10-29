//PROFILEXT Controller

function profilextController($scope, $http, $rootScope, $location, userService, $routeParams) {
    var selecteduser = $routeParams.id;
    
	function load(){

		userService.getById(selecteduser).then(function(res){
			$scope.pseudo = res.data.pseudo;
            $scope.avatar = res.data.avatar;
			$scope.ville = res.data.ville;
			$scope.anniversaire = res.data.anniversaire;
            $scope.sex = res.data.sex;

        });

     userService.findByUser(selecteduser).then(function(res){
            $scope.games = res.data;

     }); 

    }
    
    load()
      
}