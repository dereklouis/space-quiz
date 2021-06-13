import { useRef, useState } from 'react';
import { questions } from './questions';
import './styles/quiz.css';

const Quiz = (props) => {
  const backButton = useRef(null);
  const backRocket = useRef(null);
  const nextButton = useRef(null);
  const nextRocket = useRef(null);
  const aButtonRipple = useRef(null);
  const bButtonRipple = useRef(null);
  const cButtonRipple = useRef(null);
  const dButtonRipple = useRef(null);

  const [userAnswers, setUserAnswers] = useState(
    localStorage.getItem('spaceQuizAnswersArr').split(',')[0] === ''
      ? []
      : localStorage.getItem('spaceQuizAnswersArr').split(',')
  );

  const handleBackNext = (e) => {
    if (e.currentTarget.id === 'backButton') {
      backButton.current.className = 'backSpin';
      backRocket.current.className = 'backRocketSpin';
      props.setCurrentSlide(props.currentSlide - 1);
    } else {
      nextButton.current.className = 'nextSpin';
      nextRocket.current.className = 'nextRocketSpin';
      props.setCurrentSlide(props.currentSlide + 1);
    }
  };

  const resetAnimation = (e, ref) => {
    ref.current.className = '';
  };

  const handleAnswer = (e, answer, answerRipple) => {
    const x = e.clientX - e.target.getBoundingClientRect().left;
    const y = e.clientY - e.target.getBoundingClientRect().top;
    answerRipple.current.style.left = `${x}px`;
    answerRipple.current.style.top = `${y}px`;
    answerRipple.current.className = 'answerRripple';
    let answersArray = localStorage.getItem('spaceQuizAnswersArr').split(',');
    console.log('answers array', answersArray);
    if (answersArray[0] !== '') {
      answersArray.push(answer);
    } else {
      answersArray[0] = answer;
    }
    console.log('new answers array', answersArray);
    localStorage.setItem('spaceQuizAnswersArr', answersArray);
    setUserAnswers(answersArray);
  };

  const answerButtonDisabledCheck = () => {
    if (
      localStorage.getItem('spaceQuizAnswersArr').split(',')[
        props.currentSlide
      ] !== undefined
    ) {
      if (
        localStorage.getItem('spaceQuizAnswersArr').split(',')[
          props.currentSlide
        ].length === 1
      ) {
        return true;
      } else {
        return false;
      }
    }
    return false;
  };

  const checkRightWrong = (answer) => {
    if (
      typeof userAnswers[props.currentSlide] === 'string' &&
      userAnswers[props.currentSlide] !== ''
    ) {
      if (answer === userAnswers[props.currentSlide]) {
        if (answer === questions[props.currentSlide].correct) {
          return 'correctSelected';
        } else {
          return 'wrongSelected';
        }
      } else {
        if (answer === questions[props.currentSlide].correct) {
          return 'correctNotSelected';
        } else {
          return 'wrongNotSelected';
        }
      }
    }
  };

  return (
    <div
      id="quizPanel"
      className={props.quizStatus ? 'panelShow' : 'panelHide'}
    >
      {props.currentSlide === -1 ? (
        <div id="tableOfContents" className="FCAIC">
          <h2 id="quizContentsTitle">QUIZ CONTENTS:</h2>
          <ul id="quizContentsList">
            <li>1 - 10: Classical Astronomy</li>
            <li>11 - 20: Classic NASA</li>
            <li>21 - 30: The ISS</li>
            <li>31 - 40: The Solar System</li>
            <li>41 - 50: Modern Observatories & Exploration</li>
          </ul>
        </div>
      ) : (
        <div id="questionPanel" className="FCAIC">
          <div id="questionTitleContainer" className="FCAIC">
            <h2 id="questionTitle">{questions[props.currentSlide].question}</h2>
          </div>
          <div id="answerButtonsDiv" className="FCAIC">
            <div className="answerButtonsRow">
              <button
                className={`answerButton ${checkRightWrong('a')}`}
                id="answerA"
                onClick={(e) => handleAnswer(e, 'a', aButtonRipple)}
                disabled={answerButtonDisabledCheck()}
              >
                {questions[props.currentSlide].answers[0]}
                <span
                  ref={aButtonRipple}
                  onAnimationEnd={(e) => resetAnimation(e, aButtonRipple)}
                />
              </button>
              <button
                className={`answerButton ${checkRightWrong('b')}`}
                id="answerB"
                onClick={(e) => handleAnswer(e, 'b', bButtonRipple)}
                disabled={answerButtonDisabledCheck()}
              >
                {questions[props.currentSlide].answers[1]}
                <span
                  ref={bButtonRipple}
                  onAnimationEnd={(e) => resetAnimation(e, bButtonRipple)}
                />
              </button>
            </div>
            <div className="answerButtonsRow">
              <button
                className={`answerButton ${checkRightWrong('c')}`}
                id="answerC"
                onClick={(e) => handleAnswer(e, 'c', cButtonRipple)}
                disabled={answerButtonDisabledCheck()}
              >
                {questions[props.currentSlide].answers[2]}
                <span
                  ref={cButtonRipple}
                  onAnimationEnd={(e) => resetAnimation(e, cButtonRipple)}
                />
              </button>
              <button
                className={`answerButton ${checkRightWrong('d')}`}
                id="answerD"
                onClick={(e) => handleAnswer(e, 'd', dButtonRipple)}
                disabled={answerButtonDisabledCheck()}
              >
                {questions[props.currentSlide].answers[3]}
                <span
                  ref={dButtonRipple}
                  onAnimationEnd={(e) => resetAnimation(e, dButtonRipple)}
                />
              </button>
            </div>
          </div>
        </div>
      )}
      <button
        id="backButton"
        onClick={handleBackNext}
        ref={backButton}
        onAnimationEnd={(e) => resetAnimation(e, backButton)}
        disabled={props.currentSlide <= -1}
      >
        <img
          alt="Rocket"
          id="backRocket"
          src="images/rocket.png"
          ref={backRocket}
          onAnimationEnd={(e) => resetAnimation(e, backRocket)}
        />
      </button>
      <button
        id="nextButton"
        onClick={handleBackNext}
        ref={nextButton}
        onAnimationEnd={(e) => resetAnimation(e, nextButton)}
        disabled={props.currentSlide >= userAnswers.length}
      >
        <img
          alt="Rocket"
          id="nextRocket"
          src="images/rocket.png"
          ref={nextRocket}
          onAnimationEnd={(e) => resetAnimation(e, nextRocket)}
        />
      </button>
    </div>
  );
};

export default Quiz;
