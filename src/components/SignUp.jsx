import React, { useState } from 'react';
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
        uppercase: false,
        lowercase: false,
        number: false,
        special: false,
      }
    );
    const [passwordMatch, setPasswordMatch] = useState(null);
    const [showAlert, setShowAlert] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
      const { name, value } = e.target;

      setFormData({ // update the current state using the spread operator to expand the values in the array 
        ...formData, // used the spread operator to expand the elements of the array, spreading it into a new array.
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
      const uppercase = /[A-Z]/.test(password);
      const lowercase = /[a-z]/.test(password);
      const number = /\d/.test(password);
      const special = /[$&@?]/.test(password);

      setPasswordStrength({
        uppercase,
        lowercase,
        number,
        special,
      });
    }

        
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
        navigate('./otp-verification')
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
                  ${passwordStrength.uppercase && passwordStrength.lowercase && passwordStrength.number && passwordStrength.special ? 'focus:ring-green-500' : 'focus:ring-red-500'}`}               
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
                <div className={`flex items-center $ 
                  {passwordStrength.uppercase ? 'text-green-500': 'text-red-500' }`}>
                <input type="radio"
                checked={passwordStrength.uppercase} 
                readOnly className='mr-2'/>
                <span className='text-black text-sm'>Uppercase letter</span>
              </div>
              <div className={`flex items-center 
                ${passwordStrength.lowercase ? 'text-green-500': 'text-red-500'}`}>
                <input type="radio"
                checked={passwordStrength.lowercase} 
                readOnly className='mr-2'
                />
                <span className='text-black text-sm'>Lowercase letter</span>
              </div>
              <div className={`flex items-center 
                ${passwordStrength.number ? 'text-green-500': 'text-red-500'}`}>
                  <input type="radio"
                  checked={passwordStrength.number}
                  readOnly className='mr-2' 
                  />
                  <span className='text-black text-sm'>Number</span>
              </div>
              <div className={`flex items-center 
                ${passwordStrength.special ? 'text-green-500' : 'text-red-500'}`}>
                  <input type="radio" 
                  checked={passwordStrength.special}
                  readOnly className='mr-2'
                  />
                <span className='text-black text-sm'>Special character</span>
              </div>
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