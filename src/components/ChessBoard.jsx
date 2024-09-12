import React, { useState } from 'react';

import ChessBoardImage from '../assets/white chess.png';

const ChessBoard = () => {
        const board = [];
        const rows = 8;
        const cols = 8;

        for(let i = 0; i < rows; i++) {
            const row = [];
            for (let j = 0; j < cols; j++) {
                const isDark = (i + j) % 2 === 1;
                row.push(
                    <div
                    key={`${i}-${j}`}
                    className={`h-14 w-14 relative top-20 ${isDark ? "bg-gray-800" : "bg-gray-200"}`}
                    >
                    </div>
                );
            }
            board.push(<div key={i}
                className='flex'>{row}</div>)
            }

            // Handlers for start and restart buttons
            const handleStart = () => {
                alert('Game Started')
            };

            const handleRestart = () => {
                alert('Game Restarted')
            };

    return (
        <div className='bg-cover bg-center
        min-h-screen flex flex-col justify-start
        items-center'
        style={{ backgroundImage: `url(${
            ChessBoardImage
        })`}}
        >
          <div className='w-full max-w-lg'>
             {board}

             {/* Start and Restart buttons */}

             <div className='mt-20 p-6 space-x-4'>
                <button onClick={handleStart}
                className='bg-gray-800 hover:bg-gray-700
                text-white font-bold py-2 px-4 rounded-md shadow-lg'
                > 
                    Start 
                </button>

                <button onClick={handleRestart}
                className='bg-gray-500 hover:bg-gray-600
                text-white font-bold py-2 px-4 rounded-md
                shadow-lg'
                >
                   Restart 
                </button>

             </div>

          </div>

        </div>


    );
};

export default ChessBoard;