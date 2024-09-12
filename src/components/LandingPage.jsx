import React from 'react';
import PawnImage from '../assets/white chess.png';
import { Link } from 'react-router-dom';

const LandingPage = () => {

    return (
        <div className='bg-cover bg-center min-h-screen min-w-screen flex flex-col justify-start items-center' 
        style={{ backgroundImage: `url(${PawnImage})`}}
        role='main'
        aria-label='Chess Hive Landing Page'>

            <div className='w-full p-4 bg-opacity-50 justify-between items-center'>   
            <h1 style= {{ fontFamily: 'Roboto Flex sans-serif' }}
            className='text-left text-xl font-bold text-black'>
                CHESS HIVE  
                </h1>
            <div style={{ fontFamily: 'Roboto Flex sans-serif'}} 
            className='absolute 
            right-60 top-4'>
                <Link to='/signin' aria-label='Sign in to Chess Hive'>
                   <button className='bg-gray-600
                   text-white 
                   font-bold
                   relative
                   left-56
                   py-2
                   px-4 rounded-lg'
                   aria-label='Play Game'>
                     Play Game   
                   </button>
                </Link>
            </div>        
        </div>

        <div 
        className='flex-grow flex items-center
        justify-center'>
            <h2 style={{ fontFamily: 'Roboto Flex sans-serif'}}
            className='text-white
            text-4xl font-bold animate-fade text-center mb-20' aria-live='polite'>   
                Home of Chess Players 
            </h2>
        </div>
        </div>
    )
}


export default LandingPage;