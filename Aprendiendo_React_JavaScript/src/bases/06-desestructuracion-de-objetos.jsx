
const datos = {
    nombre:'daniel',
    edad:23,
    cedula:1000349323
}

console.log(datos.nombre,datos.edad,datos.cedula) //--> no es la forma correcta de llamar las propiedades de un objeto (muy largo).

const {nombre,edad,cedula} = datos //--> los {} indican que va a extraer de esta manera desestructura el objeto.

console.log(nombre,edad,cedula)//--> de esta manera es mucho mas facil obtener datos.


const datos2 = {...datos} //--> usamos un objeto literal

const desestructuracion = ({nombre,edad,cedula,ID = '00001'})=>{ //--> de esta manera de desestructura en una funcion

    console.log(nombre,edad,cedula,ID) 
}//--> el ID es una variable las cuales podemos añadir junto con los otros parametros y asignarles un valor

desestructuracion(datos2)


const cambioNombres = ({nombre,edad,cedula})=>({
    name: nombre,
    age: edad,
    ID: cedula 
})

const {name,age,ID} = cambioNombres(datos)

console.log(name,age,ID)

const objectOfObject = {
    name:'Estas son las medidas',
    medidas:{
        ancho:'10',
        largo:'10',
        alto:'5'
    }

}

/*const {medidas:{ancho,largo,alto}} = objectOfObject --> Esto se usa para sacar variables de objetos dentro de objetos 
aun  que no es la mejor opcion*/

const {medidas} = objectOfObject //--> esto es lo que mas se acostumbra hacer (mejor opcion)
const {ancho,largo,alto} = medidas 

console.log(`Las medidas son de ${ancho}x${largo}x${alto}`)
