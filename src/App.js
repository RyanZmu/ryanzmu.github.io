import logo from './logo.svg';
import './App.css';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom'
import { Routes,Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';

// Make a nav-bar component later

function App() {

  return (
    <div className="App">
  <Routes>
   <Route path='/' element={<LandingPage/>}
   />
  </Routes>
    </div>
  );
}

export default App;
