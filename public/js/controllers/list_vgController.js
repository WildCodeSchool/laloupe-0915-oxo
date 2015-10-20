// LIST VIDEOS GAMES CONTROLLER
function list_vgController($scope, list_vgService) {
    $scope.loadingInProgress = true;
    $scope.get = function(){
        list_vgService.gameSearch($scope.jeux, function(data){ 
            $scope.games = data;
            $scope.results = ' résultat(s) à votre recherche'; 
        }).then(function(res) { 
                // My success function
                $scope.games = data; 
                $scope.loadingInProgress = false;
                },
            function() { 
                // My failure function
                $scope.games != data;
                $scope.loadingInProgress = false; 
});;
    }
    
}

	
