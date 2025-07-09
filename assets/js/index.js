const indexBody = document.getElementById('index-body')
const icono_cambiar_modo_oscuro = document.getElementById('icono-luna-index')

evento_agregar(icono_cambiar_modo_oscuro, "click", () => {
    indexBody.classList.toggle("modo-oscuro")
    sonido_reproducir(sonido_cambiar_modo_colores, 0, 1, false)
})