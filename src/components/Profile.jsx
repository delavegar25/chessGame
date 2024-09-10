import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileImage from '../assets/white chess.png';

const Profile = () => {
    const navigate = useNavigate();

    const handleRedirect = (level) => {
        navigate(`/game/${level}`);
    };


    return (
        <div className='bg-cover bg-center
        min-h-screen flex flex-col justify-start
        items-center'
        style={{ backgroundImage: `url(${
            ProfileImage
        })`}}>
            <div style={{ fontFamily: 'Roboto Flex sans-serif' }} 
            className='mt-20 p-8 bg-white
            bg-opacity-80 rounded-lg shadow-lg'>
                <h1 style= {{ fontFamily: 'Roboto Flex sans-serif' }} className='text-3xl font-bold
                mb-8 text-center'>
                    Choose Your Level 
                </h1>

                {/* Beginner Button */}
                
                <button onClick={() => 
                    handleRedirect('beginner')
                } className='w-full bg-green-500
                text-white py-2 px-4 rounded-md hover:bg-green-600
                mb-4 transition-colors' 
                >
                   Beginner 
                </button>

                {/* Intermediate Button */}
                <button onClick={() => 
                    handleRedirect('Intermediate')
                } className='w-full bg-yellow-500
                text-white py-2 px-4 rounded-md hover:bg-yellow-600 
                mb-4 transition-colors'
                >
                    Intermediate 
                </button>

                 {/* Advanced Button*/}
                 <button onClick={() => 
                    handleRedirect('advanced')
                 } className='w-full bg-red-500
                 text-white py-2 px-4 rounded-md 
                 hover:bg-red-600 transition-colors'
                 >
                    Advanced 
                 </button>

            </div>

        </div>
    )
}

export default Profile;