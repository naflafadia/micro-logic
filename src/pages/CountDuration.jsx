/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import ButtonHome from "../components/ButtonHome";

const CountDuration = () => {
  const [targetDate, setTargetDate] = useState("");
  const [counting, setCounting] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const handleStart = () => {
    if (!targetDate) {
      alert("Date must be filled in");
    } else {
      setCounting(true);
    }
  };

  const handleReset = () => {
    setCounting(false);
    setTargetDate("");
    setDays(0);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  };

  useEffect(() => {
    let interval;

    const calculateTime = () => {
      const now = new Date().getTime();
      const target = new Date(targetDate).getTime();
      const distance = target - now;

      const calcDays = Math.floor(distance / (1000 * 60 * 60 * 24));
      const calcHours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const calcMinutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const calcSeconds = Math.floor((distance % (1000 * 60)) / 1000);

      setDays(calcDays);
      setHours(calcHours);
      setMinutes(calcMinutes);
      setSeconds(calcSeconds);

      if (distance < 0) {
        clearInterval(interval);
        setCounting(false);
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      }
    };

    if (counting) {
      interval = setInterval(calculateTime, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [counting, targetDate]);

  return (
    <>
      <Navbar />
      <ButtonHome to="/" />
      <div className="flex flex-col items-center">
        <div className="bg-slate-400 w-80 rounded-md shadow-md shadow-slate-600">
          <div className="p-5">
            <h1 className="font-semibold text-xl text-center mb-6">Countdown Time</h1>
            <div className="mt-2 flex flex-col gap-2 items-center">
              <h2 className="font-thin">Enter the Target Date and Time:</h2>
              <input
                type="datetime-local"
                className="bg-slate-200 w-8/12 rounded-md"
                value={targetDate}
                onChange={(e) => setTargetDate(e.target.value)}
              />
              <div className="mt-5 flex justify-center gap-3">
                <button
                  className="bg-slate-600 font-semibold text-white p-2 hover:bg-slate-500 rounded-md text-sm"
                  onClick={handleStart}
                >
                  {counting ? "Count..." : "Start"}
                </button>
                {counting && (
                  <button
                    className="bg-slate-600 font-semibold text-white p-2 rounded-md hover:bg-slate-500 text-sm"
                    onClick={handleReset}
                  >
                    Reset
                  </button>
                )}
              </div>
              <h3 className="text-sm">Countdown:</h3>
              <h4 className="text-sm font-thin">
                {counting
                  ? `Counting down: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`
                  : "Not counting"}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CountDuration;