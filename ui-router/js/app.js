// Criando um modulo no angular. 
// Utilizar o segundo parametro, um array de dependências, mesmo que vazio.
// Se não passar o segundo parâmetro então o modulo existente é instanciado.
var app = angular.module('mainApp', ['ui.router']);

// Criando um serviço
app.service('Colors', function() {
	this.getColors = function() {
		return {value: ['azul', 'amarelo', 'roxo']};
	}
});

app.config(function($stateProvider) {
	$stateProvider
	.state('main', {
		url: '/',
		templateUrl: '/js/views/main.html',
		controller: 'MainController',
		// Resolve busca dados para utilizar na view antes de ser carregada
		resolve: {
			// Utilizando services para buscar os dados
			colors: function(Colors) {
				return Colors.getColors();
			},
			// Retornando os dados diretamente
			sizes: function() {
				return {value: ['P', 'M', 'G']}
			}
		}
	})
	.state('viewA', {
		url: '/viewA',
		templateUrl: '/js/views/viewA.html',
		controller: 'ViewAController',
		resolve: {
			macros: function() {
				console.log("resolve macros");			
				return { macro: [
					{id: 1, name: 'Proteina'},
					{id: 2, name: 'Carboidrato'},
					{id: 3, name: 'Gordura'}
				]}
			}
		}			
	})
	.state('viewADetail', {
		url: '/viewA/{macroId}',
		templateUrl: '/js/views/viewADetail.html'
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