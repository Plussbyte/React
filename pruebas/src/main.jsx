import React from "react"
import ReactDOM from "react-dom/client"

import { UseStateButton } from "./04-useState-button"

ReactDOM.createRoot(document.getElementById('root')).render(

    <React.StrictMode>
        <UseStateButton value={0} />
    </React.StrictMode>

)