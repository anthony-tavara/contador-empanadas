function lista_agregar(lista, elemento){
    if(!lista || !elemento)
        return

    lista.push(elemento)
}
function contador_actualizar(contador, valor){
    if(!contador)
        return
    
    contador.textContent = valor
}

const lista_empanadas = []
lista_agregar(lista_empanadas, {name: "Carne Suave", quantity: 0})
lista_agregar(lista_empanadas, {name: "Carne Picante", quantity:0})
lista_agregar(lista_empanadas, {name: "Humita", quantity:0})
lista_agregar(lista_empanadas, {name: "Jamon y queso", quantity:0})
lista_agregar(lista_empanadas, {name: "Bondiola", quantity:0})
lista_agregar(lista_empanadas, {name: "Queso y Cebolla", quantity:0})
lista_agregar(lista_empanadas, {name: "Roquefort", quantity:0})
lista_agregar(lista_empanadas, {name: "ChesseBurguer", quantity:0})
lista_agregar(lista_empanadas, {name: "Espinaca-Queso", quantity:0})
lista_agregar(lista_empanadas, {name: "Calabaza-Queso", quantity:0})
lista_agregar(lista_empanadas, {name: "Pollo BBQ", quantity:0})

const container = document.querySelector(".hamburguesas-container")

let index = 0
lista_empanadas.forEach(element => {
    let empanada = document.createElement("div")
    empanada.classList.add("container-hamburguesas_div")
    empanada.innerHTML =     `<h2 class="hamburguesas hamburguesa-${index}">${element.name}</h2>
    <p id="contador-${index}" class="contador">0</p>
    <i id="icono-mas${index}" class="icono-mas fa-sharp fa-solid fa-circle-plus icono-mas reproductor" ></i>
    <i id="icono-menos${index}" class="fa-sharp fa-solid fa-circle-minus icono-menos"></i>`

    let boton_agregar = empanada.querySelector(".icono-mas")
    let boton_sacar = empanada.querySelector(".icono-menos")

    let contador = empanada.querySelector(".contador")
    let intervalo

    evento_agregar(boton_agregar, "click", () =>{
        //objeto_modificar_cantidad(element.quantity, 1)
        element.quantity++
        contador_actualizar(contador, element.quantity)
    })

    evento_agregar(boton_agregar, "pointerdown", () => {
        intervalo = setInterval(() => {
            element.quantity++
            contador_actualizar(contador, element.quantity)
        }, 150);
    })

    evento_agregar(boton_agregar, "pointerup", () => {
        if(intervalo)
            clearInterval(intervalo)
    })
    evento_agregar(boton_agregar, "pointerleave", () => {
        if(intervalo)
            clearInterval(intervalo)
    }) 

    evento_agregar(boton_sacar, "click", () =>{
        //objeto_modificar_cantidad(element.quantity, 1)
        if(element.quantity < 1)
            return

        element.quantity--
        let contador = empanada.querySelector(".contador")
        contador_actualizar(contador, element.quantity)
    })

    evento_agregar(boton_sacar, "pointerdown", () => {
        if(element.quantity < 1)
            return

        intervalo = setInterval(() => {
            if(element.quantity < 2)
                clearInterval(intervalo)

            element.quantity--
            contador_actualizar(contador, element.quantity)
        }, 150);
    })

    evento_agregar(boton_sacar, "pointerup", () => {
        if(intervalo)
            clearInterval(intervalo)
    })
    evento_agregar(boton_sacar, "pointerleave", () => {
        if(intervalo)
            clearInterval(intervalo)
    }) 

    // Sonidos
    evento_agregar(boton_agregar, "click", () => sonido_reproducir(sonido_agregar, .001, .05, false))
    evento_agregar(boton_sacar, "click", () => sonido_reproducir(sonido_sacar, .03, .12, false))

    container.appendChild(empanada)
    index++
});

const boton_enviar_lista = document.getElementById('boton-enviar')
const botones_agregar = document.querySelectorAll(".icono-mas")
const botones_sacar = document.querySelectorAll(".icono-menos")

const empanadas = document.querySelectorAll(".container-hamburguesas_div")

const container_precio_final = document.getElementById("container-dinero")
const total = document.getElementById("total")
const h3_total = document.querySelector("h3")
const input_precio = document.getElementById("input-precio")
const boton_reinicio = document.getElementById("boton-reinicio")

const precio_final = document.getElementById("precio-final")
const cash = document.getElementById("cash")

const img_error = document.getElementById("img-error")

evento_agregar(boton_enviar_lista, "click", () => {
    console.log(empanadas)

    empanadas.forEach(empanada => {
        console.log(empanada)

        botones_agregar.forEach(boton => boton.style.display = "none");
        botones_sacar.forEach(boton => boton.style.display = "none");

        let contador = empanada.querySelector(".contador")
        if(contador.innerText == "0")
            empanada.style.display = "none"
    });

    let gasto = parseInt(input_precio.value)
    if(isNaN(gasto)){
        cash.style.display = "none"
        total.style.display = "none"
        precio_final.innerText = "No ingreso correctamente el monto."
        precio_final.style.color="#e27575"
        precio_final.style.fontSize ="2rem"
    }
    else{
        precio_final.innerText = gasto
        total.style.display = "block"
    }

    h3_total.style.display = "none"
    input_precio.style.display = "none"

    container_precio_final.style.display = "flex"
    boton_reinicio.style.display = "block"
    boton_enviar_lista.style.display = "none"
    img_error.style.display = "block"
})