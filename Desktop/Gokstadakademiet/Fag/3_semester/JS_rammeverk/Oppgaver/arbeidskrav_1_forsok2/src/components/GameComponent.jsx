import React, { useState, useEffect } from "react";
import CountdownComponent from "./CountdownComponent";
import Inputfield from "./Inputfield";
import ApiComponent from "./ApiComponent";
import PointComponent from "./PointComponent"
import Høst from "../Høst.json";

const GameComponent = ({ playerName }) => {
  const [wordIndex, setWordIndex] = useState(0);
  const words = Høst.ord;
  const currentWord = words[wordIndex];
  const [inputValue, setInputValue] = useState("");
  const [matchCount, setMatchCount] = useState(0);
  const [totalMatchCount, setTotalMatchCount] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === " ") {
        e.preventDefault();
        if (wordIndex < words.length) {
          setWordIndex(wordIndex + 1);
        }
        setInputValue("");
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [wordIndex, words]);

  const handleInputChange = (e) => {
    const enteredText = e.target.value;
    setInputValue(enteredText);


    if (enteredText === currentWord.substring(0, enteredText.length)) {
      setMatchCount(enteredText.length);
      setTotalMatchCount(totalMatchCount + 1);
    }
  };



  return (
    <div>
      <CountdownComponent />
      <Inputfield onSpacebarClick={handleInputChange} value={inputValue}/>
      <PointComponent totalMatchCount={totalMatchCount}/>
    <ApiComponent wordIndex={wordIndex} />
    </div>
  );
}
;

export default GameComponent;


