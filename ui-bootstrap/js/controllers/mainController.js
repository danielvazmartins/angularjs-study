app.controller('MainController', ['$scope', function($scope) {
	console.log('MainController');

	// Datepicker
	$scope.dt = new Date();
  	$scope.format = 'dd/MM/yyyy';
  	$scope.dateOptions = {
	    formatYear: 'yy',
	    maxDate: new Date(2020, 5, 22),
	    minDate: new Date(),
	    startingDay: 1
	};
	$scope.popup1 = {
    	opened: false
  	};

  	$scope.open1 = function() {
    	$scope.popup1.opened = true;
  	};

	$scope.clickButton = function() {
		console.log("click button");
	}

}]);