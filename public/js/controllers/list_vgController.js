// LIST VIDEOS GAMES CONTROLLER
function list_vgController($scope, list_vgService) {
    $scope.get = function(){
        list_vgService.get($scope.jeux).then(function(res){
            $scope.games= res.data;
            console.log(data)
        });
    }
}

	
