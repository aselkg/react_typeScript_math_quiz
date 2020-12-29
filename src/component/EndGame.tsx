import React from 'react'

const EndGame =  ({score, questions, playAgain, gameOver}: EndGameProps) => {
    let passingScore = 80;
    let percentage = Math.round((score/(questions.length - 1))*100);
    console.log(score)
    console.log(questions.length-1)
    console.log(percentage)

    let isPassed = percentage > passingScore;

    const play = () => {
        playAgain()
    };
    return (
        <div className={gameOver}>
        {isPassed?
            <div>
            <div>Good job! You have {percentage}% correct.</div>
                <button onClick={play}>Play again</button>
            </div>
            :
            <div>
                <p>You should keep practicing</p>
                <button onClick={play}>Play again</button>
            </div>
            }
        </div>
    )
}
export default EndGame;