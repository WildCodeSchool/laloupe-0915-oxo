// EMAIL CONTROLLER

function emailController($scope, $http, $rootScope, emailService, userService) {

	function load(){
		emailService.get().then(function(res){
		$scope.Emails = res.data;
			if ($scope.Emails.length > 1) {
				$scope.msgS = "s";
			} else {
				$scope.msgS = "";
			}
		});
	}

	$scope.mailSelectionne = null;
	$scope.mailSlct = function(mail) {
		$scope.mailSelectionne = mail;
		$scope.showMail = true;
	}

	$scope.send = function(){
		
		var now=new Date();
		var jour=now.getDate();
		var mois=now.getMonth()+1;
		var an=now.getFullYear();
		var heure=now.getHours();
		var minute=now.getMinutes();
		var date= jour+"/"+mois+"/"+an+" - "+heure+":"+minute;
		$scope.date = date;
		console.log($scope.date);		

		var account = {};
		account.name = $scope.nom;
		account.desti = $scope.desti;
		account.subject = $scope.sujet;
		account.msg = $scope.message;
		account.date = $scope.date; 

		emailService.create(account).then(function(res){
			load();				
		});


		$scope.myEmail = true;	
		$scope.nom = "";
		$scope.desti = "";
		$scope.sujet = "";
		$scope.message = "";


	}

	$scope.update = function(Email){
		emailService.update(Email.id, Email).then(function(res){
			load();
		});
	}

	$scope.delete = function(Email){
		emailService.delete(Email.id).then(function(res){
			load();
		$scope.showMail = false;
		alert("Message supprimé.");
	});

	}

	load();

}