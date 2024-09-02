import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import SinglePlayerGame from './components/SinglePlayerGame'
import HumanVsHumanGame from './components/HumanVsHumanGame'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import ForgetPassword from './components/ForgetPassword'
import CreateNewPassword from './components/CreateNewPassword'
import Profile from './components/Profile'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<LandingPage />}/><Route/>
        <Route path='/single' element={<SinglePlayerGame/>}/><Route/>
        <Route path='/human' element={< HumanVsHumanGame/>}/><Route/>        
        <Route path='/signin' element={< SignIn/>}/><Route/>
        <Route path='/signup' element={< SignUp/>}/><Route/>
        <Route path='/forget-password' element={< ForgetPassword/>}/><Route/>
        <Route path='/reset-password' element={< CreateNewPassword/>}/><Route/>
        <Route path='/profile' element={< Profile/>}/><Route/>
    </Routes>
    </Router>
  );
};

export default App;