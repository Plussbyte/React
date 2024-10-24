
const apiKey = 'aH5HbEjE7lw7NQ1TeEYJHKa0VM4ukf7C' //llave de una api en este caso la cree yo de https://developers.giphy.com/.

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`) //aquí llamamos a la api

peticion
    .then((resp)=> resp.json()) // --> promesas en cadena
    .then( ({data})=>{
        const {url} = data.images.original
        console.log(url)

        const img = document.createElement('img')
        img.src = url

        document.body.append(img)
    })
    .catch( console.warn )

