import React from "react";
import Question from "./Question";
import '../index.css';

const QuestionList = ({questions, addAnswer, score, background, generateQuestion, resetScore}: QuestionListProps) => {
    return (
        <div>
                <Question
                    questions={questions}
                    addAnswer={addAnswer}
                    background={background}
                    generateQuestion={generateQuestion}
                    score={score}
                    resetScore={resetScore}
                />


        </div>
    );
}

export default QuestionList;
