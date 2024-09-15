import React, { useState, useEffect, useRef } from 'react';
import { supabase } from '../components/Supabase/supabaseClient';
import SignInImage from '../assets/white chess.png';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';


const SignIn = () => {
  const [showPassword, setShowPasssword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // To programmatically navigate the user
  
  const togglePasswordVisibility = () => {
    setShowPasssword(!showPassword);
  }


  const handleSubmit = async (e) => {
    e.preventDefault();

    // use supaBase to sign in with email and password
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password 
    });

    if (error) {
      setError(error.message);
    } else {
      alert('Successfully signed in');
      navigate('/profile');
    }
  }

   return (
    <div 
    className='bg-cover bg-center min-h-screen
    min-w-screen flex flex-col justify-start
    items-center'
    style={{ backgroundImage: `url(${SignInImage})`}}>
        <div className='bg-gray-400 mt-40 p-8 rounded-lg shadow-lg w-96'> 
           <h1 style={{ fontFamily: 'Roboto Flex sans-serif' }} 
            id='signin-title' className='text-2xl font-bold 
            mb-4 text-center'>
              Chess User 
            </h1>
        
            <form onSubmit={handleSubmit}>
              {error && ( 
                <div className='text-red-500 mb-4 text-center'>
                  {error}
                </div>
              )}
                <div style={{ fontFamily: 'Roboto Flex sans-serif' }} 
                className='mb-4'>
                 <label
                  className="block 
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
                        aria-required='true' //Indicates this field is required 
                        onChange={(e) => setEmail(e.target.value)}
                 />
                </div>

                <div 
                className='mb-4 relative'>
                    <label className='block 
                    text-gray-700
                    text-sm
                    font-bold
                    mb-2'
                    htmlFor='password'
                    style={{ fontFamily: 'Roboto Flex sans-serif'}}>
                       Password 
                       <Link to='/forget-password'
                       className='text-gray-500
                       font-normal
                       ml-52
                       underline'
                       style={{ fontFamily: 'Roboto Flex sans-serif'}}>
                        Forgot?
                       </Link>
                    </label>
                    <input style={{ fontFamily: 'Roboto Flex sans-serif '}} 
                    type={showPassword ? 'text': 'password'}
                           id = 'password'
                           className='w-full
                           px-3 py-2 border
                           border-gray-300
                           rounded-md
                           focus:outline-none
                           focus:border-blue-500'
                           placeholder='Enter your password'
                           aria-required='true'
                           onChange={(e) => setPassword(e.target.value)}
                     />
                     <button type= 'button'
                       className='absolute inset-y-0 right-0
                     pr-3 top-6 flex items-center cursor-pointer'
                     
                     onClick={togglePasswordVisibility}
                     aria-label={showPassword ? 'Hide password' : 'Show password'}
                     // Accessible Description
                     >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                     </button>
                  </div>
                <button 
                type='submit'
                className='w-full
                bg-blue-500
                text-white
                py-2
                mt-6
                rounded-lg
                hover:bg-blue-600
                focus:outline-none'
                aria-label='Sign In'
                style={{ fontFamily: 'Roboto Flex sans-serif'}}>
                  Sign In 
                </button>
          <div   
          className='mt-4 
          text-center'
          style={{ fontFamily: 'Roboto Flex sans-serif' }}> 
                Don't have an account?  
              <Link to='/signup'
              className='m-1 
              text-blue-900
              underline'
              style={{ fontFamily: 'Roboto Flex sans-serif' }}>
                Sign up
              </Link>
          </div>                    
            </form>
            </div>
    </div>
);

};
export default SignIn;



