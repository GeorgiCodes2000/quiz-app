import { useState } from "react";
import { Questions } from "../Components/Questions"


function Quiz({quizState, setquizState, score, setScore}) {

    const [currentQustion, setCurrentQuestion] = useState(0);
    const [choose, setChoose] = useState(null);

    function nextQ() {
        setChoose(null);
         if(Questions[currentQustion].answer === choose){
             setScore(score+1);
         }
         setCurrentQuestion(currentQustion + 1);
    }
    
    function finishQ() {
        if(Questions[currentQustion].answer === choose){
            setScore(score+1);
        }
        setquizState('endScreen');
    }

    return(
        <div className="Quiz">
            <h1>{Questions[currentQustion].question}</h1>
            <div className="options">
                <button onClick={()=>setChoose('A')}>{Questions[currentQustion].optionA}</button>
                <button onClick={()=>setChoose('B')}>{Questions[currentQustion].optionB}</button>
                <button onClick={()=>setChoose('C')}>{Questions[currentQustion].optionC}</button>
             </div>

             {currentQustion !== Questions.length-1 ? <button onClick={nextQ} className="next">Next Question</button> : <button onClick={finishQ}>Finish</button> }
            
        </div>
    );
}

export default Quiz;