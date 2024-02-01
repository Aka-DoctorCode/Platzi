let jugar = document.getElementById('jugar');
jugar.onclick = function () {
	//FUNCIÓN PARA GENERAR NÚMEROS ALEATORIOS
	function aleatorio(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}
	// FUNCION DE ELECCION DE Piedra, Papel o Tijera
	function eleccion(jugada) {
		let resultado = '';
		if (jugada === 1) {
			resultado = 'piedra';
		} else if (jugada === 2) {
			resultado = 'papel';
		} else if (jugada === 3) {
			resultado = 'tijera';
		} else {
			resultado = 'ERROR';
		}
		return resultado;
	}
	//FUNCIÓN PARA RESETEAR VARIABLES DE VICTORIAS
	function resetearJuego() {
		victorias = 0;
		derrotas = 0;
		empates = 0;
	}
	// VARIBLES DEL JUEGO
	// ELECCION DEL JUGADOR
	let jugador = 0;
	// ELECCION DE LA PC
	let pc = 0;
	// TRIUNFOS, PERDIDAS Y EMPATES
	let triunfos = 0;
	let perdidas = 0;
	let empates = 0;
	// COMBATE
	while (triunfos < 3 && perdidas < 3) {
		pc = aleatorio(1, 3);
		jugador = parseInt(
			prompt('Elige 1 para piedra, 2 para papel, 3 para tijera')
		);
		alert('Tu Eliges: ' + eleccion(jugador));
		alert('Pc Elige: ' + eleccion(pc));
		if (pc === jugador) {
			alert('EMPATE');
		} else if (
			(jugador === 1 && pc === 3) ||
			(jugador === 2 && pc === 1) ||
			(jugador === 3 && pc === 2)
		) {
			alert('GANASTE');
			triunfos = triunfos + 1;
		} else {
			alert('PERDISTE');
			perdidas = perdidas + 1;
		}
	}
	alert(
		'Ganaste ' +
			triunfos +
			' veces. Perdiste ' +
			perdidas +
			' veces. Empataste ' +
			empates +
			' veces.'
	);
	resetearJuego();
};
