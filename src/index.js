import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import App2 from './App2';
// import ContextExam from './ContextExam';
// import PersonContext from './contexts/PersonContext'
import ApiExam from './ApiExam';
// const persons = [
//   { id:1, name:'green', age:20 },
//   { id:1, name:'blue', age:22 },
// ]
ReactDOM.render(
  <React.StrictMode>
    {/* <PersonContext.Provider value={persons}>
      <ContextExam/>
    </PersonContext.Provider> */}
    <ApiExam/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
