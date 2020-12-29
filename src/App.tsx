import React, {useState} from 'react';
import Question from "./component/Question";


function App() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [score, setScore] = useState<number>(0);
  const [background, setBackground] = useState("initialAnswer");

  const generateQuestion = () => {
    const newList = [...questions, {
      id:Math.floor(Math.random() * 100),
      firstNumber: Math.floor(Math.random() * 10),
      secondNumber:Math.floor(Math.random() * 10),
      sign: ['+', '-', '*'][Math.floor(Math.random() * ['+', '-', '*'].length)],
      correctResult: '',
      yourResult: '',
    }]
    setQuestions(newList)
    setBackground("initialAnswer")

    console.log(newList)
  }
  const resetScore = () => {
    setScore(0)
  }
  const addAnswer = ( id:number, answer:string) => {
    const newList = questions.map(question => {

      if(question.id === id) {
        question.correctResult = eval(`${question.firstNumber}${question.sign}${question.secondNumber}`)
        question.yourResult = answer
      } if (question.id === id && +question.yourResult === +question.correctResult){
        setScore(score+1)
        setBackground("correctAnswer")
      } if (question.id === id && +question.yourResult !== +question.correctResult ) {
        setBackground("wrongAnswer")
      }
      return question
    })
    setQuestions(newList)
  }

  return (
    <div className="">
      <Question score={score} generateQuestion={generateQuestion}  questions={questions} addAnswer={addAnswer} background={background} resetScore={resetScore}/>

    </div>
  );
}

export default App;
