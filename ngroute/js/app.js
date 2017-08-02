// Criando um modulo no angular. 
// Utilizar o segundo parametro, um array de dependências, mesmo que vazio.
// Se não passar o segundo parâmetro então o modulo existente é instanciado.
var app = angular.module('helloApp', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: '/js/views/main.html',
		controller: 'mainController'
	})
	.when('/viewA', {
		templateUrl: '/js/views/viewA.html'
	})
	.when('/viewB', {
		templateUrl: '/js/views/viewB.html'
	})
	.when('/viewC', {
		template: '<h3>View C</h3><p>Utilizando "template" do ngRoute</p>'
	}).otherwise({
		template: '<h3>Not Found</h3><p>Utilizando o "otherwise" do ngRoute</p>'
	});
});