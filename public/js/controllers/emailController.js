// EMAIL CONTROLLER

function emailController($scope, $http, $rootScope, emailService, userService) {

	function loadReceipt(){
		emailService.getDesti($rootScope.user.id).then(function(res){
			$scope.nom = res.data.idUserSend;
			console.log(res);

			$scope.EmailsR = res.data;
			if ($scope.EmailsR.length > 1) {
				$scope.msgS = "s";
			} else {
				$scope.msgS = "";
			}
		});
	}
	loadReceipt();

	function loadSend(){
		emailService.getUsersSend($rootScope.user.id).then(function(res){
			console.log();

			$scope.EmailsS = res.data;
			if ($scope.EmailsS.length > 1) {
				$scope.sendMsgS = "s";
			} else {
				$scope.sendMsgS = "";
			}
		});
	}
	loadSend();

	function getUsers(){
		userService.get().then(function(res){
			$scope.users = res.data;
		});
	}
	getUsers();

	$scope.msgReceipt = true;
	$scope.recevoir = function(){
		$scope.msgReceipt = true;
		$scope.msgSend = false;
	}

	$scope.envoyer = function(){
		$scope.msgSend = true;
		$scope.msgReceipt = false;
	}

	$scope.formatDate = function(date){
		moment.locale('fr');
		return moment(date).format("D MMMM YYYY à HH:mm");
	}

	$scope.mailSelectionne = null;
	$scope.mailSlct = function(mail) {
		$scope.mailSelectionne = mail;
		$scope.showMail = true;
	}

	$scope.send = function(){

		var account = {};
		//account.idUserSend = ;
		account.idUserSend = $rootScope.user.id;
		//account.idUserReceive = ;
		account.idUserReceive = $scope.search;
		account.subject = $scope.sujet;
		account.msg = $scope.message;
		account.date = $scope.date;

		emailService.create(account).then(function(res){
			loadReceipt();				
		});

		$scope.myEmail = true;	
		$scope.nom = "";
		$scope.desti = "";
		$scope.sujet = "";
		$scope.message = "";

		loadSend();
	}

		$scope.delete = function(Email){
		emailService.delete(Email.id).then(function(res){
			loadSend();
			loadReceipt();
		$scope.showMail = false;
		alert("Message supprimé.");
	});

	}

}