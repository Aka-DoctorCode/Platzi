// Variables globales
let ataqueJugador;
let ataqueEnemigo;
let vidasJugador = 3;
let vidasEnemigo = 3;
let spanVidasJugador;
let spanVidasEnemigo;

// Funcion jugar
function iniciarJuego() {
	let botoMascotaJugador = document.getElementById('botonMascota');
	botoMascotaJugador.addEventListener('click', seleccionarMascotaJugador);

	let botonFuego = document.getElementById('botonFuego');
	botonFuego.addEventListener('click', ataqueFuego);
	let botonAgua = document.getElementById('botonAgua');
	botonAgua.addEventListener('click', ataqueAgua);
	let botonTierra = document.getElementById('botonTierra');
	botonTierra.addEventListener('click', ataqueTierra);

	let botonReiniciar = document.getElementById('botonReiniciar');
	botonReiniciar.addEventListener('click', reiniciarJuego);
}
// Funcion para seleccionar la mascota del jugador
function seleccionarMascotaJugador() {
	spanVidasJugador = document.getElementById('vidasJugador');
	let hipodoge = document.getElementById('hipodoge');
	let capipepo = document.getElementById('capipepo');
	let ratigueya = document.getElementById('ratigueya');
	// let langostelvis = document.getElementById('langostelvis');
	// let tucapalma = document.getElementById('tucapalma');
	// let pydos = document.getElementById('pydos');

	let spanMascotaJugador = document.getElementById('mascotaJugador');

	if (hipodoge.checked) {
		spanMascotaJugador.innerHTML = 'Hipodoge';
	} else if (capipepo.checked) {
		spanMascotaJugador.innerHTML = 'Capipepo';
	} else if (ratigueya.checked) {
		spanMascotaJugador.innerHTML = 'Ratigueya';
		// } else if (langostelvis.checked) {
		// 	spanMascotaJugador.innerHTML = 'Langostelvis';
		// } else if (tucapalma.checked) {
		// 	spanMascotaJugador.innerHTML = 'Tucapalma';
		// } else if (pydos.checked) {
		// 	spanMascotaJugador.innerHTML = 'Pydos';
	} else {
		alert('Por favor selecciona una mascota');
	}
	alert('Seleccionaste como tu mascota a: ' + spanMascotaJugador.innerHTML);
	spanVidasJugador.innerHTML = vidasJugador;
	seleccionarMascotaEnemigo();
}
// Funcion para seleccionar la mascota de la computadora
function seleccionarMascotaEnemigo() {
	spanVidasEnemigo = document.getElementById('vidasEnemigo');
	// let mascotaEnemigo = aleatorio(1, 6);
	let mascotaEnemigo = aleatorio(1, 3);

	let spanMascotaEnemigo = document.getElementById('mascotaEnemigo');

	if (mascotaEnemigo == 1) {
		spanMascotaEnemigo.innerHTML = 'Hipodoge';
	} else if (mascotaEnemigo == 2) {
		spanMascotaEnemigo.innerHTML = 'Capipepo';
	} else if (mascotaEnemigo == 3) {
		spanMascotaEnemigo.innerHTML = 'Ratigueya';
		// } else if (mascotaEnemigo == 4) {
		// 	spanMascotaEnemigo.innerHTML = 'Langostelvis';
		// } else if (mascotaEnemigo == 5) {
		// 	spanMascotaEnemigo.innerHTML = 'Tucapalma';
		// } else if (mascotaEnemigo == 6) {
		// 	spanMascotaEnemigo.innerHTML = 'Pydos';
	} else {
		alert('ERROR');
	}
	alert('La mascota del enemiga es: ' + spanMascotaEnemigo.innerHTML);
	spanVidasEnemigo.innerHTML = vidasEnemigo;

	let mostrarAtaques = document.getElementById('seleccionar-ataque');
	mostrarAtaques.hidden = false;

	let mostrarReinicar = document.getElementById('reiniciar');
	mostrarReinicar.style.display = 'none';
}

// Funciones de ataque del jugador
function ataqueFuego() {
	ataqueJugador = 'FUEGO';
	ataqueAleatorioEnemigo();
}
function ataqueAgua() {
	ataqueJugador = 'AGUA';
	ataqueAleatorioEnemigo();
}
function ataqueTierra() {
	ataqueJugador = 'TIERRA';
	ataqueAleatorioEnemigo();
}

// Funcion para generar un ataque aleatorio de la computadora
function ataqueAleatorioEnemigo() {
	let ataqueAleatorio = aleatorio(1, 3);
	if (ataqueAleatorio == 1) {
		ataqueEnemigo = 'FUEGO';
	} else if (ataqueAleatorio == 2) {
		ataqueEnemigo = 'AGUA';
	} else if (ataqueAleatorio == 3) {
		ataqueEnemigo = 'TIERRA';
	} else {
		alert('ERROR');
	}
	combate();
}

// Funcion Combate
function combate() {
	if (ataqueEnemigo == ataqueJugador) {
		crearMensaje('EMPATE');
	} else if (ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') {
		crearMensaje('GANASTE');
		vidasEnemigo--;
		spanVidasEnemigo.innerHTML = vidasEnemigo;
	} else if (ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') {
		crearMensaje('GANASTE');
		vidasEnemigo--;
		spanVidasEnemigo.innerHTML = vidasEnemigo;
	} else if (ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA') {
		crearMensaje('GANASTE');
		vidasEnemigo--;
		spanVidasEnemigo.innerHTML = vidasEnemigo;
	} else {
		crearMensaje('PERDISTE');
		vidasJugador--;
		spanVidasJugador.innerHTML = vidasJugador;
	}
	revisarVidas();
}

// Funcion revisar vidas
function revisarVidas() {
	if (vidasJugador == 0) {
		mensajeFinal('PERDISTE');
	} else if (vidasEnemigo == 0) {
		mensajeFinal('GANASTE');
	}
}

// Funcion para imprimir mensaje
function crearMensaje(resultado) {
	let sectionMensajes = document.getElementById('mensajes');

	let parrafo = document.createElement('p');
	parrafo.innerHTML =
		'Tu mascota ataco con ' +
		ataqueJugador +
		' y la mascota del enemigo ataco con ' +
		ataqueEnemigo +
		' - ' +
		resultado;

	sectionMensajes.appendChild(parrafo);
}

function mensajeFinal(resultadoFinal) {
	let sectionMensajes = document.getElementById('mensajes');

	let parrafoFinal = document.createElement('h2');
	parrafoFinal.innerHTML = resultadoFinal;

	sectionMensajes.appendChild(parrafoFinal);

	let botonFuego = document.getElementById('botonFuego');
	botonFuego.disabled = true;
	let botonAgua = document.getElementById('botonAgua');
	botonAgua.disabled = true;
	let botonTierra = document.getElementById('botonTierra');
	botonTierra.disabled = true;

	let mostrarReinicar = document.getElementById('reiniciar');
	mostrarReinicar.style.display = 'block';
}

function reiniciarJuego() {
	location.reload();
}

// Funcion para generar un numero aleatorio
function aleatorio(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

// Eventlistener para iniciar el juego despues de cargar la pagina
window.addEventListener('load', iniciarJuego);
