import React, { useState, useEffect, useRef } from 'react';
import PawnImage from '../assets/Chess game.jpg';

const LandingPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const dropdownRef = useRef(null);

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

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);


    return (
        <div className='bg-gray-900 flex flex-col justify-start items-center min-h-screen min-w-screen bg-cover bg-center'>
            <div className='w-full p-4'>
            <h1 className='text-left text-3xl font-bold text-white'>
                CHESS GAME: A STRATEGIC BATTLE
                </h1>
            <div className='relative inline-block' 
            ref={dropdownRef}>
              <button
              onClick={toggleDropdown}
              className='px-4 py-2 bg-blue-500
              text-white rounded-md hover:bg-blue-700
              focus:outline-none focus:ring
              focus:ring-blue-300'>
                Select Level 
              </button>
              {isOpen && (
                <div className='absolute mt-2 
                w-48 rounded-md shadow-lg
                bg-white ring-1 ring-black
                ring-opacity-5'>
                    <div className='py-1'>
                        <a href="#"
                        className='block px-4
                        py-2 text-gray-700
                        hover:bg-blue-100'>
                            Beginner 
                        </a>
                    <a href='#'
                    className='block px-4 py-2
                    text-gray-700
                    hover:bg-blue-100'>
                        Intermediate
                    </a>
                    <a href='#'
                    className='block px-4 py-2
                    text-gray-700 hover:bg-blue-100'>
                        Advanced 
                    </a>
                    </div>
                </div>
              )}
            </div>
        </div>
        <div className='mx-auto max-w-0'>
           {/* content here */}
        </div>
           <div className='flex justify-center items-center mt-8'>
            <img src={PawnImage}
             alt="Chess image"
             className='max-w-full h-auto rounded-md shadow-lg'
             />
        </div>
        </div>
    )
}


export default LandingPage;