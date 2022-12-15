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
import LoginForm from './components/login/Login';
import Home from './components/home';
import UserReg from './components/usuario/UserRegister';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar />
    <div className="container my-4">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<LoginForm/>}/>
          <Route path="/NoteList" element={<NoteList/>}/>
          <Route path="/UserRegister" element={<UserReg/>}/>
        </Routes>
    </div>
    </BrowserRouter>
);

reportWebVitals();
