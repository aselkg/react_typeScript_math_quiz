type Question = {
    id: number,
    firstNumber: number;
    secondNumber: number;
    sign: string;
    correctResult: string,
    yourResult: string,
};


interface QuestionProps {
    questions: Array<Question>;
    generateQuestion: GenerateQuestion;
    addAnswer: AddAnswer;
    score: number,
    background: string
    resetScore:ResetScore;
}

interface QuestionListProps {
    questions: Array<Question>;
    addAnswer:AddAnswer;
    score: number,
    background: string,
    generateQuestion: GenerateQuestion;
    resetScore:ResetScore
}
interface ScoreProps {
    score:number,
    currentQuestion: number
}
interface GameStartProps{
    startGame: StartGame;


}
interface EndGameProps {
    score: number,
    questions: Array<Question>
    startGame: StartGame
    playAgain:PlayAgain
    gameOver: string
}

type GenerateQuestion = () => void;
type AddAnswer = (id: number, answer: string) => void;
type StartGame = () => void;
type PlayAgain = () => void;
type ResetScore = () => void;