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

import App from './App';


//Components
import Navbar from './components/navbar/Navbar';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar>
    <div className="container">
        <Routes>
          <Route exact path="/" element={<App/>} />
        </Routes>
      </div>
    </Navbar>
    <App />
    </BrowserRouter>
);

reportWebVitals();
