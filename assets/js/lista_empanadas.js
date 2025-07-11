function lista_agregar(lista, elemento){
    if(!lista || !elemento) return
    lista.push(elemento)
}
function contador_actualizar(contador, valor){
    if(!contador) return
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

const container = document.getElementById("lista-empanadas")

let index = 0
lista_empanadas.forEach(element => {
    let empanada = document.createElement("div")
    empanada.classList.add("lista__elemento")
    empanada.innerHTML =     `<h2 class="elemento__nombre">${element.name}</h2>
    <p class="elemento__contador">0</p>
    <i class="elemento__icono elemento__icono--agregar icono-mas fa-sharp fa-solid fa-circle-plus icono-mas reproductor" ></i>
    <i class="elemento__icono elemento__icono--sacar icono-menos fa-sharp fa-solid fa-circle-minus"></i>`

    let boton_agregar = empanada.querySelector(".icono-mas")
    let boton_sacar = empanada.querySelector(".icono-menos")

    let contador = empanada.querySelector(".elemento__contador")
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
        let contador = empanada.querySelector(".elemento__contador")
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

const boton_enviar_lista = document.getElementById('boton-mostrar-resumen')
const botones_agregar = document.querySelectorAll(".icono-mas")
const botones_sacar = document.querySelectorAll(".icono-menos")
const empanadas = document.querySelectorAll(".lista__elemento")

const resumen = document.getElementById("resumen-pedido")
const total = document.querySelector(".resumen__total")
const input_precio = document.getElementById("precio-input")
const boton_reinicio = document.getElementById("boton-reiniciar")

const precio_final = document.getElementById("precio-total")
const configuracion_precio = document.getElementById("configuracion-precio")
const img_error = document.getElementById("imagen-error")

evento_agregar(boton_enviar_lista, "click", () => {
    empanadas.forEach(empanada => {
        botones_agregar.forEach(boton => boton.classList.add("hidden"));
        botones_sacar.forEach(boton => boton.classList.add("hidden"));

        let contador = empanada.querySelector(".elemento__contador")
        if(contador.innerText == "0")
            empanada.classList.add("hidden")
    });

    let precio_empanada = parseInt(input_precio.value)
    let contadores = document.querySelectorAll(".elemento__contador")

    let total_cantidad = 0
    let empanadas_cantidad = 0
    contadores.forEach(contador => {
        contador.style.gridColumn = "10";
        total_cantidad += parseInt(contador.innerText) * precio_empanada
        if(parseInt(contador.innerText) != 0)
            empanadas_cantidad++
    });

    if(!isNaN(total_cantidad) && empanadas_cantidad != 0){
        precio_final.innerText = total_cantidad
    }else{
        total.style.color="#F87171"
        img_error.classList.remove("hidden")

        if(isNaN(total_cantidad) && empanadas_cantidad == 0)
            total.innerHTML = "No ingreso correctamente el precio <br>Ni ninguna empanada"
        else if(isNaN(total_cantidad))
            total.innerText = "No ingreso correctamente el precio"
        else
            total.innerText = "No ingreso ninguna empanada"
    }
    configuracion_precio.classList.add("hidden")
    resumen.insertBefore(container, total);
    resumen.classList.remove("hidden")
    sonido_reproducir(sonido_enviar_lista, 0, .5, false)
})

evento_agregar(boton_reinicio, "click", () => {
    sonido_reproducir(sonido_enviar_lista, .01, .5, false)

    setTimeout(() => {
        location.reload()
    }, 250);
})