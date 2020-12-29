import React from 'react'


const GameStart = ({ startGame}: GameStartProps) => {

    const play = () => {
        startGame();
    };
    return (
        <div>
            <h1>Click Play to start the Quiz</h1>
            <button  type="submit" onClick={play}>Play</button>

        </div>
    )

}
export default  GameStart