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
		.when('/home', {
			templateUrl: 'views/home.html',
			controller: 'homeController'
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
    .controller('emailController', emailController)
    .controller('homeController', homeController)
    .service('userService', userService)
    .service('loginService', loginService)
    .controller('formulaireController', formulaireController)
    .service('formulaireService', userService)
    .service('emailService', emailService)
    /*.factory('', )*/
    .run(run);
