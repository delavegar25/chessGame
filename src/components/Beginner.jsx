import React, { useState } from 'react';

import ChessBoardImage from '../assets/white chess.png';

const BeginnerBoard = () => {
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

    return (
        <div className='bg-cover bg-center
        min-h-screen flex flex-col justify-start
        items-center'
        style={{ backgroundImage: `url(${
            ChessBoardImage
        })`}}
        role='main'
        aria-label='Chess game interface'
        >
          <div className='w-full max-w-lg'
          role='grid'
          aria-label='Chessboard'
          >
             {board}
          </div>

        </div>


    );
};

export default BeginnerBoard;