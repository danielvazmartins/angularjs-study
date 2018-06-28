app.controller('MainController', ['$scope', function($scope) {
	
	$scope.barChart = {
		labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
		data: [450, 470, 430, 390, 510],
		colors: [ '#eceff1', '#cfd8dc', '#b0bec5', '#90a4ae', '#78909c'],
		options: {
			scales: {
				yAxes: [{
					ticks: {
						// Deixar a escala do eixo Y iniciando do 0
						beginAtZero:true
					}
				}]
			}
		}
	}
}]);