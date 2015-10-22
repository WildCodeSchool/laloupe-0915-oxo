//EDIT USER CONTROLLER
function editUserController($scope, $http, $rootScope, $location, userService) {

	$scope.currentUser = $rootScope.user;

	$scope.edit = function(){			

		userService.update($rootScope.user.id, $scope.currentUser).then(function(res){
			$rootScope.user = $scope.currentUser;
			$location.path('/profil');
		});
	
	}

}