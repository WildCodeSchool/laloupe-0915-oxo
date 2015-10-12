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
    .service('userService', userService)
    /*.factory('', )*/
    .run(run);
