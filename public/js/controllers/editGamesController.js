// EDIT GAMES CONTROLLER
function editGamesController($scope, $http, $rootScope, $location, list_vgService, userService){

    function load(){
        userService.findByUser($rootScope.user.id).then(function(res){
           $scope.games = res.data;
    }); 
    }

    load();

    $scope.supr = function(id){

        list_vgService.delete(id).then(function(res){
        })
        load();
    };

    $scope.retour = function(){
        $location.path('/profil');
    };

    



}