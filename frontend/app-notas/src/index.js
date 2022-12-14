import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  BrowserRouter, 
  Routes, 
  Route
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import reportWebVitals from './reportWebVitals';
import LoginForm from './components/login/Login'


//Components
import Navbar from './components/navbar/Navbar';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar />
    <div className="container my-4">
        <Routes>
          <Route path="/login" element={<LoginForm/>}/>
        </Routes>
      </div>
    </BrowserRouter>
);

reportWebVitals();
