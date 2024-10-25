const parrafo = 'Esto es un parrafo desde una constante' //--> se imprime normalmente

const arreglo = ['hola','esto es','un arreglo',1,2,3] //--> se imprime todo junto pero los elementos estan separados

const codigo = {
    name:'rodrigo',
    lastname: 'martinez'
} /*--> error no se puede pasar un objeto completo a imprimir ya que esto no esta permitido, mas bien se pueden pasar
las propiedades*/


const saludo = (name)=> `Hola ${name} como estas?`

export const ExprecionesEnElementos = ()=>{
    return(
        <>
            <p>{parrafo}</p>
            <p>{arreglo}</p>
            <p>{codigo.name}</p>
            <code>{JSON.stringify(codigo)}</code>
            <p>{saludo('Samuel')}</p>
        </>// el JSON.stringify() hace que se copie el valor tal cual del elemento
    )
} // para trabajar con expresiones dentro de los elementos es necesario poner los sinmbolos {}.
 