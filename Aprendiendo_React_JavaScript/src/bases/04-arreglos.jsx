

//const arregloFijo = new Array()  --> solo se invoca un arreglo de esta forma cuando queremos un valor fijo

const arreglo = [1,2,3,4]

//arreglo.push(5) --> (push) no es la mejor forma de agregar valores a nuestro arreglo 

const arreglo2 = [...arreglo,5,6] //--> esta es la mejora forma de agragar valores con el operador spread.

const arreglo3 = arreglo2.map(function(number){
      
    return number * 2 //--> tambien se puede con strings

}) // --> el metodo map se recibe una funcion con la cual se va a poder interactuar con todos los elementos del arreglo

console.log(arreglo)
console.log(arreglo2)
console.log(arreglo3)