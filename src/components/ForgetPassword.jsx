import React, { useState } from 'react';
import ForgetPasswordImage from '../assets/white chess.png';
import ExitIcon from '../assets/cross redirect.png';
import { useNavigate } from 'react-router-dom';


const ForgetPassword = () => {
    const [email, setEmail] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        // API call
        console.log('Email submitted: email')
      };
    
      const navigate = useNavigate();

      const handleExit = () => {
        navigate('/');
      };
  

    return (
        <div
        className='bg-cover bg-center min-h-screen
        min-w-screen flex flex-col justify-start
        items-center'
        style={{ backgroundImage: `url(${ForgetPasswordImage})`}}>

      <div 
      className='bg-gray-400 
      mt-40 p-8 
      rounded-lg 
      shadow-lg w-96'>

        <img src={ExitIcon} 
        alt="Exit" 
        className='
        w-8 h-8
        cursor-pointer'
        onClick={handleExit}
        />

            <h1 className='text-2xl font-bold 
            mb-4 text-center'>
              Forget Password 
            </h1>
            <form onSubmit={handleSubmit}>
               <div className='mb-4'>
                 <label className='block
                 text-gray-700 text-sm
                 font-bold mb-2'
                 htmlFor='email'>
                  Email
                 </label>
                 <input 
                 type="email" 
                 id='email'
                 value={email}
                 onChange={(e) => 
                    setEmail(e.target.value)
                 }
                 className='w-full px-3 py-2
                 border border-gray-300
                 rounded-md 
                 focus:outline-none
                 focus:border-blue-500'
                 placeholder='Enter your email'
                 required
                 />
               </div>
               <button type='submit'
               className='w-full bg-blue-500
               text-white py-2 rounded-md
               hover:bg-blue-600
               focus:outline-none'>
                Send Reset Link 
               </button>
            </form>
        </div>
        </div>
    )
}

export default ForgetPassword;