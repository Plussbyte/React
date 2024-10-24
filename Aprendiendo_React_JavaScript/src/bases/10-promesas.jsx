import { getHeroesByID } from "./08-importacion-y-exportacion.basico";

const promesaSimple = new Promise((resolve,reject)=>{ //--> Esta es una promesa pero no es la mejor forma de ejecutarla.

    setTimeout(() => {
        const heroe = getHeroesByID(2)
        resolve(heroe)
        //reject('no se pudo encontrar el heroe')
    }, 3000);

})

promesaSimple.then((x)=>{
    console.log('then Promesa ejecutada correctamente despues de 3 segundos', x)
})

.catch((err)=> console.warn(err)) //--> Esta es una promesa pero no es la mejor forma de ejecutarla.

console.log(promesaSimple)



const getHeroesByIDAsync = (ID)=>{ //--> Esta es una funcion que contiene una promesa (Mejor manera de ejecutarla).

    return new Promise((resolve,reject)=>{ //--> resolve si es correcta, reject para manejar el error cuando no es correcta.

        setTimeout(() => {  //--> temporizador
            const heroe = getHeroesByID(ID)
            if(heroe){  //--> undefine por defecto es false.
                resolve(heroe)                
            }else{
                reject('no se pudo encontrar el heroe') //--> manejamos la promesa con la condicional. 
            }
            
        }, 3000);

    })

}

/*getHeroesByIDAsync(10).then((x)=>{console.log('then Promesa ejecutada correctamente despues de 3 segundos', x)    

}).catch((x)=> console.warn(x))*/ //--> esta es una forma de mostrar la promesa aun que no la mejor.

getHeroesByIDAsync(4) //--> Mejor forma de mostrar las promesas
    .then(console.log) 
    .catch(console.warn)
/*
Tanto como el console.log como el warn son funciones por lo cual resiven un parametro y en este caso
al dejar estas funciones asi resiven por defecto el parametro de then y catch respectivamente.
*/

