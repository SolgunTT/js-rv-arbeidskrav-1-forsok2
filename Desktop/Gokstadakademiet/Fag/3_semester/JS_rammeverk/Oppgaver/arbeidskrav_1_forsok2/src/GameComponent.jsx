import React, { useState } from "react";
import "./App.css";
import Inputfield from "./Inputfield";

const GameComponent = ({ inputValue }) => {
  const [preGameCount, setPreGameCount] = useState("3");
  const [isPreGameCountDone, setIsPreGameCountDone] = useState(false);

  setPreGameCount(preGameCount - 1);

  if (preGameCount <= 0) {
    setIsPreGameCountDone(true);
  }

  return (
    <div>
      {isPreGameCountDone ? (
        <Inputfield />
      ) : (
        <>
        <p>{preGameCount}</p>
        <p className="good-luck-p">Lykke til, {inputValue}!</p>
        </>
      )};
    </div>
  );
};

export default GameComponent;
