// LIST VIDEOS GAMES CONTROLLER
function list_vgController($scope, list_vgService) {
    $scope.loadingInProgress = false;
    $scope.get = function(){
        $scope.loadingInProgress = true;
        list_vgService.gameSearch($scope.jeux, function(data){ 
            $scope.games = data;
            console.log(data)
            $scope.loadingInProgress = false;
        });
    }
    
}

	
