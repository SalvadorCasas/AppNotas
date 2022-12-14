import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  BrowserRouter, 
  Routes, 
  Route,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import reportWebVitals from './reportWebVitals';


//Components
import Navbar from './components/navbar/Navbar';
import NoteList from './components/nota/NoteList';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
   <Navbar>
    <div className="container">
        <Routes>
          <Route path="/NoteList" element={<NoteList/>}/>
        </Routes>
    </div>
  </Navbar>
  <div className="container my-4">
    <NoteList></NoteList>
  </div>
    </BrowserRouter>
);

reportWebVitals();
