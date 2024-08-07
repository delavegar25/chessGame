import React, { useState } from 'react';
import ForgetPasswordImage from '../assets/Chess image.jpg';

const ForgetPassword = () => {
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
      shadow-lg 
      w-96'> 
      <h1 
      className='text-2xl font-bold 
            mb-4 text-center'>
              Forget Password 
            </h1>
        </div>

        </div>
    )
}

export default ForgetPassword;