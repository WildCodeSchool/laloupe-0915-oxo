function config($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'views/main.html',
			controller: 'mainController'
		})
		.when('/about', {
			templateUrl: 'views/about.html',
			controller: 'aboutController'
		})
		.when('/connecter', {
			templateUrl: 'views/connecter.html',
			controller: 'connecterController'
		})
        .when('/VideosGames', {
              templateUrl: 'views/list_vg.html',
              controller: 'list_vgController'
        })
		.otherwise({
			redirectTo: '/'
		});
}

function run($rootScope, $location){
	var path = function() { return $location.path(); };
	$rootScope.$watch(path, function(newVal, oldVal){
		$rootScope.activetab = newVal;
	});
}

angular.module('app', ['ngRoute', 'ngMessages'])
    .config(config)
    .controller('mainController', mainController)
    .controller('aboutController', aboutController)
    .controller('connecterController', connecterController)
    .controller('list_vgController', list_vgController)
    .service('userService', userService)
    .service('list_vgService', list_vgService)
    /*.factory('', )*/
    .run(run);
