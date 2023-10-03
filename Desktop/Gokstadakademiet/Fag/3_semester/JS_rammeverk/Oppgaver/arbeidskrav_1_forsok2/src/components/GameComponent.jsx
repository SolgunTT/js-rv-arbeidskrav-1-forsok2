import React, { useState } from "react";
import CountdownComponent from "./CountdownComponent";
import Inputfield from "./Inputfield";
import ApiComponent from "./ApiComponent";
import PointComponent from "./PointComponent"
import høstData from "../Høst.json";

const GameComponent = () => {
  const [inputValue, setInputValue] = useState("");
  const [points, setPoints] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const words = høstData.ord;


  const handleKeyPress = (event) => {
    if (event.key === " ") {
      // Spacebar pressed, move to the next word
      setCurrentWordIndex((prevIndex) =>
        prevIndex < words.length - 1 ? prevIndex + 1 : 0
      );
    }
   
  };

  const currentWord = words[currentWordIndex]; 

const inputChange = (event) => {
  const enteredText = event.target.value;
    setInputValue(enteredText);

    let points = 0;
    for (let i = 0; i < enteredText.length; i++) {
      if (enteredText[i] === currentWord[i]) {
        points++;
      }

      setPoints(points); 

};



  return (
    <div>
      <CountdownComponent />
      <Inputfield onSpacebarClick={handleKeyPress} />
      <PointComponent value={points} />
    <ApiComponent currentWordIndex={currentWordIndex} />
    </div>
  );
}
};

export default GameComponent;
c

