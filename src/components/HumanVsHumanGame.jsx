import React, { useState } from 'react';
import { Chess } from 'chess.js';
import HumanAI from '../assets/white chess.png';

const HumanVsHumanGame = () => {
    const [game, setGame] = useState(new Chess());

    const handleMove = (move) => {
        // handle move
        if (game.move(move)) {
            setGame(new Chess(game.fen()));
        }
    };

    return (
        <div className='bg-cover bg-center
        min-h-screen flex flex-col justify-start
        items-center'
        style={{ backgroundImage: `url(${
            HumanAI  
        })`}}>
            <ChessBoard game={game} onMove={handleMove} />
        </div>
    )
}

export default HumanVsHumanGame; 