const sonido_agregar = new Audio("assets/sounds/sonido_plus.wav")
const sonido_sacar = new Audio("assets/sounds/sonido_less.wav")
const sonido_fondo = new Audio('assets/sounds/musica_cute.mp3')
const sonido_enviar_lista = new Audio('assets/sounds/sonido_final.mp3')
const sonido_cambiar_modo_colores = new Audio('assets/sounds/cambiar_modo.wav')

/**
 * Reproduce el audio con los parametros pasados.
 * @param {*} current_time - Desde que tiempo empieza a reproducir el audio.
 * @param {*} volume - 0.0 - 1.0
 * @param {*} loop - True o False
 * @returns 
 */
function sonido_reproducir(sonido, current_time, volume, loop){
    if(!sonido){
        console.error("sonido no encontrado.")
        return
    }
    sonido.currentTime = current_time
    sonido.volume = volume
    sonido.loop = loop
    sonido.play()
}

function sonido_pausar(sonido){
    sonido.pause()
}

/**
 * Devuelve si el formato se puede repoducir en ese navegador.
 */
function sonido_puede_reproducir_formato(sonido, formato){
    sonido.canPlayType(formato)
}