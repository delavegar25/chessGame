import React, { useState, useEffect, useRef } from 'react';
import SignUpImage from '../assets/Pawn.jpg';

const SignUp = () => {

    return (
        <div className='bg-cover bg-center
        min-h-screen min-w-screen
        flex flex-col
        justify-start items-center'
        style={{ backgroundImage: `url(${SignUpImage})`}} >
         
         <div className='bg-white p-4 rounded-lg
         shadow-lg max-w-md w-full mt-5'>
           <h1 className='text-2xl font-bold mb-6
           text-center text-black'>
              Create Chess Game Account 
           </h1>
           <form>
            <div className='mb-4'>
             <label className='block
             text-gray-700 text-md'>
                First Name 
             </label>
             <input 
             type="text"
             className='mt-1 px-4
             py-2 border border-gray-300
             rounded-lg
             w-full focus:outline-none
             focus:ring-2 focus:ring-blue-500'
             placeholder='First Name'
              />
            </div>
            <div className='mb-4'>
            <label className='block text-gray-700'>
                Last Name 
            </label>
            <input 
            type="text"
            className='mt-1 px-4
            py-2 border rounded-lg
            w-full focus:outline-none
            focus:ring-2 
            focus:ring-blue-500'
            placeholder='Last Name'
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
                  py-2 border rounded-lg w-full
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
                rounded-lg hover:bg-blue-600
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
                focus:ring-opacity-50'
                >
                  Create Account 
                </button>
            </div>
           </form>
         </div>        
        </div>
    )

}

export default SignUp;