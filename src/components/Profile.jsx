import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileImage from '../assets/white chess.png';

const Profile = () => {
    const navigate = useNavigate();

    const handleRedirect = (level) => {
        navigate(`/chessboard/${level}`);
    };

    return (
        <div className='bg-cover bg-center
        min-h-screen flex flex-col justify-start
        items-center'
        style={{ backgroundImage: `url(${
            ProfileImage
        })`}}
        role='main'
        aria-label='Profile selection page for chess levels'
        >
            <div style={{ fontFamily: 'Roboto Flex sans-serif' }} 
            className='mt-20 p-8 bg-gray-700
            bg-opacity-80 rounded-lg shadow-lg'>
                <h1 style= {{ fontFamily: 'Roboto Flex sans-serif' }} className='text-3xl font-bold
                mb-8 text-center'
                aria-label='Choose Your Chess Level'>
                    Choose Your Level 
                </h1>

                {/* Beginner Button */}
                
                <button onClick={() => 
                    handleRedirect('/')
                } className='w-full bg-gray-500
                text-white py-2 px-4 rounded-md hover:bg-gray-600
                mb-4 transition-colors' 
                aria-label='Choose your Beginner Level'
                role='button'
                tabIndex='0'
                >
                   Beginner 
                </button>

                {/* Intermediate Button */}
                <button onClick={() => 
                    handleRedirect('/')
                } className='w-full bg-gray-700
                text-white py-2 px-4 rounded-md hover:bg-gray-800 
                mb-4 transition-colors'
                aria-label='Choose Interediate Level'
                role='button'
                tabIndex='0'
                >
                    Intermediate 
                </button>

                 {/* Advanced Button*/}
                 <button onClick={() => 
                    handleRedirect('/')
                 } className='w-full bg-gray-800
                 text-white py-2 px-4 rounded-md 
                 hover:bg-gray-900 transition-colors'
                 aria-label='Choose Advanced Level'
                 role='button'
                 tabIndex='0'
                 >
                    Advanced 
                 </button>
            </div>
        </div>
    )
}

export default Profile;