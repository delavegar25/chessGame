import React, { useState, useEffect } from 'react';
import SignUpImage from '../assets/white chess.png';
import { Link, useNavigate } from 'react-router-dom';
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

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [passwordStrength, setPasswordStrength] = useState(
      {
        score: 0, // 0 to 4 score
      }
    );
    const [passwordMatch, setPasswordMatch] = useState(null);
    const [showAlert, setShowAlert] = useState(false);
    const [showMatchAlert, setShowMatchAlert] = useState(false); // for the 5 second match alert
    
    const navigate = useNavigate();
    
    useEffect(() => {
      if(passwordMatch) {
        setShowMatchAlert(true); // show the match alert
      
      const timer = setTimeout(() => setShowMatchAlert(false), 5000); // hide after 5 seconds

      return () => clearTimeout(timer); // cleanup timeout if component unmounts or password changes
      }
    }, [passwordMatch]);

    const handleChange = (e) => {
      const { name, value } = e.target;

      setFormData({ // update the current state using the spread syntax to expand the values in the array
        // creating a new object in a setter function. 
        ...formData, 
        [name]: value,
      });
     
      if (name === 'password') {
        validatePasswordStrength(value);
      }

      if (name === 'confirmPassword'){
        // only validate password match if both fields are filled
        if(formData.password && value){
        setPasswordMatch(value === formData.password);
      } else {
        setPasswordMatch(null); // Reset match state if fields are empty
      }
    }
    };

    const validatePasswordStrength = (password) => { 
      let score = 0;
      if (/[A-Z]/.test(password)) score += 1;
      if(/[a-z]/.test(password)) score += 1;
      if(/\d/.test(password)) score += 1;
      if(/[$&@?]/.test(password)) score += 1;

      setPasswordStrength({ score });
    };

        
    const handleSubmit = async (e) => {
      e.preventDefault();

      if (!passwordMatch) { // if the current passwordMatch is not null return true.
        setShowAlert(true); // update the showAlert state to true 
        return;
      }


      {/* calling the API */}
      try {
       const response = await fetch('http://localhost:5173/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          username: formData.username,
          name: formData.name    
        })
       });

      const data = await response.json();

      if(response.ok) {
        alert('Account created! Please check your email for OTP.');
        navigate('./verify-otp')
      }
      else {
        console.error('Error creating account:', data.message);
        setShowAlert(true);
      }
      } catch (error) {
        console.error('Error during signup:', error);
        setShowAlert(true);
      }
    };

    const getPasswordStrengthLabel = () => {
      switch (passwordStrength.score) {
        case 4: return 'Strong';
        case 3: return 'Medium';
        case 2: return 'Weak';
        case 1: return 'Very weak';
      }
    };

    const getPasswordStrengthColor = () => {
      switch(passwordStrength.score) {
        case 4: return 'bg-green-500';
        case 3: return 'bg-yellow-500';
        case 2: return 'bg-orange-500';
          default: return 'bg-red-500';
      }
    }
   
    return (
        <div className='bg-cover bg-center
        min-h-screen min-w-screen
        flex flex-col
        justify-start items-center'
        style={{ backgroundImage: `url(${SignUpImage})`}} >
         

       <div className='bg-gray-400 p-4 rounded-lg
         shadow-lg max-w-lg m-4 w-full mt-5 relative'>
         
        
        {showAlert && 
        ( <div 
          className="absolute  mr-4 p-2 bg-red-500 text-white text-sm rounded-lg mt-2 z-50 animate-slide-in">
            Invalid credentials 
            </div>
        )}

           <h1 style={{ fontFamily: 'Roboto Flex sans-serif' }} 
           className='text-2xl font-bold mb-6 
           b-5
           text-center text-black'>
              Sign Up to Chess Hive  
           </h1>
           <form onSubmit={handleSubmit}>
            <div style={{ fontFamily: 'Roboto Flex sans-serif' }} 
            className='mb-4'>
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
            <div style={{ fontFamily: 'Roboto Flex sans-serif' }} 
             className='mb-4'>
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
            <div style={{ fontFamily: 'Roboto Flex sans-serif' }} 
            className='mb-4'>
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
            <div style={{ fontFamily: 'Roboto Flex sans-serif'}} 
            className='mb-6'>
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
                className={`mt-1 px-4 py-2 border rounded-lg w-full focus:outline-none focus:ring-2 
                  `}               
                placeholder='Password'
                />
                <div className='absolute inset-y-0 right-0
                pr-3 flex items-center'>

                  <button type='button'
                  onClick={() => setShowPassword(!showPassword)}
                  className='focus:outline-none'>
                  {showPassword ? <FaEyeSlash /> : < FaEye/>}
                  </button>              
                </div>
               </div>
               <div className='mt-2'>
                  <div className={`h-2 w-40 rounded-full ${getPasswordStrengthColor()}`}
                  style={{ width: `$
                    {passwordStrength.score * 25}%`}} 
                  >
                    </div>
                    <p className='text-sm text-gray-600 mt-2'>
                      {getPasswordStrengthLabel()}
                    </p>
               </div>
              
                <div className='mb-6'>
                  <label className='block
                  text-gray-700 mt-4'>
                    Confirm Password 
                  </label>
                  <div className='relative'>
                  <input 
                  type={showConfirmPassword ? 'text': 'password'}
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
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className='focus:outline-none'
                    aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
                    >
                      {showConfirmPassword ? <FaEyeSlash /> : <FaEye /> }
                  </button>
                  </div>
                </div>
                {passwordMatch === false && (
                  <p
                  className='text-sm text-red-500'>
                   Passwords do not match  
                  </p>
                )}
                {showMatchAlert && passwordMatch === true && ( <p 
                  className='text-sm text-green-500'>
                    Passwords match
                  </p>
                )}
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