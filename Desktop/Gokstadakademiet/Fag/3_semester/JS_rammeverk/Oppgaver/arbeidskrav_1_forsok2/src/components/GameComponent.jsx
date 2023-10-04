import React, { useState, useEffect } from "react";
import CountdownComponent from "./CountdownComponent";
import Inputfield from "./Inputfield";
import ApiComponent from "./ApiComponent";
import PointComponent from "./PointComponent";
import Høst from "../Høst.json";

const GameComponent = ({ playerName }) => {
  const [wordIndex, setWordIndex] = useState(0);
  const words = Høst.ord;
  const currentWord = words[wordIndex];
  const [inputValue, setInputValue] = useState("");
  const [score, setScore] = useState(0);
  const [consecutiveCorrectWords, setConsecutiveCorrectWords] = useState(0);

  

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === " ") {
        e.preventDefault();
        if (wordIndex < words.length) {
          setWordIndex(wordIndex + 1);
          setInputValue("");
        }
        
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [ wordIndex, words ]);

  const handleInputChange = (e) => {
    const enteredText = e.target.value;
    setInputValue(enteredText);

    let wordProgress = 0;

    for (let index = 0; index < enteredText.length; index++) {
      if (enteredText[index] === currentWord[index]) {
        wordProgress++;
      } else {
        setScore((prevScore) => Math.max(prevScore - 1, -5));
      }
    }

    if (wordProgress === currentWord.length) {
      setScore((prevScore) => prevScore + 50);
      setConsecutiveCorrectWords((prevCount) => prevCount + 1);
    } else {
      setConsecutiveCorrectWords(0);
    }

    if (consecutiveCorrectWords === 2) {
      setScore((prevScore) => prevScore + 100);
      setConsecutiveCorrectWords(0);q
    }
  };

  return (
    <div>
      <CountdownComponent />
      <Inputfield onSpacebarClick={handleKeyDown} value={inputValue} onChange={handleInputChange}/>
      <PointComponent score={score} />
      <ApiComponent wordIndex={wordIndex} />
    </div>
  );
};

export default GameComponent;
