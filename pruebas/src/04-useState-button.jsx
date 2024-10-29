import { useState } from "react"
import PropTypes from "prop-types"

export const UseStateButton = ({value})=>{

    const [contador, setContador] = useState(value)

    const addNumber = ()=> setContador(contador + 1)
    

    const removeNumber = ()=> setContador(contador - 1)
        
    const reset = ()=> setContador(value)
    

    return(
        <>
            <h1>Bienvenidos</h1>
            <h2> { contador } </h2>
            <button onClick={addNumber} >+1</button>
            <button onClick={removeNumber} >-1</button>
            <button onClick={reset} >Reset</button>
        </>
    )
}

UseStateButton.propTypes = {
    value: PropTypes.number
}