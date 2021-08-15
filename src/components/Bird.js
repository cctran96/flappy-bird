// /src/components/Bird.js

import React, { useCallback, useEffect, useState } from "react"

const Bird = () => {
    const [birdPos, setBirdPos] = useState(0)
    const [birdY, setBirdY] = useState(-344)

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

    const jumpSize = 15

    const handleBirdFall = useCallback(() => {
        const newPos = birdY + jumpSize
        setBirdY(newPos > 0 ? 0 : newPos)
    }, [birdY])

    useEffect(() => {
        const interval = setInterval(() => {
            handleBirdFall()
        }, 500)
        return () => clearInterval(interval)
    }, [handleBirdFall])

    const handleBirdJump = useCallback(e => {
        const newPos = birdY - jumpSize
        if (e.key === " ") setBirdY(newPos < -688 ? -688 : newPos)
    }, [birdY])

    useEffect(() => {
        window.addEventListener("keypress", handleBirdJump)

        return () => window.removeEventListener("keypress", handleBirdJump)
    }, [handleBirdJump])

    return (
        <div className="bird" style={{transform: `translateY(${birdY}px)`}}>
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