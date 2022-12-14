import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

//COMPONENTES
import NoteList from './components/nota/NoteList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <NoteList></NoteList>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
