import React, { useState, useEffect, useRef } from 'react';
import SignUpImage from '../assets/white chess.png';
import { Link, useNavigate } from 'react-router-dom';
import  ExitIcon from '../assets/cross redirect.png';

const SignUp = () => {
    const [formData, setFormData] = useState(
      {
        name: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: '', 
      }
    ); 

    const navigate = useNavigate();

    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
    
    const handleSubmit = async (e) => {
      e.preventDefault();

      if (formData.password !== formData.confirmPassword) {
        alert('Invalid Credentials');
        return;
      }

      try {
        const response = await 
        fetch('http://ypur-backend-url/api/signup',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });

          if (response.ok) {
            alert('Account created! Please check your email for OTP.');
            navigate('/otp-verification');
          } else {
            const errorData = await response.json();
            alert(`Error: ${errorData.message}`);
          }
      } catch (error) {
        console.error('Invalid account:', error);
        alert('An error occurred, Please try again.')
      }
    };

    const handleExit = () => {
      navigate('/');
    };
 

    return (
        <div className='bg-cover bg-center
        min-h-screen min-w-screen
        flex flex-col
        justify-start items-center'
        style={{ backgroundImage: `url(${SignUpImage})`}} >
         
        <img src={ExitIcon}
         alt="Exit" 
         className='absolute top-4 
         ml-96 left-10
         m-5
         w-8 h-8 cursor-pointer'
         onClick={handleExit}
         /> 

         <div className='bg-white p-4 rounded-lg
         shadow-lg max-w-lg m-4 w-full mt-5'>

           <h1 className='text-2xl font-bold mb-6
           text-center text-black'>
              Sign Up to Chess Hive  
           </h1>
           <form onSubmit={handleSubmit}>
            <div className='mb-4'>
             <label className='block
             text-gray-700 text-md'>
                Name 
             </label>
             <input 
             type="text"
             name='name'
             value={formData.name}
             onChange={handleChange}
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
            name='username'
            value={formData.username}
            onChange={handleChange}
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
                name='email'
                value={formData.email}
                onChange={handleChange}
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
               name='password'
               value={formData.password}
               onChange={handleChange}
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