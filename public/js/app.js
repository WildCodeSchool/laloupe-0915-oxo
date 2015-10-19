function config($routeProvider) {
	$routeProvider

		.when('/', {
			templateUrl: 'views/login.html',
			controller: 'loginController'
		})

		.when('/formulaire', {
			templateUrl: 'views/formulaire.html',
			controller: 'formulaireController'

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
    .controller('formulaireController', formulaireController)
    
    .service('loginService', loginService)
	.service('formulaireService', userService)
    
    /*.factory('', )*/
    .run(run);
