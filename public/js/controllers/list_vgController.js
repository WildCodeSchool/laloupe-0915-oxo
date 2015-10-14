// LIST VIDEOS GAMES CONTROLLER
function list_vgController($scope, list_vgService) {
    $scope.get = function(){
        list_vgService.gameSearch($scope.jeux, function(data){
            console.log(data);  
            $scope.games = data;
        });
    }
}

	
