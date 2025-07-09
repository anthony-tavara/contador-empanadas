contadorNumero=0

function restar(){
    contadorNumero+=-1
    contadorGeneral.innerHTML=contadorNumero
}

var contadorGeneral = document.getElementById("contador-general")
var signosMas = document.getElementsByClassName("icono-mas");    
var signosMenos = document.getElementsByClassName("icono-menos");    
var contadores = document.getElementsByClassName("contador");

function sumar(){
    contadorNumero+=1
    contadorGeneral.innerHTML=contadorNumero
}
for (var i = 0; i < signosMenos.length; i++) {
    signosMenos[i].addEventListener('click', restar);
}
for (var i = 0; i < signosMas.length; i++) {
    signosMas[i].addEventListener('click', sumar);
} 

var contadorN0=0
var contador0=document.getElementById('contador-0')
var mas0=document.getElementById('icono-mas0')
mas0.addEventListener('click',sumar0)
var menos0=document.getElementById('icono-menos0')
menos0.addEventListener('click',restar0)
function sumar0(){
    contadorN0+=1
    contador0.innerHTML=contadorN0
}
function restar0(){
    contadorN0+=-1
    contador0.innerHTML=contadorN0
}

var contadorN1=0
var contador1=document.getElementById('contador-1')
var mas1=document.getElementById('icono-mas1')
mas1.addEventListener('click',sumar1)
var menos1=document.getElementById('icono-menos1')
menos1.addEventListener('click',restar1)
function sumar1(){
    contadorN1+=1
    contador1.innerHTML=contadorN1
}
function restar1(){
    contadorN1+=-1
    contador1.innerHTML=contadorN1
}

var contadorN2=0
var contador2=document.getElementById('contador-2')
var mas2=document.getElementById('icono-mas2')
mas2.addEventListener('click',sumar2)
var menos2=document.getElementById('icono-menos2')
menos2.addEventListener('click',restar2)
function sumar2(){
    contadorN2+=1
    contador2.innerHTML=contadorN2
}
function restar2(){
    contadorN2+=-1
    contador2.innerHTML=contadorN2
}

var contadorN3=0
var contador3=document.getElementById('contador-3')
var mas3=document.getElementById('icono-mas3')
mas3.addEventListener('click',sumar3)
var menos3=document.getElementById('icono-menos3')
menos3.addEventListener('click',restar3)
function sumar3(){
    contadorN3+=1
    contador3.innerHTML=contadorN3
}
function restar3(){
    contadorN3+=-1
    contador3.innerHTML=contadorN3
}

var contadorN4=0
var contador4=document.getElementById('contador-4')
var mas4=document.getElementById('icono-mas4')
mas4.addEventListener('click',sumar4)
var menos4=document.getElementById('icono-menos4')
menos4.addEventListener('click',restar4)
function sumar4(){
    contadorN4+=1
    contador4.innerHTML=contadorN4
}
function restar4(){
    contadorN4+=-1
    contador4.innerHTML=contadorN4
}

var contadorN5=0
var contador5=document.getElementById('contador-5')
var mas5=document.getElementById('icono-mas5')
mas5.addEventListener('click',sumar5)
var menos5=document.getElementById('icono-menos5')
menos5.addEventListener('click',restar5)
function sumar5(){
    contadorN5+=1
    contador5.innerHTML=contadorN5
}
function restar5(){
    contadorN5+=-1
    contador5.innerHTML=contadorN5
}

var contadorN6=0
var contador6=document.getElementById('contador-6')
var mas6=document.getElementById('icono-mas6')
mas6.addEventListener('click',sumar6)
var menos6=document.getElementById('icono-menos6')
menos6.addEventListener('click',restar6)
function sumar6(){
    contadorN6+=1
    contador6.innerHTML=contadorN6
}
function restar6(){
    contadorN6+=-1
    contador6.innerHTML=contadorN6
}

var contadorN7=0
var contador7=document.getElementById('contador-7')
var mas7=document.getElementById('icono-mas7')
mas7.addEventListener('click',sumar7)
var menos7=document.getElementById('icono-menos7')
menos7.addEventListener('click',restar7)
function sumar7(){
    contadorN7+=1
    contador7.innerHTML=contadorN7
}
function restar7(){
    contadorN7+=-1
    contador7.innerHTML=contadorN7
}

var contadorN8=0
var contador8=document.getElementById('contador-8')
var mas8=document.getElementById('icono-mas8')
mas8.addEventListener('click',sumar8)
var menos8=document.getElementById('icono-menos8')
menos8.addEventListener('click',restar8)
function sumar8(){
    contadorN8+=1
    contador8.innerHTML=contadorN8
}
function restar8(){
    contadorN8+=-1
    contador8.innerHTML=contadorN8
}

var contadorN9=0
var contador9=document.getElementById('contador-9')
var mas9=document.getElementById('icono-mas9')
mas9.addEventListener('click',sumar9)
var menos9=document.getElementById('icono-menos9')
menos9.addEventListener('click',restar9)
function sumar9(){
    contadorN9+=1
    contador9.innerHTML=contadorN9
}
function restar9(){
    contadorN9+=-1
    contador9.innerHTML=contadorN9
}

var contadorN10=0
var contador10=document.getElementById('contador-10')
var mas10=document.getElementById('icono-mas10')
mas10.addEventListener('click',sumar10)
var menos10=document.getElementById('icono-menos10')
menos10.addEventListener('click',restar10)
function sumar10(){
    contadorN10+=1
    contador10.innerHTML=contadorN10
}
function restar10(){
    contadorN10+=-1
    contador10.innerHTML=contadorN10
}


// Logica para cada contador de empanada
// var contadorNCS=0

// var iconoMasCS=document.getElementById('icono-mas_cs')
// var iconoMenosCS=document.getElementById('icono-menos_cs')
// iconoMenosCS.addEventListener('click',restarIndividual)
// iconoMasCS.addEventListener('click',sumarIndividual)
// function restarIndividual(){
//     contadorNCS+=-1
//     contadorCS.innerHTML=contadorNCS
// }
// function sumarIndividual(){
//     contadorNCS+=1
//     contadorCS.innerHTML=contadorNCS
// }

// Intento 2
// lista=[]
// var contadoresNuevo=document.getElementsByClassName('contadores-nuevo')
// // console.log(contadoresNuevo)
// for (contador1 in contadoresNuevo){
//     lista+=contador1
//     console.log(lista)
// }
// console.log(lista)

// let boton = document.querySelector(".reproductor")
// let audioEtiqueta = document.querySelector("audio")

// boton.addEventListener("click", () => {
// audioEtiqueta.setAttribute("src", "paginahamburguesa\sonido.mp3")
// audioEtiqueta.play()
// console.log(`Reproduciendo: ${audioEtiqueta.src}`)
// })

function playAudioPlus(){
    new Audio('sonido_plus.wav').play();
}
function playAudioLess(){
    new Audio('sonido_less.wav').play();
    
}

mas0.addEventListener('click',playAudioPlus)
mas1.addEventListener('click',playAudioPlus)
mas2.addEventListener('click',playAudioPlus)
mas3.addEventListener('click',playAudioPlus)
mas4.addEventListener('click',playAudioPlus)
mas5.addEventListener('click',playAudioPlus)
mas6.addEventListener('click',playAudioPlus)
mas7.addEventListener('click',playAudioPlus)
mas8.addEventListener('click',playAudioPlus)
mas9.addEventListener('click',playAudioPlus)
mas10.addEventListener('click',playAudioPlus)
menos0.addEventListener('click',playAudioLess)
menos1.addEventListener('click',playAudioLess)
menos2.addEventListener('click',playAudioLess)
menos3.addEventListener('click',playAudioLess)
menos4.addEventListener('click',playAudioLess)
menos5.addEventListener('click',playAudioLess)
menos6.addEventListener('click',playAudioLess)
menos7.addEventListener('click',playAudioLess)
menos8.addEventListener('click',playAudioLess)
menos9.addEventListener('click',playAudioLess)
menos10.addEventListener('click',playAudioLess)

function playAudioCute(){
const xd=new Audio('musica_cute.mp3');
xd.play()
    // var contadorVolumen=0
    // if (empanada.classList=="animacion-cute"){
    // lol=xd.volume=0.9;
    // console.log(lol)
    // contadorVolumen+=1
    // console.log(contadorVolumen)

    // }else{
    //     xd.volume=0;
    //     console.log(xd)
    //     console.log(contadorVolumen)
    // }


}
var empanada=document.getElementById('img-empanada')
function cambiar(){
    empanada.classList.toggle("animacion-cute");
    
}

var contadorE=0
function mostrar(){
   contadorE+=1
    if (contadorE==1){

        empanada.removeEventListener('click',playAudioCute)
}
}
var contadorE=0
if (contadorE==0){
    empanada.addEventListener('click',playAudioCute)
    empanada.addEventListener('click',mostrar)
}
    



let luna=document.getElementById('icono-luna')
let contadorBody=document.getElementById('contador-body')
contadorBody.classList.add("modo-claro")
luna.addEventListener('click',cambiarModo)
luna.addEventListener('click',cambiarModo2)
let contadorCambiar=0

function cambiarModo(){
    if(contadorCambiar==0){
        contadorBody.classList.add("modo-oscuro");
        contadorCambiar+=1;
    }else if(contadorCambiar==1){
        contadorBody.classList.remove("modo-oscuro");
        contadorBody.classList.add("modo-claro");
        contadorCambiar+=-1;
    }
}


// function styles (elemento){
//     elemento.addEventListener('click',añadir=>{
//     elemento.setAttribute(`style`,"font-size: 1.6rem;color: #a8e6ba;text-shadow: #451c45");
//     }
//     )
// }

// styles(mas0)
function cambiarModo2(){
    audio=new Audio('cambiar_modo.wav').play();

    
}

var btnEnviar=document.getElementById('boton-enviar')
var btnReinicio=document.getElementById('boton-reinicio')
btnEnviar.addEventListener("click",cambiarHamburguesa)

var hamburguesa0=document.getElementById('hamburguesa-0')
var hamburguesa1=document.getElementById('hamburguesa-1')
var hamburguesa2=document.getElementById('hamburguesa-2')
var hamburguesa3=document.getElementById('hamburguesa-3')
var hamburguesa4=document.getElementById('hamburguesa-4')
var hamburguesa5=document.getElementById('hamburguesa-5')
var hamburguesa6=document.getElementById('hamburguesa-6')
var hamburguesa7=document.getElementById('hamburguesa-7')
var hamburguesa8=document.getElementById('hamburguesa-8')
var hamburguesa9=document.getElementById('hamburguesa-9')
var hamburguesa10=document.getElementById('hamburguesa-10')
var input=document.getElementById('input-precio')
var precioFinal=document.getElementById('precio-final')

var contadorPrecio=0
var total=document.getElementById('total')
var iconoDinero=document.getElementById('cash')
function cambiarHamburguesa(){
    // hamburguesa0.style.background="white"
    mas0.classList.add('none')
    mas1.classList.add('none')
    mas2.classList.add('none')
    mas3.classList.add('none')
    mas4.classList.add('none')
    mas5.classList.add('none')
    mas6.classList.add('none')
    mas7.classList.add('none')
    mas8.classList.add('none')
    mas9.classList.add('none')
    mas10.classList.add('none')
    menos0.classList.add('none')
    menos1.classList.add('none')
    menos2.classList.add('none')
    menos3.classList.add('none')
    menos4.classList.add('none')
    menos5.classList.add('none')
    menos6.classList.add('none')
    menos7.classList.add('none')
    menos8.classList.add('none')
    menos9.classList.add('none')
    menos10.classList.add('none')

    hamburguesa0.classList.add('container-hamburguesas_div__resumen')
    hamburguesa1.classList.add('container-hamburguesas_div__resumen' )
    hamburguesa2.classList.add('container-hamburguesas_div__resumen')
    hamburguesa3.classList.add('container-hamburguesas_div__resumen')
    hamburguesa4.classList.add('container-hamburguesas_div__resumen')
    hamburguesa5.classList.add('container-hamburguesas_div__resumen')
    hamburguesa6.classList.add('container-hamburguesas_div__resumen')
    hamburguesa7.classList.add('container-hamburguesas_div__resumen')
    hamburguesa8.classList.add('container-hamburguesas_div__resumen')
    hamburguesa9.classList.add('container-hamburguesas_div__resumen')
    hamburguesa10.classList.add('container-hamburguesas_div__resumen')
    // hamburguesa0.style.transition="0.2s"
    // hamburguesa1.style.transition="0.2s"
    // hamburguesa2.style.transition="0.2s"
    // hamburguesa3.style.transition="0.2s"
    // hamburguesa4.style.transition="0.2s"
    // hamburguesa5.style.transition="0.2s"
    // hamburguesa6.style.transition="0.2s"
    // hamburguesa7.style.transition="0.2s"
    // hamburguesa8.style.transition="0.2s"
    // hamburguesa9.style.transition="0.2s"
    // hamburguesa10.style.transition="0.2s"


    // hamburguesa0.classList.remove('container-hamburguesas_div')
    // hamburguesa1.classList.remove('container-hamburguesas_div')
    // hamburguesa2.classList.remove('container-hamburguesas_div')
    // hamburguesa3.classList.remove('container-hamburguesas_div')
    hamburguesa0.style.color="white"

    btnEnviar.classList.add('none','transition_02s')
    new Audio('sonido_final.mp3').play();

    // num0=contador0.innerHTML
    // num1=contador0.innerHTML
    // num2=contador0.innerHTML
    // num3=contador0.innerHTML
    // num4=contador0.innerHTML
    // num5=contador0.innerHTML
    // num6=contador0.innerHTML
    // num7=contador0.innerHTML
    // num8=contador0.innerHTML
    // num9=contador0.innerHTML
    // num10=contador0.innerHTML
    
    // lista=[num0,num1,num3]
    // for(num in lista){
    //     contadorPrecio+=parseInt(num)
    //     console.log(contadorPrecio)
    // }


    


    btnReinicio.classList.remove('none')
    if (contador0.innerHTML==0){
        hamburguesa0.classList.add('none')
    }
    if(contador1.innerHTML==0){
        hamburguesa1.classList.add('none')}
    if (contador0.innerHTML==0){
        hamburguesa0.classList.add('none')
    }
    if(contador2.innerHTML==0){
        hamburguesa2.classList.add('none')}
    if (contador5.innerHTML==0){
        hamburguesa5.classList.add('none')
    }
    if(contador3.innerHTML==0){
        hamburguesa3.classList.add('none')}
    if (contador4.innerHTML==0){
        hamburguesa4.classList.add('none')
    }
    if(contador6.innerHTML==0){
        hamburguesa6.classList.add('none')}
    if (contador7.innerHTML==0){
        hamburguesa7.classList.add('none')
    }
    if(contador8.innerHTML==0){
        hamburguesa8.classList.add('none')}
    if(contador9.innerHTML==0){
        hamburguesa9.classList.add('none')}
    if(contador10.innerHTML==0){
        hamburguesa10.classList.add('none')}
    valor=input.value
    input.classList.add('none')
    
    var precio=contadorGeneral.innerHTML*valor
    if(precio>0){
        precioFinal.innerHTML= `${precio}`
        
    }
    else{
        precio=1
        console.log(total)
        total.style.display="none"
        iconoDinero.style.display="none"
        precioFinal.style.color="#e27575"
        precioFinal.style.fontSize="2rem"
        precioFinal.style.lineHeight="2rem"
        precioFinal.innerHTML= `No Ingresaste el monto de cada empanada`
        

    }
    

    total.classList.remove('none')
    iconoDinero.classList.remove('none')
    
    
}


iconoDinero.classList.add('none')
total.classList.add('none')

// btnReinicio.addEventListener('click',()=>{
//     pregunta=prompt("Estas Seguro?")
//     pregunta.lower()
//     if (pregunta=='si'){

//     }

//     new Audio('sonido_final.mp3').play();
// })

// function playAudioLess(){
//     new Audio('sonido_less.wav').play();
    
// }
