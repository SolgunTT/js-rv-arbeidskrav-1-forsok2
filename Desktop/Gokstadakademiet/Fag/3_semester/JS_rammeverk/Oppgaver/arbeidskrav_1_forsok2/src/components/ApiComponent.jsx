import React from "react";
import høstData from "../Høst.json"

// Getting the current word index as a prop from GameComponent
const ApiComponent = ( { wordIndex } ) => {
  const words = høstData.ord;
 

 // Use that index to get the current word from the word array
 let currentWord = words[wordIndex];
   
  
  return (
  
      <div>
        <p>{currentWord}</p>
      </div>
  );
};

export default ApiComponent;
