import React, { useState } from "react";
import Button from "./Button";
import Inputfield from "./Inputfield";

const StartComponent = () => {
  const [inputValue, setInputValue] = useState("");
  const [BtnClick, setBtnClick] = useState(false);


const inputChange = (event) => {
  setInputValue(event.target.value);
};

const ClickBtn = () => {
  setBtnClick = true;
};

return (
  <div>
    {BtnClick ? (
      <GameComponent inputValue={inputValue}/>
    ) : (
      <div className="start-div">
        <Inputfield />
        <Button ClickBtn={ClickBtn}/>
      </div>
    )}
  </div>
);
};

export default StartComponent;
