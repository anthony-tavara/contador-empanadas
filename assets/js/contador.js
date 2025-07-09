const icono_cambiar_modo_oscuro = document.getElementById("icono-luna")
const icono_modo_musica = document.getElementById("img-empanada")

console.log(icono_modo_musica)

let sonido_fondo_reproduciendo = false

evento_agregar(icono_cambiar_modo_oscuro, "click", () => sonido_reproducir(sonido_cambiar_modo_colores, 0, 1, false))
evento_agregar(icono_modo_musica, "click", () => {
    icono_modo_musica.classList.toggle("animacion-cute")

    let current_time = sonido_fondo.currentTime
    if(!sonido_fondo_reproduciendo){
        sonido_reproducir(sonido_fondo, current_time, 1, false)
        sonido_fondo_reproduciendo = true
    }
    else{
        sonido_pausar(sonido_fondo)
        sonido_fondo_reproduciendo = false
    }
})

const pagina_body = document.getElementById('contador-body')

evento_agregar(icono_cambiar_modo_oscuro, "click", () => pagina_body.classList.toggle("modo-oscuro"))
