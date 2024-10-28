import React from "react"
import ReactDOM from "react-dom/client"

import { CounterApp } from "./counterApp"

ReactDOM.createRoot(document.getElementById('root')).render(

    <React.StrictMode>
        <CounterApp value={123}/>
    </React.StrictMode>

)