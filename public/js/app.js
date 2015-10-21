function config($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'views/login.html',
			controller: 'loginController'
		})
        .when('/VideosGames', {
              templateUrl: 'views/list_vg.html',
              controller: 'list_vgController'
        })

		.when('/formulaire', {
			templateUrl: 'views/formulaire.html',
			controller: 'formulaireController'
		})
		.when('/home', {
			templateUrl: 'views/home.html',
			controller: 'homeController'
		})	
		.when('/profil', {
			templateUrl: 'views/profil.html',
			controller: 'profilController'
		})
		.when('/find', {
			templateUrl: 'views/find.html',
			controller: 'findController'
		})
		.when('/email', {
			templateUrl: 'views/email.html',
			controller: 'emailController'
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

angular.module('app', ['ngRoute', 'ngMessages', 'ngResource'])
    .config(config)
    .controller('list_vgController', list_vgController)
    .service('list_vgService', list_vgService)
    .controller('loginController', loginController)
    .controller('emailController', emailController)
    .controller('homeController', homeController)
    .controller('formulaireController', formulaireController)
    .controller('profilController', profilController)
    .controller('findController', findController)
    .service('findService', findService)
    .service('profilService', profilService)
    .service('loginService', loginService)
    .service('formulaireService', formulaireService)
    .service('emailService', emailService)
    /*.factory('', )*/
    .run(run);
