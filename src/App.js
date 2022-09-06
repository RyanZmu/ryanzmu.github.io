import './App.css';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes,Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Navigation from './components/Navbar';
import AboutPage from './components/About';
// Make a nav-bar component later

function App() {

  return (
   <div className="App">
    <Navigation />

    <Routes>
      <Route path='/About' element={<AboutPage />}
      />
      <Route path='/' element={<LandingPage />}
      />
    </Routes>
   </div>
  );
}

export default App;
