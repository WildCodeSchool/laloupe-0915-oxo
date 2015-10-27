// LIST VIDEOS GAMES CONTROLLER
function list_vgController($scope, list_vgService, $rootScope, $http, $timeout) {
    $scope.loadingInProgress = false;
    $scope.get = function(){
        $scope.loadingInProgress = true;
        list_vgService.gameSearch($scope.jeux, function(data){ 
            $scope.games = data;
            console.log(data)
            $scope.loadingInProgress = false;
        });     
    }

     $scope.select = function(game, platform){
        var data = {};
            data.idGB = game.id;
            data.idUser = $rootScope.user.id;
            data.idPlateform = platform.id;
        

        $scope['mes' + game.id] = true;

        $timeout(function(){
            $scope['mes' + game.id] = false;
        }, 2000);

        list_vgService.create(data).then(function(res){            
            // SUCCESS
            $scope.successMessage = true;
            $scope.message = 'Ce jeux a été ajouté à votre liste. Good Game !';
            
        }).catch( function(err){
            //ERROR
            $scope.successMessage = false;
            $scope.message = 'Game Over ! Ce jeux est déjà dans ta liste !!!';

        });
    }

}

	
