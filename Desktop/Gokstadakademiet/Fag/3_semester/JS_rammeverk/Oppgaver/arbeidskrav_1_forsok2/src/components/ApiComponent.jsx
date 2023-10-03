import React from "react";
import høstData from "../Høst.json"


const ApiComponent = ( { currentWordIndex } ) => {
  const words = høstData.ord;
 

 // Use the index to get the current word from the word array
 let currentWord = words[currentWordIndex];
   
  
  return (
  
      <div>
        <p>{currentWord}</p>
      </div>
  );
};

export default ApiComponent;
