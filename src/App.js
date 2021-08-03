import React from "react"
import "./App.css"
import Bird from "./components/Bird"

const App = () => {
    return (
        <div className="app">
            <div className="game-container">
                <Bird/>
            </div>
        </div>
    )
}

export default App