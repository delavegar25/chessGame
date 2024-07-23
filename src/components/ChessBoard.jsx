import React from 'react';
import { Chess } from 'chess.js'

const ChessBoard = ({ game, onMove }) => {
    return(
        <div className='grid grid-cols-8 gap-1'>
            {game.board().flat().map((square, index) => (
                <div
                key={index}
                className={`w-16 h-16 flex justify-center items-center ${
                    (Math.floor(index / 8) + (index % 8)) % 2 === 0
                    ? 'bg-gray-200'
                    : 'bg-green-500'
                }`}>

                </div>
            ))}

        </div>
    )
}