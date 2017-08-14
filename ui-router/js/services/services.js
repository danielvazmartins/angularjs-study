app.service('Macros', function() {
	this.getMacros = function() {
		return { macro: [
			{id: 1, name: 'Proteina'},
			{id: 2, name: 'Carboidrato'},
			{id: 3, name: 'Gordura'}
		]}
	}

	this.getAlimentos = function(macroId) {
		switch( parseInt(macroId) ) {
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
});