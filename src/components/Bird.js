// /src/components/Bird.js

import React, { useCallback, useEffect, useState } from "react"

const Bird = () => {
    const [birdPos, setBirdPos] = useState(0)

    const handleSpriteChange = useCallback(() => {
        const newPos = birdPos + 236
        setBirdPos(newPos === 944 ? 0 : newPos)
    }, [birdPos])

    useEffect(() => {
        const interval = setInterval(() => {
            handleSpriteChange()
        }, 100)
        return () => clearInterval(interval)
    }, [handleSpriteChange])

    return (
        <div style={style}>
            <img 
            src={require("../bird spritesheet.png").default} 
            alt="flappy bird"
            style={{
                transform: `translateX(-${birdPos}px)`
            }}
            />
        </div>
    )
}

export default Bird

const style = {
    height: "162px",
    width: "236px",
    overflow: "hidden"
}