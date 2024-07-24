import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import SinglePlayerGame from './components/SinglePlayerGame'
import HumanVsHumanGame from './components/HumanVsHumanGame'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<LandingPage />}/><Route/>
        <Route path='/single' element={<SinglePlayerGame/>}/><Route/>
        <Route path='/human' element={< HumanVsHumanGame/>}/><Route/>        
      </Routes>
    </Router>
  );
};

export default App;