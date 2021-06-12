import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import reportWebVitals from './reportWebVitals';

if (localStorage.getItem('spaceQuizAnswersArr') === null) {
  if (localStorage.getItem('spaceQuizAnswersArr') !== '') {
    localStorage.setItem('spaceQuizAnswersArr', []);
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
