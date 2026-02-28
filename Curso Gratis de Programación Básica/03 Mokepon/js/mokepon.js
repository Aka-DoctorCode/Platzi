// --- DOM Elements ---
const sectionSeleccionarAtaque = document.getElementById('sectionSeleccionarAtaque')
const sectionReiniciar = document.getElementById('sectionReiniciar')
const botonMascotaJugador = document.getElementById('botonMascota')
const botonReiniciar = document.getElementById('botonReiniciar')
const sectionSeleccionarMascota = document.getElementById('sectionSeleccionarMascota')
const spanMascotaJugador = document.getElementById('mascotaJugador')
const spanMascotaEnemigo = document.getElementById('mascotaEnemigo')
const spanVidasJugador = document.getElementById('vidasJugador')
const spanVidasEnemigo = document.getElementById('vidasEnemigo')
const sectionMensajes = document.getElementById('resultado')
const ataquesDelJugador = document.getElementById('ataquesDelJugador')
const ataquesDelEnemigo = document.getElementById('ataquesDelEnemigo')
const contenedorTarjetas = document.getElementById('contenedorTarjetas')
const contenedorAtaques = document.getElementById('contenedorAtaques')

// --- Global Variables ---
let mokepones = []
let ataqueJugador = []
let ataqueEnemigo
let opcionDeMokepones
let inputHipodoge
let inputCapipepo
let inputRatigueya
let mascotaJugador
let ataquesMokepon
let botonFuego
let botonAgua
let botonTierra
let botones = []
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
        inputHipodoge = document.getElementById('hipodoge')
        inputCapipepo = document.getElementById('capipepo')
        inputRatigueya = document.getElementById('ratigueya')
    })
    sectionReiniciar.style.display = 'none'
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

// --- Pet Selection Logic ---
function seleccionarMascotaJugador() {
    sectionSeleccionarMascota.style.display = 'none'
    sectionSeleccionarAtaque.style.display = 'flex'
    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = inputHipodoge.id.charAt(0).toUpperCase() + inputHipodoge.id.slice(1)
        mascotaJugador = inputHipodoge.id
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = inputCapipepo.id.charAt(0).toUpperCase() + inputCapipepo.id.slice(1)
        mascotaJugador = inputCapipepo.id
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = inputRatigueya.id.charAt(0).toUpperCase() + inputRatigueya.id.slice(1)
        mascotaJugador = inputRatigueya.id
    } else {
        alert('Selecciona una mascota')
        return;
    }
    const ataques = extraerAtaques(mascotaJugador);
    mostrarAtaques(ataques);
    seleccionarMascotaEnemigo()
}

function extraerAtaques(mascotaJugador) {
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre.toLowerCase()) {
            return mokepones[i].ataques;
        }
    }
    return [];
}

function mostrarAtaques(ataques) {
    contenedorAtaques.innerHTML = '';
    ataques.forEach((ataques) => {
        ataquesMokepon = `<button id="${ataques.id}" class="botonDeAtaque bAtaque">${ataques.nombre}</button>`

        contenedorAtaques.innerHTML += ataquesMokepon
    })
    botonFuego = document.getElementById('botonFuego')
    botonAgua = document.getElementById('botonAgua')
    botonTierra = document.getElementById('botonTierra')
    botones = document.querySelectorAll('.bAtaque')    
}

function secuenciaAtaque() {
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            if (e.target.textContent === 'Fuego 🔥') {
                ataqueJugador.push('FUEGO')
                console.log(ataqueJugador)
                boton.style.background = '#293032ff' 
            } else if (e.target.textContent === 'Agua 💧') {
                ataqueJugador.push('AGUA')
                console.log(ataqueJugador)
                boton.style.background = '#293032ff' 
            } else if (e.target.textContent === 'Tierra 🌱') {
                ataqueJugador.push('TIERRA')
                console.log(ataqueJugador)
                boton.style.background = '#293032ff' 
            } 
        })
    })
}

function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(0, mokepones.length - 1)
    spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatoria].nombre
    secuenciaAtaque()
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
            color = "rgba(0, 255, 0, 1)";
            break;
        case 2:
            color = "rgba(255, 255, 0, 1)";
            break;
        case 1:
            color = "rgba(255, 127, 0, 1)";
            break;
        case 0:
            color = "rgba(255, 0, 0, 1)";
            break;
        default:
            color = "rgba(255, 255, 255, 1)";
    }
    elemento.style.color = color;
}

window.addEventListener('load', iniciarJuego)