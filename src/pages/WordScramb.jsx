/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import ButtonHome from "../components/ButtonHome";
import Navbar from "../components/Navbar";

const WordScramb = () => {
    const fruitsData = [
      { scrambled: "lpepa", correct: "apple" },
      { scrambled: "onagaer", correct: "orange" },
      { scrambled: "anbnaa", correct: "banana" },
      { scrambled: "pcleah", correct: "peach" },
      { scrambled: "wepmreonl", correct: "watermelon" },
      { scrambled: "yrrberlub", correct: "blueberry" },
      { scrambled: "rryehc", correct: "cherry" },
      { scrambled: "amngo", correct: "mango" },
      { scrambled: "olmneon", correct: "lemon" },
      { scrambled: "lime", correct: "lime" },
      { scrambled: "blackberry", correct: "blackberry" },
      { scrambled: "aveadoc", correct: "avocado" },
      { scrambled: "gerfpurit", correct: "grapefruit" },
      { scrambled: "rrbeay", correct: "berry" },
      { scrambled: "ranosb", correct: "bonsar" },
      { scrambled: "ignhppeaea", correct: "pineapple" },
      { scrambled: "tsareeb", correct: "beetras" },
      { scrambled: "rawpaay", correct: "papaya" },
      { scrambled: "llocauetno", correct: "cantaloupe" },
      { scrambled: "eerwiy", correct: "kiwi" },
    ];

  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  const checkAnswer = () => {
    const correctAnswer = fruitsData[currentQuestion].correct.toLowerCase();
    const userEnteredAnswer = userAnswer.toLowerCase();

    if (userEnteredAnswer === correctAnswer) {
      setIsCorrect(true);
      setScore(score + 1);
    } else {
      setIsCorrect(false);
      setScore(0);
    }

    setShowButtons(true);
  };

  const nextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
    setUserAnswer("");
    setIsCorrect(false);
    setShowButtons(false);
  };

  const tryAgain = () => {
    setCurrentQuestion(Math.floor(Math.random() * fruitsData.length));
    setUserAnswer("");
    setIsCorrect(false);
    setShowButtons(false);
  };

  return (
    <>
      <Navbar />
      <ButtonHome to="/" />
      <div className="flex flex-col items-center">
        <div className="bg-slate-400 w-80 rounded-md shadow-md shadow-slate-600">
          <div className="p-5">
            <h1 className="font-semibold text-xl text-center mb-6">
              Word Scramble
            </h1>
            <h3 className="text-sm">Score : <span className="font-bold">{score}</span></h3>
            <div className="mt-2 flex flex-col gap-2 items-center">
              <h2>Scrambled Words</h2>
              <h6 className="font-light text-xs text-slate-700">
                Unscramble the letters to reveal a secret word!
              </h6>
              <h3 className="text-sm italic mt-2">
                {fruitsData[currentQuestion].scrambled}
              </h3>
              <input
                type="text"
                className="bg-slate-200 w-8/12 rounded-md"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
              />
              <button
                onClick={checkAnswer}
                className="bg-slate-600 font-semibold text-white p-2 hover:bg-slate-500 rounded-md text-sm mt-3"
              >
                Check your answer
              </button>
              {showButtons && (
                <>
                  {isCorrect ? (
                    <div>
                      <p className="text-green-600 font-bold">Correct!</p>
                      {currentQuestion < fruitsData.length - 1 ? (
                        <button
                          onClick={nextQuestion}
                          className="bg-slate-600 font-semibold text-white p-2 hover:bg-slate-500 rounded-md text-sm mt-3"
                        >
                          Next Question
                        </button>
                      ) : (
                        <p className="text-blue-600 font-bold">All questions completed!</p>
                      )}
                    </div>
                  ) : (
                    <div>
                      <p className="text-red-600 font-bold">
                        Incorrect! The correct answer is{" "}
                        {fruitsData[currentQuestion].correct}
                      </p>
                      <button
                        onClick={tryAgain}
                        className="bg-slate-600 font-semibold text-white p-2 hover:bg-slate-500 rounded-md text-sm mt-3"
                      >
                        Try Again
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WordScramb;
