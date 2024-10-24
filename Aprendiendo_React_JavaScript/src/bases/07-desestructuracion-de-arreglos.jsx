const arreglo = ['Hola','como','estas']

const [,,P3] = arreglo //--> de esta forma desestructuramos un arreglo 

console.log(P3) //--> para llegar a una posicion del arreglo sin tener que asignar una variable se realisa por comas(,)


const functionArreglo = ()=>{
    return ['ABC',123]
}

const [letras,numeros] = functionArreglo()

console.log(letras,numeros)


const arrayEJM = (valor)=>{
    return [valor,()=>{console.log('Hola mundo')}]
}

const [nombre,setNombre] = arrayEJM('Bienvenido')



console.log(nombre)

setNombre()