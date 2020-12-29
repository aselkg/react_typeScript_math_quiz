import React from 'react'

const Score =  ({score, currentQuestion}:ScoreProps) => {

    return(
        <div>
            <p>Question {currentQuestion+1}/25</p>
            <p>Your total score is {score}</p>
        </div>
    )
}
export default Score;