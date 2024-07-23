import React, { useState } from 'react';
import { Chess } from 'chess.js';

const HumanVsHumanGame = () => {
    const [game, setGame] = useState(new Chess());

    const handleMove = (move) => {
        // handle move
        if (game.move(move)) {
            setGame(new Chess(game.fen()));
        }
    };

    return (
        <div>
            <ChessBoard game={game} onMove={handleMove} />
        </div>
    )
}

export default HumanVsHumanGame; 