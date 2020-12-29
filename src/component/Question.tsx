import React, {useState} from 'react'
import Score from "./Score"
import GameStart from "./GameStart";
import EndGame from "./EndGame";

const Question = ({questions, score, generateQuestion, addAnswer, background, resetScore}: QuestionProps) => {
    const [isGameOn, setIsGameOn] = useState(false)
    const [isSubmit, setIsSubmit] = useState("show")
    const [isNext, setIsNext] = useState("hide")
    const [isQuestion, setIsQuestion] = useState("show")
    const [gameOver, setGameOver] = useState("hide")
    const [answer, setAnswer] = useState<string>('')
    const [currentQuestion, setCurrentQuestion] = useState<number>(0);
    let question = questions[currentQuestion]
    // console.log(questions.length)

    const nextQuestion = () => {
        setCurrentQuestion(currentQuestion + 1)
        setIsSubmit("show")
        setIsNext("hide")
        generateQuestion()
        if (currentQuestion > 10)endGame()
    };

    const endGame = () => {
        setIsQuestion("hide")
        setGameOver("show")

    }
    const startGame = () => {
        generateQuestion()
        setIsGameOn(true)
        setCurrentQuestion(0)


    };
    const playAgain = () => {
        setCurrentQuestion(0)
        setIsQuestion("show")
        setGameOver("hide")
        resetScore()
    };
    const handleChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setAnswer(e.target.value);
    };

    const handleSubmit = (id: number) => {
        addAnswer(id, answer);
        setIsSubmit("hide")
        setIsNext("show")
        setAnswer('')

        // console.log(answer)
    };
    return (
        <div  className="main">

            {isGameOn ?
                <div className="">



                        <div className={isQuestion}>

                            <Score score={score} currentQuestion={currentQuestion}/>

                            <span className={background}>
                                {question.firstNumber}{question.sign}{question.secondNumber}=
                                <span className={isSubmit}>
                                    <input className="numInput" type="text" value={answer} onChange={handleChange}/>
                                    <button type="submit" onClick={() => handleSubmit(question.id)}>ok</button>
                                </span>

                            </span>
                            <div className="buttonNext">
                                <button type="submit" onClick={nextQuestion} className={isNext}>Next</button>
                            </div>

                        </div>
                    <div>
                        <EndGame score={score} questions={questions} startGame={startGame} playAgain={playAgain} gameOver={gameOver}/>
                    </div>

                </div>
                :
                <GameStart startGame={startGame}/>

            }


        </div>
    )

}
export default Question