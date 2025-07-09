/**
 * Modifica la cantidad del objeto segun la unidad pasada.
 */
function objeto_modificar_cantidad(objeto, unidad_cambio){
    objeto += unidad_cambio
}
/**
 * Agregar al objeto el evento.
 */
function evento_agregar(objeto, tipo, evento){
    objeto.addEventListener(tipo, evento)
}

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

    evento_agregar(boton_agregar, "click", () =>{
        //objeto_modificar_cantidad(element.quantity, 1)
        element.quantity++
        let contador = empanada.querySelector(".contador")
        contador_actualizar(contador, element.quantity)
    })

    evento_agregar(boton_sacar, "click", () =>{
        //objeto_modificar_cantidad(element.quantity, 1)
        if(element.quantity < 1)
            return

        element.quantity--
        let contador = empanada.querySelector(".contador")
        contador_actualizar(contador, element.quantity)
    })
    container.appendChild(empanada)
    index++
});