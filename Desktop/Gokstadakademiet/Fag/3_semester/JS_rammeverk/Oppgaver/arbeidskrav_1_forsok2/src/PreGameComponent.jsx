import React, { useState, useEffect } from "react";
import "./App.css";
import Inputfield from "./Inputfield";


// Countdown-before-game-functionality:
const PreGameComponent = ({ inputValue }) => {
  const [preGameCount, setPreGameCount] = useState("3");
  const [isPreGameCountDone, setIsPreGameCountDone] = useState(false);

useEffect(() => {

const intervalId = setInterval (() => {
  setPreGameCount((prevGameCount) => prevGameCount - 1);

  if (preGameCount <= 1) {
    clearInterval(intervalId);
    setIsPreGameCountDone(true);
  }
}, 1000);

 
return () => {
    clearInterval(intervalId);

}}, [preGameCount]);


return (
    <div>
      {isPreGameCountDone ? (
        <Inputfield />
      ) : (
        <>
        
        <p className="good-luck-p">Lykke til, {inputValue}!</p>
        <p className="pre-game-countdown-p">{preGameCount}</p>
        </>
      )};
    </div>
  );
};


export default PreGameComponent;
