import React from "react"; //--> este solo se utiliza en el padre
import ReactDOM from "react-dom/client"; //--> al igual que este.
import { App } from "./secondApp";
import { ExprecionesEnElementos } from "./exprecionesEnElementos";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
        <ExprecionesEnElementos />
    </React.StrictMode>
) /*--> reactDOM crea una rama la cual con el . render() reenderizamos para que se muestre en la pagina y se actualize,
el React.StrictMode lo que hace es que selecciona el modo estricto el cual nos muestra errores y malas practicas.*/