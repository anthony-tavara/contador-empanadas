/**
 * Agregar al objeto el evento.
 */
function evento_agregar(objeto, tipo, evento){
    objeto.addEventListener(tipo, evento)
}

/**
 * Modifica la cantidad del objeto segun la unidad pasada.
 */
function objeto_modificar_cantidad(objeto, unidad_cambio){
    objeto += unidad_cambio
}

function intervalo_agregar(funcion, tiempo){
    setInterval(() => {
        funcion
    }, tiempo);
}