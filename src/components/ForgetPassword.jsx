import React, { useState } from 'react';
import ForgetPasswordImage from '../assets/white chess.png';

const ForgetPassword = () => {
    const [email, setEmail] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        // API call
        console.log('Email submitted: email')
      };  

    return (
        <div
        className='bg-cover bg-center min-h-screen
        min-w-screen flex flex-col justify-start
        items-center'
        style={{ backgroundImage: `url(${ForgetPasswordImage})`}}
        role='main'
        aria-label='Forget Password Page'
        >

      <div 
      className='bg-gray-400 
      mt-40 p-8 
      rounded-lg 
      shadow-lg w-96'
      role='form'
      aria-labelledby='forget-password-title'
      >

          <h1 style={{ fontFamily: 'Roboto Flex sans-serif' }} 
            className='text-2xl font-bold 
            mb-4 text-center'>
              Forget Password 
            </h1>
            <form onSubmit={handleSubmit}
            aria-label='Forget Password Form'
            >
               <div style={{ fontFamily: 'Roboto Flex sans-serif' }}
                className='mb-4'>
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
                 aria-required='true'
                 aria-label='Enter your email address'
                 />
               </div>
               <button style={{ fontFamily: 'Roboto Flex sans-serif' }}
                type='submit'
               className='w-full bg-blue-500
               text-white py-2 rounded-md
               hover:bg-blue-600
               focus:outline-none
               focus:ring-blue-500 
               focus:ring-2
               focus:ring-blue-500
               focus:ring-opacity-50'
               aria-label='Send Reset Link'
               >
                Send Reset Link 
               </button>
            </form>
        </div>
        </div>
    )
}

export default ForgetPassword;