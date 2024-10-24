import { heroes } from './09-multiples-import-export'


export const getHeroesByID = (ID)=> heroes.find((valor)=> valor.id === ID); /*--> el metodo find sirve para
encontrar rapidamente el primer elemento el cual cumpla con una condicion*/


export const getHeroesByOwner = (owner)=> heroes.filter((valor)=> valor.owner === owner);/*--> el metodo filter al igual
que find encuentra los elementos que cumplan con la condicion solo que es enste caso crea un arreglo(array)
el cual contiene todos los elementos que cumplan dicha condicion*/


// estas funciones se estan utilizando en el archivo 10-promesas.jsx