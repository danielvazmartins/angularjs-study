app.controller('MainController', ['$scope', '$mdDialog', '$mdSidenav', function($scope, $mdDialog, $mdSidenav) {
	console.log('MainController');

	$scope.birthday = new Date();

	$scope.showMenu = function() {
		$mdSidenav('left-menu').toggle();
	}

	$scope.clickMenuItem = function() {
		console.log('click');
		$mdSidenav('left-menu').close();
	}

	$scope.showAlert = function() {
		alert = $mdDialog.alert({
        	title: 'mdDialog',
        	textContent: 'This is an example of how easy dialogs can be!',
        	ok: 'Close'
      	});

      	$mdDialog
        .show( alert )
        .finally(function() {
        	alert = undefined;
        });
	}
}]);