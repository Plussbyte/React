
const nameFunction = function(name){ //--> es valido pero no es la mejor manera de invocar funciones.
    return `Hola ${name} como estas?`
}

const arrowFunction = (text)=>{ //--> es una de las mejores formas pero no la mejor aun.
    return `Espero te ecuentres ${text}`
}

const shortFunction = (letter)=> `Bienvenid${letter} a nuestra pagina` //--> mejor manera corto rapido y sencillo.


const objectFunction =()=>({
    ID: 12345,
    userName: 'Juaquin220'
}) //--> como este no es un valor primitivo hay que enserrarlo en parentecis para que la funcion pueda devolver en este caso el objeto

console.log(nameFunction('Samuel'))
console.log(arrowFunction('muy bien'))
console.log(shortFunction('o'))
console.log(objectFunction())