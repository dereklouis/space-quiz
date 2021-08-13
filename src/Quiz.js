import { useRef } from 'react';
import { questions, answersArray } from './questions';
import './styles/quiz.css';

const Quiz = (props) => {
  const questionPanel = useRef(null);
  const backButton = useRef(null);
  const backRocket = useRef(null);
  const nextButton = useRef(null);
  const nextRocket = useRef(null);
  const aButtonRipple = useRef(null);
  const bButtonRipple = useRef(null);
  const cButtonRipple = useRef(null);
  const dButtonRipple = useRef(null);
  const backButtonMask = useRef(null);
  const nextButtonMask = useRef(null);
  const slideDirection = useRef(null);

  const handleBackNext = (e) => {
    if (props.currentSlide === -1) {
      nextButton.current.className = 'nextSpin';
      nextRocket.current.className = 'nextRocketSpin';
      props.setCurrentSlide(props.currentSlide + 1);
    } else if (props.currentSlide === 50) {
      backButton.current.className = 'backSpin';
      backRocket.current.className = 'backRocketSpin';
      props.setCurrentSlide(props.currentSlide - 1);
    } else {
      if (e.currentTarget.id === 'backButton') {
        backButton.current.className = 'backSpin';
        backRocket.current.className = 'backRocketSpin';
        questionPanel.current.classList.add('questionPanelShrink');
        slideDirection.current = 'slideBack';
      } else {
        nextButton.current.className = 'nextSpin';
        nextRocket.current.className = 'nextRocketSpin';
        questionPanel.current.classList.add('questionPanelShrink');
        slideDirection.current = 'slideNext';
      }
    }
    backButtonMask.current.classList.remove('displayNone');
    nextButtonMask.current.classList.remove('displayNone');
  };

  const resetAnimation = (e, ref, backNext) => {
    ref.current.className = '';
    if (backNext) {
      backButtonMask.current.classList.add('displayNone');
      nextButtonMask.current.classList.add('displayNone');
    }
  };

  const handleAnswer = (e, answer, answerRipple) => {
    const x = e.clientX - e.target.getBoundingClientRect().left;
    const y = e.clientY - e.target.getBoundingClientRect().top;
    answerRipple.current.style.left = `${x}px`;
    answerRipple.current.style.top = `${y}px`;
    answerRipple.current.className = 'answerRripple';
    let answersArray = localStorage.getItem('spaceQuizAnswersArr').split(',');
    if (answersArray[0] !== '') {
      answersArray.push(answer);
    } else {
      answersArray[0] = answer;
    }
    localStorage.setItem('spaceQuizAnswersArr', answersArray);
    props.setUserAnswers(answersArray);
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
      typeof props.userAnswers[props.currentSlide] === 'string' &&
      props.userAnswers[props.currentSlide] !== ''
    ) {
      if (answer === props.userAnswers[props.currentSlide]) {
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

  let rightAnswers = 0;

  for (let i = 0; i < props.userAnswers.length; i++) {
    if (props.userAnswers[i] === answersArray[i]) {
      rightAnswers++;
    }
  }

  let currentScore = Math.ceil((rightAnswers / props.userAnswers.length) * 100);

  const QPTransition = (e) => {
    if (
      questionPanel.current.classList.contains('questionPanelShrink') &&
      slideDirection.current === 'slideBack'
    ) {
      props.setCurrentSlide(props.currentSlide - 1);
      questionPanel.current.classList.remove('questionPanelShrink');
    } else if (
      questionPanel.current.classList.contains('questionPanelShrink') &&
      slideDirection.current === 'slideNext'
    ) {
      props.setCurrentSlide(props.currentSlide + 1);
      questionPanel.current.classList.remove('questionPanelShrink');
    }
  };

  const finalTitle = () => {
    if (currentScore === 100) {
      return 'SPACE MASTER';
    } else if (currentScore >= 90) {
      return 'ADMIRAL';
    } else if (currentScore >= 80) {
      return 'CAPTAIN';
    } else if (currentScore >= 70) {
      return 'LIEUTENANT';
    } else if (currentScore >= 60) {
      return 'ENSIGN';
    } else {
      return 'SPACE CADET';
    }
  };

  return (
    <div
      id="quizPanel"
      className={props.quizStatus ? 'panelShow' : 'panelHide'}
    >
      {props.currentSlide === -1 && (
        <div id="tableOfContents" className="FCAIC">
          <h2 id="quizContentsTitle">CONTENTS:</h2>
          <ul id="quizContentsList">
            <li>1 - 10: Classical Astronomy</li>
            <li>11 - 20: Classic NASA</li>
            <li>21 - 30: The ISS</li>
            <li>31 - 40: The Solar System</li>
            <li>41 - 50: Modern Observatories & Exploration</li>
          </ul>
        </div>
      )}
      {props.currentSlide > -1 && props.currentSlide < 50 && (
        <div
          id="questionPanel"
          className={`FCAIC`}
          ref={questionPanel}
          onTransitionEnd={QPTransition}
        >
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
                {questions[props.currentSlide].units
                  ? props.units === 'metric'
                    ? questions[props.currentSlide].answersMetric[0]
                    : questions[props.currentSlide].answersImperial[0]
                  : questions[props.currentSlide].answers[0]}
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
                {questions[props.currentSlide].units
                  ? props.units === 'metric'
                    ? questions[props.currentSlide].answersMetric[1]
                    : questions[props.currentSlide].answersImperial[1]
                  : questions[props.currentSlide].answers[1]}
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
                {questions[props.currentSlide].units
                  ? props.units === 'metric'
                    ? questions[props.currentSlide].answersMetric[2]
                    : questions[props.currentSlide].answersImperial[2]
                  : questions[props.currentSlide].answers[2]}
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
                {questions[props.currentSlide].units
                  ? props.units === 'metric'
                    ? questions[props.currentSlide].answersMetric[3]
                    : questions[props.currentSlide].answersImperial[3]
                  : questions[props.currentSlide].answers[3]}
                <span
                  ref={dButtonRipple}
                  onAnimationEnd={(e) => resetAnimation(e, dButtonRipple)}
                />
              </button>
            </div>
          </div>
          <p id="currentScore">{`Current Score: ${
            isNaN(currentScore) ? 0 : currentScore
          }%`}</p>
          <p id="currentQuestion">{`Question ${
            props.currentSlide + 1
          } of 50`}</p>
        </div>
      )}
      {props.currentSlide === 50 && (
        <div id="completionDiv" className="FCAIC">
          <h2 id="congrats">CONGRATULATIONS</h2>
          <p className="finalMiddleLines">
            ANSWERING <span className="finalNumbers">{rightAnswers} / 50</span>{' '}
            QUESTIONS CORRECTLY,
          </p>
          <p className="finalMiddleLines">
            WITH AN OVERALL SCORE OF{' '}
            <span className="finalNumbers">{currentScore}%</span>,
          </p>
          <p className="finalMiddleLines">HAS EARNED YOU THE TITLE OF:</p>
          <p id="finalTitle">{finalTitle()}</p>
        </div>
      )}
      <div id="backButtonDiv">
        <div className="buttonMask displayNone" ref={backButtonMask} />
        <button
          id="backButton"
          onClick={handleBackNext}
          ref={backButton}
          onAnimationEnd={(e) => resetAnimation(e, backButton, true)}
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
      </div>
      <div id="nextButtonDiv">
        <div className="buttonMask displayNone" ref={nextButtonMask} />
        <button
          id="nextButton"
          onClick={handleBackNext}
          ref={nextButton}
          onAnimationEnd={(e) => resetAnimation(e, nextButton, true)}
          disabled={
            props.currentSlide >= props.userAnswers.length ||
            props.currentSlide === 50
          }
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
    </div>
  );
};

export default Quiz;
