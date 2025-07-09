
let indexBody=document.getElementById('index-body')
let luna=document.getElementById('icono-luna-index')
luna.addEventListener('click',cambiarModoIndex)

indexBody.classList.add("modo-claro")
let contadorCambiar=0

function cambiarModoIndex(){
    if(contadorCambiar==0){
        indexBody.classList.add("modo-oscuro");
        contadorCambiar+=1;
    }else if(contadorCambiar==1){
        indexBody.classList.remove("modo-oscuro");
        indexBody.classList.add("modo-claro");
        contadorCambiar+=-1;
    }
}

function playAudioPlus(){
    new Audio('../sounds/cambiar_modo.wav').play();
}
var botonIncio=document.getElementById('boton-inicio')
luna.addEventListener('click',playAudioPlus)
botonIncio.addEventListener('click',playAudioPlus)
