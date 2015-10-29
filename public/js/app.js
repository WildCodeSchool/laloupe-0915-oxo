function config($routeProvider) {
	$routeProvider

		.when('/home', {
			templateUrl: 'views/profil.html',
			controller: 'profilController',
			resolve: {
				connected: checkIsConnected
			}
		})

		.when('/', {
			templateUrl: 'views/login.html',
			controller: 'loginController'
		})

        .when('/VideosGames', {
              templateUrl: 'views/list_vg.html',
              controller: 'list_vgController',
              resolve: {
				connected: checkIsConnected
			}
        })

		.when('/formulaire', {
			templateUrl: 'views/formulaire.html',
			controller: 'formulaireController'
		})

		.when('/find', {
			templateUrl: 'views/find.html',
			controller: 'findController',
			resolve: {
				connected: checkIsConnected
			}
		})	

		.when('/email', {
			templateUrl: 'views/email.html',
			controller: 'emailController',
			resolve: {
				connected: checkIsConnected
			}
		})

		.when('/editUser', {
			templateUrl: 'views/editUser.html',
			controller: 'editUserController',
			resolve: {
				connected: checkIsConnected
			}
		})

		.when('/editGames', {
			templateUrl: 'views/editGames.html',
			controller: 'editGamesController',
			resolve: {
				connected: checkIsConnected
			}
		})	

		.otherwise({
			redirectTo: '/'
		});
}

function checkIsConnected($q, $http, $rootScope, $location) {
    var deferred = $q.defer();
 
 	$http.get('/loggedin').success(function(user){
 		// Authenticated 
 		if (user !== '0'){
 			$rootScope.user = user;
 			deferred.resolve();
 		}
 		else { 
 			// Not Authenticated 
 			deferred.reject(); 
 			$location.url('/'); 
 		}
 	});

    return deferred.promise;
};


/*function checkIsAdmin($q, $rootScope, $location) {
    var deferred = $q.defer();
    
    if ($rootScope.user && $rootScope.user.admin)
        deferred.resolve();
    else{
        deferred.reject();
        $location.url('/');
    }

    return deferred.promise;
}*/

function run($rootScope, $location, loginService){
	$rootScope.loginMessage = {};
	 $rootScope.loginMessage.title = ''; 
	 $rootScope.loginMessage.message = ''; 
	// Watch path
	var path = function() { return $location.path(); };
	$rootScope.$watch(path, function(newVal, oldVal){
		$rootScope.activetab = newVal;
	});

	// Logout
	$rootScope.logout = function(){
		$rootScope.user = null;
		$rootScope.loginMessage.title = ''; 
		$rootScope.loginMessage.message = ''; 
		connectService.disconnect().then(function(){
			$location.url('/');
		})
	}
}

angular.module('app', ['ngRoute', 'ngMessages', 'ngResource'])
    .config(config)

    .controller('list_vgController', list_vgController)
    .controller('loginController', loginController)
    .controller('emailController', emailController)
    .controller('formulaireController', formulaireController)
  	.controller('findController', findController)
    .controller('profilController', profilController)
    .controller('editUserController', editUserController)
    .controller('editGamesController', editGamesController)

    .service('list_vgService', list_vgService)
    .service('findService', findService)
    .service('loginService', loginService)
    .service('userService', userService)
    .service('emailService', emailService)

    /*.factory('', )*/
    .run(run);
