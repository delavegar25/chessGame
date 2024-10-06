import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ChessBoardImage from '../assets/white chess.png';

const ChessBoard = ({ username }) => {
    const [chess] = useState(new Chess()); // initialize chess game
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const board = [];
    const rows = 8;
    const cols = 8;

    useEffect(() => {
        const fetchGames = async () => {
            try {
                const response = await fetch(`https://api.chess.com/pub/player/${username}/games`);
                if (!response.ok) {
                    throw new Error('Failed to fetch games');
                }
                const data = await response.json();
                setGames(data.games);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchGames();
    }, [username]);

    const squareVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
    };

    const handleStart = () => {
        chess.reset(); // reset the board
        alert('Game Started');
    };

    const handleRestart = () => {
        chess.reset(); // reset the board
        alert('Game Restarted');
    };

    for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < cols; j++) {
            const isDark = (i + j) % 2 === 1;
            row.push(
                <motion.div
                    key={`${i}-${j}`}
                    className={`h-14 w-14 relative top-20 ${isDark ? "bg-gray-800" : "bg-gray-200"}`}
                    variants={squareVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{
                        delay: (i * 8 + j) * 0.05,
                        duration: 0.3,
                    }}
                />
            );
        }
        board.push(<div key={i} className="flex">{row}</div>);
    }

    return (
        <div className="bg-cover bg-center min-h-screen flex flex-col justify-start items-center"
             style={{ backgroundImage: `url(${ChessBoardImage})` }} role="main" aria-label="Chess game interface">
             
            <motion.div className="w-full max-w-lg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5 }}
                        role="grid"
                        aria-label="Chessboard">
                {board}
            </motion.div>

            {loading ? <p>Loading games...</p> : 
              error ? <p>Error: {error}</p> : 
              <ul>{games.map((game, index) => (
                <li key={index}>
                    Game {index + 1}: <a href={game.url}>{game.url}</a>
                </li>
              ))}</ul>
            }

            <motion.div className="mt-20 p-6 space-x-4"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ type: 'spring', stiffness: 100, duration: 1 }}>
                <motion.button onClick={handleStart}
                               className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md shadow-lg"
                               whileHover={{ scale: 1.1 }}
                               whileTap={{ scale: 0.95 }}
                               role="button" tabIndex="0" aria-pressed="false"
                               aria-label="Start the game">
                    Start
                </motion.button>

                <motion.button onClick={handleRestart}
                               className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-md shadow-lg"
                               whileHover={{ scale: 1.1 }}
                               whileTap={{ scale: 0.95 }}
                               role="button" tabIndex="0" aria-pressed="false"
                               aria-label="Restart the game">
                    Restart
                </motion.button>
            </motion.div>
        </div>
    );
};

export default ChessBoard;