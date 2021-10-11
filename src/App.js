 import { useState } from 'react';
import './App.css';
import EndScreen from './Components/EndScreen';
import MainMenu from './Components/MainMenu';
import Quiz from './Components/Quiz';

function App() {

  const [quizState , setquizState] = useState("menu");
  const [score, setScore ] = useState(0);

  return (
    <div className="App">
       {quizState === 'menu' && <MainMenu quizState={quizState} setquizState={setquizState}/>}
       {quizState === 'quiz' && <Quiz quizState={quizState} setquizState={setquizState} score={score} setScore={setScore} />}
       {quizState === 'endScreen' && <EndScreen setquizState={setquizState} score={score} setScore={setScore}/>}
        
    </div>
  );
}

export default App;