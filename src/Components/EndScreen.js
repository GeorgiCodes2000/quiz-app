import { Questions } from "./Questions"

function EndScreen({setquizState, score, setScore}) {

    function restart() {
        setScore(0);
        setquizState('quiz');
    }

    return(
        <div className="Endscreen">
            <h1>Quiz Finished</h1>
            <h2>{score + '/' + Questions.length}</h2>
            <button onClick={restart}>Start Quiz</button>
        </div>
    );
}

export default EndScreen;