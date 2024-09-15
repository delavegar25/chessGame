import React, { useState } from 'react';
import CreatePasswordImage from '../assets/white chess.png';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const CreateNewPassword = () => {
    const [password, setPassword] = 
    useState('');
    const [confirmPassword, setConfirmPassword] =
    useState('');
    const [showPassword, setShowPasssword] = useState(false);

    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    
    const handleSubmit = (e) => {
        e.preventDefault(); // prevents the page to refresh
        
        // Add password validation and api call here
          
        if (password === confirmPassword){
            console.log('Password reset successfully');
        } else {
            console.log('Passwords do not match');
        }
    };

    const togglePasswordVisibility = () => {
      setShowPasssword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
      setShowConfirmPassword(!showConfirmPassword);
    };

    return (
       <div 
        className='bg-cover bg-center
       min-h-screen min-w-screen flex
       flex-col justify-start items-center'
       style={{ backgroundImage: `url(${
        CreatePasswordImage
       })`}}
       >
        <div style={{ fontFamily: 'Roboto Flex sans-serif'}}
         className='bg-gray-400
        mt-40 p-8 rounded-lg w-96'>
            <h1 className='text-2xl
            font-bold mb-4 text-center'>
               Create New Password 
            </h1>
            <form onSubmit={handleSubmit}>
              {/* New Password */}
              <div className='mb-4 relative'>
               <label className='block 
               text-gray-700
               text-sm font-bold
               mb-2' htmlFor='password'>
                 New Password 
               </label>
               <input 
               type={showPassword ? 'text' : 'password'} 
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
               aria-required='true'
               />
               <button type='button'
               className='absolute inset-y-0 right-0
               pr-3 top-6 flex items-center cursor-pointer'
               onClick={togglePasswordVisibility}
               aria-label={showPassword ? 'Hide password' : 'Show password'}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
               </button>
              </div>

            {/* Confirm Password*/}
              <div className='mb-6 relative'>
                <label 
                className='block text-gray-700
                text-sm font-bold mb-2'
                htmlFor="confirmPassword">
                   Confirm Password    
                 </label>
                 <input 
                 type={showConfirmPassword ? 'text': 'password'} 
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
                 <button type='button'
                  className='absolute inset-y-0 right-0 pr-3
                  top-6 items-center cursor-pointer'
                  onClick={toggleConfirmPasswordVisibility}
                  aria-label={showConfirmPassword ? 'Hide password': 'Show password'}
                 >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye/>}
                 </button>
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