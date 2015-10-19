function config($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'views/login.html',
			controller: 'loginController'
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
    .controller('loginController', loginController)
    .service('userService', userService)
    .service('loginService', loginService)
    /*.factory('', )*/
    .run(run);
