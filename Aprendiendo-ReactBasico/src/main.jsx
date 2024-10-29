import React from "react"; //--> este solo se utiliza en el padre
import ReactDOM from "react-dom/client"; //--> al igual que este.

import './Styles/globalStyles.css' //--> importa una hoja de estilos.

import { UseStateButton } from "./components/04-useState-button";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/*<Props title='prop' number={123} />--> title es un prop la cual se puede nombrar 
        de cualquier forma en este caso title y number se pueden crear todas las props que se requieran*/}

        <UseStateButton value={0} />

    </React.StrictMode>
) /*--> reactDOM crea una rama la cual con el . render() reenderizamos para que se muestre en la pagina y se actualize,
el React.StrictMode lo que hace es que selecciona el modo estricto el cual nos muestra errores y malas practicas.*/