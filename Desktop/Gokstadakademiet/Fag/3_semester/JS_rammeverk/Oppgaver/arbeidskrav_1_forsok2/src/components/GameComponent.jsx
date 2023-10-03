import React, { useState } from "react";
import CountdownComponent from "./CountdownComponent";
import Inputfield from "./Inputfield";
import ApiComponent from "./ApiComponent";
import høstData from "../Høst.json";

const GameComponent = () => {
  // const [inputValue, setInputValue] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);


  const handleKeyPress = (event) => {
    if (event.key === " ") {
      console.log('fff')
      // Spacebar pressed, move to the next word
      setCurrentWordIndex((prevIndex) =>
        prevIndex < words.length - 1 ? prevIndex + 1 : 0
      );
    }
   
  };


  // const inputChange = (event) => {
  //   setInputValue(event.target.value);
  // };



  const words = høstData.ord;

  return (
    <>
      <CountdownComponent />
      <Inputfield onSpacebarClick={handleKeyPress} />
    
      <ApiComponent currentWordIndex={currentWordIndex} />
    </>
  );
};

export default GameComponent;
