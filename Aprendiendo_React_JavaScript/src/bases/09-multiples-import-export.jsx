export const heroes = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];

// export default heroes --> Esta es la manera en que podemos exportar un elemento por defecto (solo uno).
// import heroes '../data/heroes' --> si es una exportacion por defecto se deberia ver asi en el archivo de importacion.
// si hay exportaciones individuales hay que desestructuar { variableIndividual }.

/* 
export{ --> esta es otra forma de exportar elementos
    heroes as default, --> exportacion por defecto
    variable --> exportacion individual
}
*/
