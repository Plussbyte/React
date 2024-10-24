
const promesaLarga = ()=>{
    return new Promise((resolve)=>{
        resolve('Promesa larga')
    })
}

promesaLarga()
    .then((x)=>{console.log(x)})//--> hacer promesas de esta manera es muy largo.

//----------------------

const promesaCorta = ()=> new Promise((resolve)=>resolve('Promesa corta'))
    
    promesaCorta()
        .then(console.log)//--> esta promesa es mas corta pero mas dificil de comprender.

//----------------------

const promesaFuncion = async ()=> 'Funcion la cual es una promesa'

promesaFuncion() 
    .then(console.log)//--> esto es una funcion la cual con la palabra reservada async se vuelve una promesa (mejor y sencilla).

//----------------------

const getImagen = async ()=>{

    try { //--> try y catch para manejar los errores

        const apiKey = 'aH5HbEjE7lw7NQ1TeEYJHKa0VM4ukf7C'    
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`)
        const {data} = await resp.json()
        const {url} = data.images.original

        const img = document.createElement('img')
        img.src = url

        document.body.append(img)
        
    } catch (error) {
        console.error(error)
    }
    
    
}

getImagen()