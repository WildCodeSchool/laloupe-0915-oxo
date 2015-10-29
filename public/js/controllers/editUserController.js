//EDIT USER CONTROLLER
function editUserController($scope, $http, $rootScope, $location, userService) {

    $scope.currentUser = $rootScope.user;

    $scope.edit = function(){            
        userService.update($rootScope.user.id, $scope.currentUser).then(function(res){
            $rootScope.user = $scope.currentUser;
            $location.path('/profil');
        });
    
    }

    $scope.previewFile = function() {
      var preview    = document.querySelector('#preview');
      var file    = document.querySelector('input[type=file]').files[0];
      $scope.user.avatar = file;
      var reader  = new FileReader();

      reader.onloadend = function () {
        preview.src = reader.result;
        $scope.user.avatar = reader.result;
      }

      if (file) {
        reader.readAsDataURL(file);
      } else {
        preview.src = "";
      }
    }

}