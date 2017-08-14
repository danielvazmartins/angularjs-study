app.component('viewCComponent', {
	template: '<h3>View C</h3>' +
			  '<p>Utilizando component para escrever o template e a controller</p>',
	controller: function() {
		console.log("controller do component");
	}
});