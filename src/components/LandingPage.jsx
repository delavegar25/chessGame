import React, { useState, useEffect, useRef } from 'react';
import PawnImage from '../assets/Chess game.jpg';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [focusedButton, setFocusedButton] = useState(null);

    // focus on the elements.
    // using the useRef hook to access the DOM elements.
    const dropdownRef = useRef(null);
    const buttonRef = useRef(null);
    const itemsRef = useRef([]); 
    const signInRef = useRef(null);
    const signUpRef = useRef(null); 

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    
    const handleClickOutside = (event) => {
        if(dropdownRef.current && !dropdownRef.current.contains
            (event.target)
        ) {
            setIsOpen(false);
        }
    };

    const handleKeyDown = (event) => {
        if(event.key === 'Escape'){
            setIsOpen(false);
            buttonRef.current.focus();
        } else if (event.key === 'ArrowDown') {
           event.preventDefault();
           if (!isOpen) {
            setIsOpen(true);
           } else {
            const firstItem = itemsRef.current[0];
            if (firstItem) {
               firstItem.focus();
            }
           }
        } else if (event.key === 'ArrowUp'){
            event.preventDefault();
            if (!isOpen) {
                setIsOpen(true);
            } else {
                const lastItem = 
                itemsRef.current[itemsRef.current.length - 1];
                if (lastItem) {
                    lastItem.focus();
                }
            }
        }
    };

    const handleItemKeyDown = (event, index) => {
        if (event.key === 'ArrowDown') {
            event.preventDefault();
            const nextItem = itemsRef.current[index + 1];
            if (nextItem) {
                nextItem.focus();
            }
        } else if(event.key === 'ArrowUp') {
            event.preventDefault();
            const prevItem = itemsRef.current[index - 1];
            if (prevItem) {
                prevItem.focus();
            }
        } else if(event.key === 'Escape'){
            setIsOpen(false);
            buttonRef.current.focus();
        }
    };

    const handleButtonKeyDown = (event) => {
        if (event.key === 'ArrowDown') {
            event.preventDefault();
            if (focusedButton === 'signin') {
                signUpRef.current.focus();

                setFocusedButton('signup');   
            } else if (focusedButton === 'signup') {
                signInRef.current.focus();
                setFocusedButton('signin'); 
            } else if (event.key === 'ArrowUp') {
                event.preventDefault();
                if (focusedButton === 'signup') {
                    signInRef.current.focus();

                    setFocusedButton('signin');
                } else if(focusedButton === 'signin') {
                    signUpRef.current.focus();
                    setFocusedButton('signup');
                } else if (event.key === 'Enter') {
                    if (focusedButton === 'signin') {
                        window.location.href = '/signin';
                    } else if (focusedButton === 'signup') {
                        window.location.href = '/signup';
                    } else if (event.key === 'Escape') {
                        if (focusedButton) {
                            setFocusedButton(null);
                        };
                    }
                }
            }
        }
    }




    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);


    return (
        <div className='bg-cover bg-center min-h-screen min-w-screen flex flex-col justify-start items-center' 
        style={{ backgroundImage: `url(${PawnImage})`}}>
            <div className='w-full p-4 bg-opacity-50 justify-between items-center'>   
            <h1 className='text-left text-3xl font-bold text-black'>
                CHESS GAME: A STRATEGIC BATTLE
                </h1>
               
            <div className='relative inline-block' 
            ref={dropdownRef}>
              <button
              onClick={toggleDropdown}
              onKeyDown={handleKeyDown}
              ref={buttonRef}
              className='px-2 py-1 bg-blue-500
              text-white rounded-md hover:bg-blue-700
              focus:outline-none focus:ring
              focus:ring-blue-300 m-1'>
                Select Level 
              </button>
              {isOpen && (
                <div className='absolute mt-2 
                w-48 rounded-md shadow-lg
                bg-white ring-1 ring-black
                ring-opacity-5'>
                    <div className='py-1'>
                    {['Beginner', 'Intermediate',
                        'Advanced'].map((level, index) => (
                           <a href="#"
                           key={index}
                           ref={(el) => (itemsRef.current[index] = el)}
                        className='block px-4
                        py-2 text-gray-700
                        hover:bg-blue-100'
                        
                        tabIndex={isOpen ? 0 : -1}

                        onKeyDown={(event) => 
                            handleItemKeyDown(event, index)                        
                        }
                        >
                           {level}  
                        </a>   
                        ))}
                    </div>
                </div>
              )}
            </div>
        </div>
        <div className='flex flex-col items-center space-y-4 mt-14'>
           {/* content here */}
           <Link to="/signin" ref={signInRef} className='px-6 py-3 
           bg-black 
           text-white rounded-full text-lg font-semibold
           shadow-lg transition
           focus:outline-none focus:ring-2
           focus:ring-white'
           
           tabIndex="0"
           role='button'
           aria-label='Sign In'
           onKeyDown={handleButtonKeyDown}
           onFocus={() => setFocusedButton('signin')}
           >
              Sign In 
           </Link>

           <Link to="/signup"
           ref={signUpRef}
           className='px-6
           py-3 bg-gray-400
           text-white rounded-full
           text-lg font-semibold shadow-lg
           transition
           focus:outline-none
           focus:ring-2
           focus:ring-white
           '
           tabIndex="0"
           role='button'
           aria-label="Sign Up"
           onKeyDown={handleButtonKeyDown}
           onFocus={() => setFocusedButton('signup')}
           >
            Sign Up 
           </Link>
        
        </div>
        </div>
    )
}


export default LandingPage;