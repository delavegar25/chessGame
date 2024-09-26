import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import OTPVerificationImage from '../assets/white chess.png'


const OTPVerification = () => {
    const [otp, setOtp] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5173/verify-otp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ otp }), 
            });

            const data = await response.json();

            if (response.ok) {
                alert('OTP verified successfully!');
                navigate('/profile'); // redirect to profile(main page)
            } else {
                setError(data.message);
            }
        } catch (error) {
            setError('Invalid OTP');
        }
    }

    return (
        <div 
        className='bg-cover bg-center min-h-screen
        min-w-screen flex flex-col justify-start
        items-center'
        style={{ backgroundImage: `url(${OTPVerificationImage})`}}
        role='main'
        aria-label='OTP Verification Page'
        >

    <div 
      className='bg-gray-400 
      mt-40 p-8 
      rounded-lg 
      shadow-lg w-96'
      role='form'
      aria-labelledby='verify-otp title'
      >
        <h1 style={{ fontFamily: 'Roboto Flex sans-serif' }} 
            className='text-2xl font-bold 
            mb-4 text-center'>
              OTP Verification 
        </h1>
        {error && <div className='text-red-500 mb-4 text-center'>{error}</div>}
        
        <form onSubmit={handleSubmit}>
          <div style={{ fontFamily: 'Roboto Flex sans-serif' }} 
          className='mb-4'>
           <label className='block text-gray-700'>
             Enter OTP 
           </label>
           <input 
           type="text" 
           className='w-full px-3 py-2 border-gray-300 rounded-md
           focus:outline-none focus:border-blue-500'
           value={otp}
           onChange={(e) => setOtp(e.target.value)}
           placeholder='Enter your OTP'
           required        
           />
          </div>

          <button style={{ fontFamily: 'Roboto Flex sans-serif' }}
           type='submit'
          className='w-full bg-blue-500 text-white py-2 rounded-lg
          hover:bg-blue-600 focus:outline-none'>
            Verify OTP 
          </button>
        </form>
        </div>
            </div>
    )
}

export default OTPVerification;