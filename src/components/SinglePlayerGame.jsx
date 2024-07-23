import React, { useState } from 'react';
import { Chess } from 'chess.js';

const SinglePlayerGame = () => {
    const [game, setGame] = useState(new Chess());
    const handleMove = (move) => {
        // Handle player's move
        if(game.move(move)) {
            setGame(new Chess(game.fen()));
        // add AI logic here
        }
    };
    return (
        <div>
            <h1>Single Player Mode</h1>
        <ChessBoard game={game} onMove={handleMove} />
        </div>
    );
};

export default SinglePlayerGame;