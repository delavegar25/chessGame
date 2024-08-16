import React, { useState, useEffect, useRef } from 'react';
import SignInImage from '../assets/white chess.png';
import ExitIcon from '../assets/cross redirect.png';
import { Link, useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();

  const handleExit = () => {
    navigate('/');
  }

   return (
    <div 
    className='bg-cover bg-center min-h-screen
    min-w-screen flex flex-col justify-start
    items-center'
    style={{ backgroundImage: `url(${SignInImage})`}}>
        <div className='bg-gray-400 mt-40 p-8 rounded-lg shadow-lg w-96'> 
            
            <div className='relative top-10
            left-72'>
            <img src={ExitIcon}
            alt=""
            className='
            w-8 h-8 cursor-pointer'
            onClick={handleExit}
            />
            </div>
            <h1 className='text-2xl font-bold 
            mb-4 text-center'>
              Chess User 
            </h1>
        
            <form>
                <div className='mb-4'>
                 <label className="block 
                 text-gray-700
                 text-sm 
                 font-bold
                 mb-2"
                 htmlFor='email'>
                  Email 
                 </label>
                 <input type="email"
                        id='email'
                        className='w-full
                        px-3 py-2
                        border border-gray-300
                        rounded-md
                        focus:outline=none
                        focus:border-blue-500'
                        placeholder='Enter your email' 
                 />
                </div>

                <div className='mb-4'>
                    <label className='block 
                    text-gray-700
                    text-sm
                    font-bold
                    mb-2'
                    htmlFor='password'>
                       Password 
                       <Link to='/forget-password'
                       className='text-gray-500
                       font-normal
                       ml-52
                       underline'>
                        Forgot?
                       </Link>
                    </label>
                    <input type="password"
                           id = 'password'
                           className='w-full
                           px-3 py-2 border
                           border-gray-300
                           rounded-md
                           focus:outline-none
                           focus:border-blue-500'
                           placeholder='Enter your password'
                     />
                  </div>
                <button 
                type='submit'
                className='w-full
                bg-blue-500
                text-white
                py-2
                mt-6
                rounded-2xl
                hover:bg-blue-600
                focus:outline-none'>
                  Sign In 
                </button>
          <div className='mt-4 
          text-center'> 
                Don't have an account?  
              <Link to='/signup'
              className='m-1 
              text-blue-900
              underline'>
                Sign up
              </Link>
          </div>                    
            </form>
            </div>
    </div>
);

};
export default SignIn;



