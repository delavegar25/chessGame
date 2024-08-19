import React, {} from 'react';
import PawnImage from '../assets/white chess.png';
import { Link } from 'react-router-dom';

const LandingPage = () => {

    return (
        <div className='bg-cover bg-center min-h-screen min-w-screen flex flex-col justify-start items-center' 
        style={{ backgroundImage: `url(${PawnImage})`}}>
            <div className='w-full p-4 bg-opacity-50 justify-between items-center'>   
            <h1 className='text-left text-xl font-bold text-black'>
                CHESS HIVE  
                </h1>
            <div className='absolute 
            right-60 top-4'>
                <Link to='/signin'>
                   <button className='bg-gray-600
                   text-white 
                   font-bold
                   relative
                   left-56
                   py-2
                   px-4 rounded-lg'>
                     Login  
                   </button>
                </Link>
            </div>        
        </div>

        <div className='flex-grow flex items-center
        justify-center'>
            <h2 className='text-white
            text-4xl font-bold animate-fade'>
                "Welcome to Chess Hive <br />
                Home of Chess Players" 
            </h2>
        </div>
        </div>
    )
}


export default LandingPage;