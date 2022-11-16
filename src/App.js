import { useState } from 'react';
import './App.css';
import data from './data'
function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [score, setScore] = useState(0);


  const handleAnswerOptionClick = (isCorrect) => {

    if(isCorrect){
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if(nextQuestion < data.length){
      setCurrentQuestion(nextQuestion);
    }
    else{
      setShowScore(true);
    }
    
  }

  const handleTryAgain = () => {
    setCurrentQuestion(0);
    setShowScore(false);
    setScore(0);
  }

  return (
    <div className="app">
      {
        showScore ?
          <div className="score-section">
            <h1> You scored {score} out of {data.length}</h1>
            <button type='button' onClick={handleTryAgain} className="btn-tryagain">Start Again</button>
          </div>
          :
          <>
            <div className="question-section">
              <div className='question-count'>
                <span>Qustion {currentQuestion + 1} </span> / {data.length}
              </div>
              <div className="question-text">{data[currentQuestion].questionText}</div>
            </div>

            <div className="answer-section">
              {
                data[currentQuestion].answersOption.map((ansOption, index) => (
                  <button key={index} type='button' onClick={() => handleAnswerOptionClick(ansOption.isCorrect)}>{ansOption.answerText}</button>
                ))
              }
            </div>
          </>
      }




    </div>
  );
}

export default App;
