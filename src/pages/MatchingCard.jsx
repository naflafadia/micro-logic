/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import ButtonHome from "../components/ButtonHome";

const MatchingCard = () => {
    const animals = ["🐶", "🐹", "🐰", "🐺", "🐨", "🐼", "🦊", "🦁"];
    const [cards, setCards] = useState([]);
    const [flippedIndexes, setFlippedIndexes] = useState([]);
    const [matchedPairs, setMatchedPairs] = useState([]);
    const [isGameWon, setIsGameWon] = useState(false);
    const [isGameStarted, setIsGameStarted] = useState(false);

    const shuffle = (array) => {
        let currentIndex = array.length, randomIndex;
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }
        return array;
    };

    const startGame = () => {
        const shuffledCards = shuffle([...animals, ...animals]);
        setCards(shuffledCards);
        setFlippedIndexes([]);
        setMatchedPairs([]);
        setIsGameWon(false);
        setIsGameStarted(true);
    };

    const handleCardClick = (index) => {
        if (!isGameStarted) {
            return;
        }

        if (flippedIndexes.length === 2 || flippedIndexes.includes(index) || matchedPairs.includes(cards[index])) {
            return;
        }

        const newFlippedIndexes = [...flippedIndexes, index];
        setFlippedIndexes(newFlippedIndexes);

        if (newFlippedIndexes.length === 2) {
            setTimeout(() => checkMatch(newFlippedIndexes), 1000);
        }
    };

    const checkMatch = (flippedIndexes) => {
        const [firstIndex, secondIndex] = flippedIndexes;
        const isMatch = cards[firstIndex] === cards[secondIndex];

        if (isMatch) {
            setMatchedPairs([...matchedPairs, cards[firstIndex]]);
            if (matchedPairs.length === animals.length - 1) {
                setIsGameWon(true);
            }
        }

        setTimeout(() => setFlippedIndexes([]), 500);
    };

    const handleTryAgain = () => {
        setIsGameStarted(false);
        startGame();
    };

    return (
    <>
    <Navbar />
    <ButtonHome to='/' />
        <div className="flex flex-col items-center">
            <div className="bg-slate-400 w-80 rounded-md shadow-md shadow-slate-600">
                <div className="p-5">
                    <h1 className="font-semibold text-xl text-center mb-2">Matching Game</h1>
                    <h5 className="font-light text-xs text-center mb-6">Match two consecutive animal images below for success!</h5>
                    <div className="flex gap-6 justify-center flex-wrap">
                        {cards.map((card, index) => (
                            <button
                                key={index}
                                className={`w-8 h-8 bg-slate-300 rounded-md shadow-md shadow-slate-600 ${flippedIndexes.includes(index) || matchedPairs.includes(card) ? 'text-white' : ''}`}
                                onClick={() => handleCardClick(index)}
                            >
                                {flippedIndexes.includes(index) || matchedPairs.includes(card) ? card : '?'}
                                </button>
                            ))}
                    </div>
                        {!isGameStarted && (
                            <div className="flex flex-col items-center mt-5 gap-3">
                                <button
                                    className="bg-slate-600 font-semibold text-white p-2 rounded-md hover:bg-slate-500 text-sm"
                                    onClick={startGame}
                                >
                                    Start Game
                                </button>
                            </div>
                        )}
                        {isGameWon && (
                            <div className="flex flex-col items-center mt-5 gap-3">
                                <h3 className="font-bold text-blue-800">You Win!</h3>
                                <button
                                    className="bg-slate-600 font-semibold text-white p-2 rounded-md hover-bg-slate-500 text-sm"
                                    onClick={handleTryAgain}
                                >
                                    Try Again
                                </button>
                            </div>
                        )}
                </div>
            </div>
        </div>
    </>
    );
};

export default MatchingCard;







