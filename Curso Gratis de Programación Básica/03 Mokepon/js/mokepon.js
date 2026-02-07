// --- DOM Elements ---
const sectionSeleccionarAtaque = document.getElementById('sectionSeleccionarAtaque')
const sectionReiniciar = document.getElementById('sectionReiniciar')
const botonMascotaJugador = document.getElementById('botonMascota')
const botonFuego = document.getElementById('botonFuego')
const botonAgua = document.getElementById('botonAgua')
const botonTierra = document.getElementById('botonTierra')
const botonReiniciar = document.getElementById('botonReiniciar')
const sectionSeleccionarMascota = document.getElementById('sectionSeleccionarMascota')
const inputHipodoge = document.getElementById('hipodoge')
const inputCapipepo = document.getElementById('capipepo')
const inputRatigueya = document.getElementById('ratigueya')
const spanMascotaJugador = document.getElementById('mascotaJugador')
const spanMascotaEnemigo = document.getElementById('mascotaEnemigo')
const spanVidasJugador = document.getElementById('vidasJugador')
const spanVidasEnemigo = document.getElementById('vidasEnemigo')
const sectionMensajes = document.getElementById('resultado')
const ataquesDelJugador = document.getElementById('ataquesDelJugador')
const ataquesDelEnemigo = document.getElementById('ataquesDelEnemigo')
const contenedorTarjetas = document.getElementById('contenedorTarjetas')

// --- Global Variables ---
let mokepones = []
let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

class Mokepon {
    constructor(nombre, foto, vida,) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

let hipodoge = new Mokepon('Hipodoge', './assets/Hipodoge.png', 5)
let capipepo = new Mokepon('Capipepo', './assets/Capipepo.png', 5)
let ratigueya = new Mokepon('Ratigueya', './assets/Ratigueya.png', 5)

hipodoge.ataques.push(
    { nombre: 'Agua 💧', id: 'botonAgua' },
    { nombre: 'Agua 💧', id: 'botonAgua' },
    { nombre: 'Agua 💧', id: 'botonAgua' },
    { nombre: 'Tierra 🌱', id: 'botonTierra' },
    { nombre: 'Fuego 🔥', id: 'botonFuego' }
)

capipepo.ataques.push(
    { nombre: 'Tierra 🌱', id: 'botonTierra' },
    { nombre: 'Tierra 🌱', id: 'botonTierra' },
    { nombre: 'Tierra 🌱', id: 'botonTierra' },
    { nombre: 'Agua 💧', id: 'botonAgua' },
    { nombre: 'Fuego 🔥', id: 'botonFuego' }
)

ratigueya.ataques.push(
    { nombre: 'Fuego 🔥', id: 'botonFuego' },
    { nombre: 'Fuego 🔥', id: 'botonFuego' },
    { nombre: 'Fuego 🔥', id: 'botonFuego' },
    { nombre: 'Agua 💧', id: 'botonAgua' },
    { nombre: 'Tierra 🌱', id: 'botonTierra' }
)

mokepones.push(hipodoge, capipepo, ratigueya)

// --- Game Initialization ---
function iniciarJuego() {
    sectionSeleccionarAtaque.style.display = 'none'
    mokepones.forEach((mokepone) => {
        opcionDeMokepones = `
        <input type="radio" name="mascota" id=${mokepone.nombre.toLowerCase()} />
            <label class="tarjetaDeMokepon" for=${mokepone.nombre.toLowerCase()}>
                <p>${mokepone.nombre}</p>
                <img src="${mokepone.foto}" alt="${mokepone.nombre}">
            </label>`
        contenedorTarjetas.innerHTML += opcionDeMokepones
    })
    sectionReiniciar.style.display = 'none'
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
    botonFuego.addEventListener('click', ataqueFuego)
    botonAgua.addEventListener('click', ataqueAgua)
    botonTierra.addEventListener('click', ataqueTierra)
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

// --- Pet Selection Logic ---
function seleccionarMascotaJugador() {
    sectionSeleccionarMascota.style.display = 'none'
    sectionSeleccionarAtaque.style.display = 'flex'
    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = 'Hipodoge'
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = 'Capipepo'
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = 'Ratigueya'
    } else {
        alert('Selecciona una mascota')
        // Si no selecciona, recargamos para evitar errores de flujo
        location.reload()
    }
    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(1, 3)
    if (mascotaAleatoria == 1) {
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
    } else if (mascotaAleatoria == 2) {
        spanMascotaEnemigo.innerHTML = 'Capipepo'
    } else {
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
    }
}

// --- Combat Logic ---
function ataqueFuego() {
    ataqueJugador = 'FUEGO'
    ataqueAleatorioEnemigo()
}
function ataqueAgua() {
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnemigo()
}
function ataqueTierra() {
    ataqueJugador = 'TIERRA'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1, 3)
    if (ataqueAleatorio == 1) {
        ataqueEnemigo = 'FUEGO'
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'AGUA'
    } else {
        ataqueEnemigo = 'TIERRA'
    }
    combate()
}

function combate() {
    if (ataqueEnemigo == ataqueJugador) {
        crearMensaje("EMPATE")
    } else if (
        (ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') ||
        (ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') ||
        (ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA')
    ) {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
        actualizarColorVidas(spanVidasEnemigo, vidasEnemigo)
    } else {
        crearMensaje("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
        actualizarColorVidas(spanVidasJugador, vidasJugador)
    }
    revisarVidas()
}

function revisarVidas() {
    if (vidasEnemigo == 0) {
        crearMensajeFinal("FELICITACIONES! Ganaste :)")
    } else if (vidasJugador == 0) {
        crearMensajeFinal('Lo siento, perdiste :(')
    }
}

function crearMensaje(resultado) {
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')
    // Seteamos el ID dinámicamente para que el CSS aplique los colores
    sectionMensajes.innerHTML = resultado
    sectionMensajes.className = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelJugador.classList.add(ataqueJugador)
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo
    nuevoAtaqueDelEnemigo.classList.add(ataqueEnemigo)
    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal) {
    sectionMensajes.innerHTML = resultadoFinal
    botonFuego.disabled = true
    botonAgua.disabled = true
    botonTierra.disabled = true
    sectionReiniciar.style.display = 'block'
}

function reiniciarJuego() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function actualizarColorVidas(elemento, valor) {
    let color;
    switch (valor) {
        case 3:
            color = "rgba(0, 255, 0, 1)";   // Verde
            break;
        case 2:
            color = "rgba(255, 255, 0, 1)"; // Amarillo
            break;
        case 1:
            color = "rgba(255, 127, 0, 1)"; // Naranja
            break;
        case 0:
            color = "rgba(255, 0, 0, 1)";   // Rojo
            break;
        default:
            color = "rgba(255, 255, 255, 1)"; // Blanco por defecto
    }
    elemento.style.color = color;
}

window.addEventListener('load', iniciarJuego)