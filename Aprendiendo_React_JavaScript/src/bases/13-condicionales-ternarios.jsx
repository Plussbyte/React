
const booleano = true

let text = ''

if(booleano){
    text = console.log('El condicional largo esta activo')
}else{
    text = console.log('El condicional largo esta inactivo')
} // --> esto es un condicional pero es muy largo y no es la manera optima de hacerlo.


//--------------------------------


const condicionalTernario = (booleano)? 'Condicional ternario activo' : 'Condicional ternario inactivo'
//--> estructura [(condicion) ? si se cumple : si no se cumple ]
//--> este operador ternario es una manera mucho mas rapida y optima de trabajar con condiciones.
console.log(condicionalTernario)


//--------------------------------


const condicionalCorto = booleano && 'Condicional corto activo'
//--> este condicional corto nos ayuda a no tener que poner el else si no queremos ponerlo.

console.log(condicionalCorto)

