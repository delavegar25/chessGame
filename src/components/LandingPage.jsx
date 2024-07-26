import React, { useState, useEffect, useRef } from 'react';
import PawnImage from '../assets/Chess game.jpg';

const LandingPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    // focus on the elements.
    // using the useRef hook to access the DOM elements.
    const dropdownRef = useRef(null);
    const buttonRef = useRef(null);
    const itemsRef = useRef([]); 

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
            <div className='w-full p-4 bg-opacity-50'>
            <h1 className='text-left text-3xl font-bold text-white'>
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
        <div className='mx-auto max-w-0'>
           {/* content here */}
        </div>
        </div>
    )
}


export default LandingPage;