import React, { useState } from 'react';
import CreatePasswordImage from '../assets/white chess.png';

const CreateNewPassword = () => {
    const [password, setPassword] = 
    useState('');
    const [confirmPassword, setConfirmPassword] =
    useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Add password validation and api call here
          
        if (password === confirmPassword){
            console.log('Password reset successfully');
        } else {
            console.log('Passwords do not match');
        }
    };

    return (
       <div className='bg-cover bg-center
       min-h-screen min-w-screen flex
       flex-col justify-start items-center'
       style={{ backgroundImage: `url(${
        CreatePasswordImage
       })`}}
       >
        <div className='bg-gray-400
        mt-40 p-8 rounded-lg w-96'>
            <h1 className='text-2xl
            font-bold mb-4 text-center'>
               Create New Password 
            </h1>
            <form onSubmit={handleSubmit}>
              {/* New Password */}
              <div className='mb-4'>
               <label className='block 
               text-gray-700
               text-sm font-bold
               mb-2' htmlFor='password'>
                 New Password 
               </label>
               <input 
               type="password" 
               id='password'
               value={password}
               onChange={(e) => 
                setPassword(e.target.value)
               }
               className='w-full px-3
               py-2 border border-gray-300
               rounded-md focus:outline-none
               focus:border-blue-500'
               placeholder='Enter your new password'
               required
               />
              </div>

            {/* Confirm Password*/}
              <div className='mb-6'>
                <label 
                className='block text-gray-700
                text-sm font-bold mb-2'
                htmlFor="confirmPassword">
                   Confirm Password    
                 </label>
                 <input 
                 type="password" 
                 id='confirmPassword'
                 value={confirmPassword}
                 onChange={(e) => 
                    setConfirmPassword(e.target.value)
                 } 
                 className='w-full px-3 py-2
                 border border-gray-300
                 rounded-md 
                 focus:outline-none
                 focus:border-blue-500'
                 placeholder='Confirm your new password'
                 required
                 />
              </div>

            {/* Submit button */}
            <button
            type='submit'
            className='w-full
            bg-blue-500 text-white
            py-2 rounded-md
            hover:bg-blue-600
            focus:outline-none'>
                Reset Password 
            </button>
            </form>
        </div>        
       </div>
    )
}

export default CreateNewPassword;