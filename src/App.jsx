import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import HumanVsHumanGame from './components/HumanVsHumanGame'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import ForgetPassword from './components/ForgetPassword'
import CreateNewPassword from './components/CreateNewPassword'
import Profile from './components/Profile'
import ChessBoard from './components/ChessBoard'
import Advanced from './components/Advanced'
import Beginner from './components/Beginner'
import Intermediate from './components/Intermediate'
import OTPVerification from './components/OTPVerification'


function App() {

  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<LandingPage />}/><Route/>
        <Route path='/chessboard' element={<ChessBoard/>}/><Route/>
        <Route path='/human' element={< HumanVsHumanGame/>}/><Route/>        
        <Route path='/signin' element={< SignIn/>}/><Route/>
        <Route path='/signup' element={< SignUp/>}/><Route/>
        <Route path='/forget-password' element={< ForgetPassword/>}/><Route/>
        <Route path='/reset-password' element={< CreateNewPassword/>}/><Route/>
        <Route path='/profile' element={< Profile/>}/><Route/>
        <Route path='/advanced' element={< Advanced/>}/><Route/>
        <Route path='/beginner' element={< Beginner/>}/><Route/>
        <Route path='/intermediate' element={< Intermediate/>}/><Route/>
        <Route path='/verify-otp' element={< OTPVerification/>}/><Route/>
    </Routes>
    </Router>
  );
};

export default App;