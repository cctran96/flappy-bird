import React from "react"
import "./App.css"
import Bird from "./components/Bird"

const App = () => {
    return (
        <div style={{height: "100vh", width: "100vw", display: "flex", alignItems: "center", justifyContent: "center"}}>
            <Bird/>
        </div>
    )
}

export default App