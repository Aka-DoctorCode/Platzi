// Variables globales
let ataqueJugador;
let ataqueEnemigo;

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
}
// Funcion para seleccionar la mascota del jugador
function seleccionarMascotaJugador() {
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
	seleccionarMascotaEnemigo();
}
// Funcion para seleccionar la mascota de la computadora
function seleccionarMascotaEnemigo() {
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
	} else if (ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') {
		crearMensaje('GANASTE');
	} else if (ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA') {
		crearMensaje('GANASTE');
	} else {
		crearMensaje('PERDISTE');
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

// Funcion para generar un numero aleatorio
function aleatorio(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

// Eventlistener para iniciar el juego despues de cargar la pagina
window.addEventListener('load', iniciarJuego);
