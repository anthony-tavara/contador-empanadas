const icono_cambiar_modo_oscuro = document.getElementById("cambiar-modo-oscuro")
const icono_modo_musica = document.getElementById("imagen-empanada")

console.log(icono_modo_musica)

let sonido_fondo_reproduciendo = false

evento_agregar(icono_cambiar_modo_oscuro, "click", () => sonido_reproducir(sonido_cambiar_modo_colores, .05, .5, false))
evento_agregar(icono_modo_musica, "click", () => {
    icono_modo_musica.classList.toggle("animacion-cute")

    let current_time = sonido_fondo.currentTime
    if(!sonido_fondo_reproduciendo){
        sonido_reproducir(sonido_fondo, current_time, .5, false)
        sonido_fondo_reproduciendo = true
    }
    else{
        sonido_pausar(sonido_fondo)
        sonido_fondo_reproduciendo = false
    }
})

const pagina_body = document.querySelector('body')
evento_agregar(icono_cambiar_modo_oscuro, "click", () => pagina_body.classList.toggle("modo-oscuro"))

const eslogan = document.getElementById("eslogan")
const esloganes = [
    "Pedí fácil, comé rico",
    "Tu pedido perfecto en segundos",
    "Pedí sin complicaciones",
    "Tu contador de empanadas favorito",
    "Empanadas para todos los gustos",
    "¡Que no falte ninguna!",
    "Tu app de empanadas favorita",
    "Innovando el pedido de empanadas"
]
let i = 0
setInterval(() => {
    eslogan.innerText = esloganes[i++ % esloganes.length]
}, 10000);

let mostrando_eslogan = true
setInterval(() => {
    eslogan.style.opacity = mostrando_eslogan ? "0" : "1";
    mostrando_eslogan = !mostrando_eslogan;
}, 5000);
