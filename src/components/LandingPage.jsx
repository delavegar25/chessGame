import React, { useState, useEffect, useRef } from 'react';
import PawnImage from '../assets/white chess.png';
import { Link } from 'react-router-dom';

const LandingPage = () => {


    return (
        <div className='bg-cover bg-center min-h-screen min-w-screen flex flex-col justify-start items-center' 
        style={{ backgroundImage: `url(${PawnImage})`}}>
            <div className='w-full p-4 bg-opacity-50 justify-between items-center'>   
            <h1 className='text-left text-3xl font-bold text-black'>
                CHESS MATCH 
                </h1>
        
        </div>
        </div>
    )
}


export default LandingPage;