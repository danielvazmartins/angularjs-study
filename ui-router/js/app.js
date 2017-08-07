// Criando um modulo no angular. 
// Utilizar o segundo parametro, um array de dependências, mesmo que vazio.
// Se não passar o segundo parâmetro então o modulo existente é instanciado.
var app = angular.module('mainApp', ['ui.router']);

app.service('Colors', function() {
	this.getColors = function() {
		return {'colors': 'azul'};
	}
});

app.config(function($stateProvider) {
	$stateProvider
	.state('main', {
		url: '/',
		templateUrl: '/js/views/main.html',
		controller: 'MainController',
		resolve: function(Colors) {
			return Colors.getColors();
		}
		/*resolve: {
			colors: function() {
				return {'colors': 'azul'}
			}
		}*/
	})
	.state('viewA', {
		url: '/viewA',
		templateUrl: '/js/views/viewA.html'
	})
	.state('viewB', {
		url: '/viewB',
		templateUrl: '/js/views/viewB.html'		
	})
	.state('viewC', {
		url: '/viewC',
		templateUrl: '/js/views/viewC.html'
	});
});