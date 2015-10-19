function config($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'views/main.html',
			controller: 'mainController'
		})
		.when('/formulaire', {
			templateUrl: 'views/formulaire.html',
			controller: 'formulaireController'

		})
		.when('/login', {
			templateUrl: 'views/login.html',
			controller: 'loginController'

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
   

    .controller('loginController', loginController)
    .service('userService', userService)
    .service('loginService', loginService)

    .controller('formulaireController', formulaireController)
    .service('userService', userService)
    .service('formulaireService', userService)

    /*.factory('', )*/
    .run(run);
