import React, { useState } from 'react';
import { Chess } from 'chess.js';
import ChessBoard from "ChessBoard";

const ChessGame = () => {
   const [game] = useState(new Chess());

   const handleMove = (move) => {
    // if the move is legal, apply it
    if(game.move(move)) {
        // AI (simple random move for now)
        const possibleMoves = game.moves();
        if(possibleMoves.length > 0) {
            const randomMove = possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
            game.move(randomMove);
        }
    }
   };

   return (
    <div className='flex flex-col items-center'>
        <ChessBoard 
        position={game.fen()}
        onDrop={({ sourceSquare, targetSquare }) => 
         handleMove({ from: sourceSquare, to: targetSquare })
        }
   />
    </div>
   ); 
}

export default ChessGame;