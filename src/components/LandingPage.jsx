import React, { useState, useEffect, useRef } from 'react';
import PawnImage from '../assets/white chess.png';
import { Link } from 'react-router-dom';

const LandingPage = () => {


    return (
        <div className='bg-cover bg-center min-h-screen min-w-screen flex flex-col justify-start items-center' 
        style={{ backgroundImage: `url(${PawnImage})`}}>
            <div className='w-full p-4 bg-opacity-50 justify-between items-center'>   
            <h1 className='text-left text-xl font-bold text-black'>
                CHESS MATCH 
                </h1>
            <div className='absolute 
            right-60 top-4'>
                <Link to='/signin'>
                  <button className='
                  text-white font-bold py-2
                  px-4 
                  relative
                  left-52
                  rounded'>
                     Sign in 
                  </button>
                </Link>
                <Link to='/signup'>
                   <button className='bg-gray-600
                   text-white 
                   font-bold
                   relative
                   left-52
                   py-2
                   px-4 rounded-lg'>
                     Sign Up 
                   </button>
                </Link>
            </div>
        
        </div>
        </div>
    )
}


export default LandingPage;