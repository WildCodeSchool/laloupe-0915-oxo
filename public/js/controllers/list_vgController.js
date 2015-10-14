// LIST VIDEOS GAMES CONTROLLER
function list_vgController($scope, list_vgService) {
    $scope.get = function(){
        list_vgService.get($scope.jeux).then(function(res){
            console.log(JSON.parse(res.data));
            $scope.games = JSON.parse(res.data);
        });
    }
}

	
