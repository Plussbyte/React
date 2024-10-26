/*NOTA: Las props o proprieties se utilizan para la comunicacion entre componentes.*/

import PropTypes from "prop-types" //--> esta ..... se utiliza para condicionar a las props.

const Props = ({ title,number })=>{
    //console.log(props)
    return(
        <>
            <h1>{title}</h1>
            <p>{number + 5}</p>
        </>
    )
}

Props.propTypes = { // --> espesifica cosas de las props como tipo de valor si es obligatoria o no etc... .
    title: PropTypes.string.isRequired,//--> string o numbre ETC..., es el tipo de valor que debe resivir la prop.
    number: PropTypes.number.isRequired//--> isRequired significa que la prop es requerida(obligatoria).
}


Props.defaultProps = { // --> define el valor que van a tener las props por defecto.
    title: 'No se encontro el titulo',
    number: 1234,
    name: 'Javier' //--> se pueden definir props que aun no utilizas pero que vas a utilizar.
}


export default Props