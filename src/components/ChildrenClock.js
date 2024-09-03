import React, { useState, useEffect } from "react";

const ChildrenClock = () => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    let intervalId = setInterval(() => {
      setTimer((n) => n + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  });

  return <div>{timer}s</div>;
};

export default ChildrenClock;
