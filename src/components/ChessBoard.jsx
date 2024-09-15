import React from 'react';
import { motion } from 'framer-motion';
import ChessBoardImage from '../assets/white chess.png';

const ChessBoard = () => {
        const board = [];
        const rows = 8;
        const cols = 8;

        //Animations for squares 
        const squareVariants = {
            hidden: { opacity:0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
        };


        // Animating the squares of the board
        for(let i = 0; i < rows; i++) {
            const row = [];
            for (let j = 0; j < cols; j++) {
                const isDark = (i + j) % 2 === 1;
                row.push(
                    <motion.div
                    key={`${i}-${j}`}
                    className={`h-14 w-14 relative top-20 ${isDark ? "bg-gray-800" : "bg-gray-200"}`}
                    variants={squareVariants}
                    initial='hidden'
                    animate='visible'
                    transition={{
                        delay: (i *8 + j) * 0.05, // delay based on index for staggered animation                 
                    duration:0.3    
                    }}
                    >
                    </motion.div>
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
        role='main'
        aria-label='Chess game interface'
        >

            <motion.div 
                className='w-full max-w-lg'
                initial={{ opacity: 0 }}
                animate= {{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                role='grid'
                aria-label='Chessboard'
                // fading in the chessboard
          >
             {board}

             {/* Start and Restart buttons */}

             <motion.div 
              className='mt-20 p-6 space-x-4'
                initial={{y: 50, opacity: 0}}
                animate={{y: 0, opacity:1}}
                transition={{ type: 'spring', 
                    stiffness:100, duration: 1 
                }}
                >

                <motion.button 
                onClick={handleStart}
                className='bg-gray-800 hover:bg-gray-700
                text-white font-bold py-2 px-4 rounded-md shadow-lg'
                whileHover={{ scale:1.1 }}// button hover animation
                whileTap={{ scale: 0.95 }} // button press animation
                role='button'
                tabIndex='0'
                aria-pressed='false'
                aria-label='Start the game'
                > 
                    Start 
                </motion.button>

                <motion.button 
                onClick={handleRestart}
                className='bg-gray-500 hover:bg-gray-600
                text-white font-bold py-2 px-4 rounded-md
                shadow-lg'
                whileHover={{scale: 1.1}} // button hover animation 
                whileTap={{scale:0.95}}  // button press animation
                role='button'
                tabIndex='0'
                aria-pressed='false'
                aria-label='Restart the game'
                >
                   Restart 
                </motion.button>

             </motion.div>
        </motion.div>
    </div>

    );
};

export default ChessBoard;