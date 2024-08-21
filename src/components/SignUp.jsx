import React, { useState, useEffect, useRef } from 'react';
import SignUpImage from '../assets/white chess.png';
import { Link, useNavigate } from 'react-router-dom';
import  ExitIcon from '../assets/cross redirect.png';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

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

    const [showPassword, setShowPasssword] = useState(false);
    const [passwordStrength, setPasswordStrength] = useState('');
    const [passwordMatch, setPasswordMatch] = useState(null);
    const [showAlert, setShowAlert] = useState(false);

    const navigate = useNavigate();

    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
     
      if (e.target.name === 'password') {
        validatePasswordStrength(e.target.value);
      }

      if (e.target.name === 'confirmPassword'){
        setPasswordMatch(e.target.value === formData.password);
      }
    };

    const validatePasswordStrength = (password) => {
      const strengthRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$&@?])[A-Za-z\d$&@?]{8,}$/;

      if (strengthRegex.test(password)) {
        setPasswordStrength('strong');
      } else {
        setPasswordStrength('weak');
      };

    }
    
    const handleSubmit = async (e) => {
      e.preventDefault();

      if (!passwordMatch) {
        setShowAlert(true);
        return;
      }


      {/* calling the API */}
      try {
        const response = await 
        fetch('http://your-backend-url/api/signup',
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
            setShowAlert(true);
          }
      } catch (error) {
        console.error('Invalid account:', error);
        setShowAlert(true);
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
         
         <div className='relative top-16
         left-48'>
        <img src={ExitIcon}
         alt="" 
         className=' 
         w-8 h-8 cursor-pointer'
         onClick={handleExit}
         /> 
        </div>


        {showAlert && 
        ( <div 
          className="absolute  mr-4 p-2 bg-red-500 text-white text-sm rounded-lg mt-2 z-50 animate-slide-in">
            Invalid credentials 
            </div>
        )}

       <div className='bg-white p-4 rounded-lg
         shadow-lg max-w-lg m-4 w-full mt-5 relative'>

           <h1 className='text-2xl font-bold mb-6 
           b-5
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

               <div className='relative'>
                <input type={showPassword ? 'text':
                'password'} 
                name='password'
                value={formData.password}
                onChange={handleChange}
                className={`mt-1 px-4 py-2 border rounded-lg w-full focus:outline-none focus:ring-2 ${passwordStrength === 'strong' ? 'focus:ring-green-500' : 'focus:ring-red-500'}`}
                placeholder='Password'
                />
                <div className='absolute inset-y-0 right-0
                pr-3 flex items-center'>

                  <button type='button'
                  onClick={() => setShowPasssword(!showPassword)}
                  className='focus:outline-none'>
                  {showPassword ? <FaEyeSlash /> : < FaEye/>}
                  </button>              
                </div>
               </div>
               <p className={`text-sm ${passwordStrength === 'strong' ? 'text-green=500' : 'text-red-500'}`}>
                {
                  passwordStrength === 'strong' ? 'Strong password': 'Password must include uppercase, lowercase, number, and special character'
                }
               </p>
              
              
                <div className='mb-6'>
                  <label className='block
                  text-gray-700 mt-4'>
                    Confirm Password 
                  </label>
                  <div className='relative'>
                  <input 
                  type={showPassword ? 'text': 'password'}
                  name='confirmPassword'
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={`mt-3 px-4
                  py-2 border rounded-lg 
                  w-full
                  focus:outline-none
                  focus:ring-2
                  ${passwordMatch === false ? 'focus:ring-red-500' : passwordMatch === true ? 'focus:ring-green-500' : 'focus:ring-blue-500'}`}
                  placeholder='Confirm Password' 
                  />
                  <div className='absolute inset-y-0 right-0 pr-3
                  flex items-center'> 
                  <button type='button'
                    onClick={() => setShowPasssword(!showPassword)}
                    className='focus:outline-none'>
                      {showPassword ? <FaEyeSlash /> : <FaEye /> }
                  </button>
                  </div>
                </div>
                {passwordMatch === false && (
                  <p
                  className='text-sm text-red-500'>
                  Invalid password 
                  </p>
                )}
                {passwordMatch === true && ( <p 
                  className='text-sm text-green-500'>
                    Password match
                  </p>
                )}
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