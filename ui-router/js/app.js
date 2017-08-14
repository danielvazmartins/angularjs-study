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
		templateUrl: '/js/views/viewADetail.html',
		controller: 'ViewADetailController',
		resolve: {
			alimentos: function($stateParams) {
				switch( parseInt($stateParams.macroId) ) {
					case 1:
						return { alimentos: [
							{id: 1, name: 'Frango'},
							{id: 2, name: 'Carne'},
							{id: 3, name: 'Peixe'}
						]}
						break;
					case 2:
						return { alimentos: [
							{id: 4, name: 'Arroz'},
							{id: 5, name: 'Macarrão'},
							{id: 6, name: 'Batata'}
						]}
						break;
					case 3:
						return { alimentos: [
							{id: 7, name: 'Azeite'},
							{id: 8, name: 'Abacate'},
							{id: 9, name: 'Gema do Ovo'}
						]}
						break;
					default:
						return { alimentos: []}
				}
			}
		}
	})
	.state('viewB', {
		url: '/viewB',
		templateUrl: '/js/views/viewB.html',
		controller: 'ViewBController',
		resolve: {
			macros: function(Macros) {
				return Macros.getMacros();
			}
		}
	})
	.state('viewB.detail', {
		url: '{macroId}',
		templateUrl: '/js/views/viewBDetail.html',
		controller: 'ViewBDetailController',
		resolve: {
			alimentos: function(Macros, $stateParams) {
				return Macros.getAlimentos($stateParams.macroId);
			}
		}
	})
	.state('viewC', {
		url: '/viewC',
		templateUrl: '/js/views/viewC.html'
	});
});