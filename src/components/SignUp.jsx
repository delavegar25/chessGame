import React, { useState, useEffect, useRef } from 'react';
import SignUpImage from '../assets/white chess.png';
import { Link } from 'react-router-dom';

const SignUp = () => {

    return (
        <div className='bg-cover bg-center
        min-h-screen min-w-screen
        flex flex-col
        justify-start items-center'
        style={{ backgroundImage: `url(${SignUpImage})`}} >
         
         <div className='bg-white p-4 rounded-lg
         shadow-lg max-w-lg m-4 w-full mt-5'>
           <h1 className='text-2xl font-bold mb-6
           text-center text-black'>
              Sign Up to Chess Hive  
           </h1>
           <form>
            <div className='mb-4'>
             <label className='block
             text-gray-700 text-md'>
                Name 
             </label>
             <input 
             type="text"
             className='mt-1 px-4
             py-2 border border-gray-300
             rounded-lg relative
             w-full focus:outline-none
             focus:ring-2 focus:ring-blue-500'
             placeholder='Name'
              />
            </div>
            <div className='mb-4'>
            <label className='block text-gray-700'>
                Username  
            </label>
            <input 
            type="text"
            className='mt-1 px-4
            py-2 border rounded-lg
            w-full 
            focus:outline-none
            focus:ring-2 relative
            focus:ring-blue-500'
            placeholder='Username'
             />
            </div>
            <div className='mb-4'>
                <label className='block text-gray-700'>
                    Email 
                </label>
                <input 
                type="email"
                className='mt-1 px-4
                py-2 border rounded-lg
                w-full focus:outline-none
                focus:ring-blue-500'
                placeholder='Email'
                 />
            </div>
            <div className='mb-6'>
               <label className='block 
               text-gray-700 mt-2'>
                Password 
               </label>
               <input 
               type="password"
               className='mt-1 px-4
               py-2 border rounded-lg
               w-full focus:outline-none
               focus:ring-2
               focus:ring-blue-500'
               placeholder='Password'
                />
                <div className='mb-6'>
                  <label className='block
                  text-gray-700 mt-4'>
                    Confirm Password 
                  </label>
                  <input 
                  type="password"
                  className='mt-3 px-4
                  py-2 border rounded-lg 
                  w-full
                  focus:outline-none
                  focus:ring-2
                  focus:ring-blue-500'
                  placeholder='Confirm Password' 
                  />
                </div>
                <button 
                type='submit'
                className='w-full bg-blue-500
                text-white py-2 px-4
                rounded-3xl hover:bg-blue-600
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
                focus:ring-opacity-50'
                >
                  Create Account 
                </button>
                <p className='text-center
                p-4'>
                  Already have an account? 
                  <Link to='/signin' 
                  className='m-2
                  text-blue-600
                  underline'>
                   Sign In 
                  </Link>
                </p>
            </div>
           </form>
         </div>        
        </div>
    )

}

export default SignUp;