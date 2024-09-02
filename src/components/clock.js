import React, { useState, useEffect } from "react";

const Clock = () => {
  let [isRunning, setIsRunning] = useState(false);
  let [timer, setTimer] = useState(0);

  let [lap, setLap] = useState([]);
  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setTimer((n) => n + 1);
      }, 10);

      return () => clearInterval(interval);
    }
  }, [isRunning]);

  const timeConverter = (number) => {
    let doli = number % 100;
    let seconds = parseInt(number / 100) % 60;
    let minutes = parseInt(number / 3600) % 60;

    return minutes + ":" + seconds + ":" + doli;
  };

  const handleResume = () => {
    setIsRunning(!isRunning);
  };

  // const handleZero = (time) => {
  //   time < 10 ? "0" + time : "" + time;
  // };
  const handleLap = () => {
    let doli = timer % 100;
    let seconds = parseInt(timer / 100) % 60;
    let minutes = parseInt(timer / 3600) % 60;
    let data = [...lap];
    data.push(minutes + ":" + seconds + ":" + doli);
    setLap(data);
  };

  console.log(lap);
  return (
    <div className="flex flex-col gap-10 w-[300px] mx-auto bg-gray-200 p-10">
      <div className="flex justify-center"> {timeConverter(timer)} </div>
      <div></div>
      <div className="flex gap-2 items-center justify-center">
        {!isRunning && (
          <button onClick={handleResume} className="p-4 bg-blue-500 w-fit">
            Play
          </button>
        )}
        {isRunning && (
          <button onClick={handleResume} className="p-4 bg-blue-500 w-fit">
            Resume
          </button>
        )}
        <button onClick={handleLap} className="p-4 bg-blue-500 w-fit">
          Lap
        </button>
      </div>
      <div>
        {lap?.map((time) => (
          <p> {time} </p>
        ))}
      </div>
    </div>
  );
};

export default Clock;
