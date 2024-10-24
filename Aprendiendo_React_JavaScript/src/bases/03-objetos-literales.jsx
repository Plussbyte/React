
const datos = {
    nombre: 'Daniel',
    apellidos: 'Correa',
    edad: 19,
    direccion:{
        carrera: 80,
        numero1: 116,
        numero2: 46,
        ciudad: 'medellin'
    }
}

// const datos2 = datos -->  nunca hacer esto para clonar un objeto.

const datos2 = {...datos} /* --> esta es la forma correcta de clonar un objeto, 
los tres puntos (...) son un operador que se llama spread.*/

datos2.nombre = 'Javier'

console.log(datos)
console.log(`La ciudad de ${datos.nombre} es ${datos.direccion.ciudad}`)
console.log(datos2.nombre)