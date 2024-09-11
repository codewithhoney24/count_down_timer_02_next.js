
"use client"
import React, { useState, useEffect } from 'react';

const MyCountdownTimer: React.FC = () => {
  const [time, setTime] = useState<number>(0); 
  const [isRunning, setIsRunning] = useState<boolean>(false); 
  const [remainingTime, setRemainingTime] = useState<number>(0); 

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isRunning && remainingTime > 0) {
      timer = setInterval(() => {
        setRemainingTime((prev) => prev - 1);
      }, 1000);
    } else if (remainingTime === 0 && isRunning) {
      setIsRunning(false);
    }

    return () => clearInterval(timer); 
  }, [isRunning, remainingTime]);

  const handleStart = () => {
    if (time > 0) {
      setRemainingTime(time);
      setIsRunning(true);
    }
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setTime(0);
    setIsRunning(false);
    setRemainingTime(0);
  };

  return (
    <div className="flex flex-col items-center mt-40 ml-80 p-4 w-2/4 bg-red-300  ">
      <h1 className="text-4xl font-bold mb-4 text-fuchsia-900" >Countdown Timer</h1>

      <input
        type="number"
        className="border-2 border-gray-300 p-2 mb-4"
        placeholder="Enter time in seconds"
        value={time > 0 ? time : ""}
        onChange={(e) => setTime(Number(e.target.value))}
      />

      <div className="text-2xl mb-4 text-lime-900 font-medium" >
        {remainingTime > 0 ? `${remainingTime} seconds remaining` : "Time's up!"}
      </div>

      <div className="space-x-2">
        <button
          onClick={handleStart}
          className="bg-lime-800 hover:bg-lime-300 text-white font-bold py-2 px-4 rounded"
        >
          Start
        </button>

        <button
          onClick={handlePause}
          className="bg-fuchsia-900 hover:bg-fuchsia-300 text-white font-bold py-2 px-4 rounded"
        >
          Pause
        </button>

        <button
          onClick={handleReset}
          className="bg-orange-900 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded"
        >
          Reset
        </button>
      </div>

      <footer className="mt-10 text-orange-900 font-normal">
        Under the supervision of Nousheen
      </footer>
    </div>
  );
};

export default MyCountdownTimer;
