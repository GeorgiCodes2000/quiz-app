function MainMenu({quizState, setquizState}) {

    return(
        <div className="Menu">
            <button onClick={()=>setquizState('quiz')}>Start Quiz</button>
        </div>
    );
}

export default MainMenu;