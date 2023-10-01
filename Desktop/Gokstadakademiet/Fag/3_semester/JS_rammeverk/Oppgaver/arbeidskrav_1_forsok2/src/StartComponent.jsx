import React, { useState } from "react";
import Button from "./Button";
import Inputfield from "./Inputfield";
import "./App.css";
import PreGameComponent from "./PreGameComponent";

const StartComponent = () => {
  const [inputValue, setInputValue] = useState("");
  const [BtnClick, setBtnClick] = useState(false);


const inputChange = (event) => {
  setInputValue(event.target.value)
};

const ClickBtn = () => {
  setBtnClick(true);
};

return (
  <div>
    {BtnClick ? (
      <PreGameComponent inputValue={inputValue}/>
    ) : (
      <div className="start-div">
        <Inputfield onChange={inputChange}/>
        <Button ClickBtn={ClickBtn}/>
      </div>
    )}
  </div>
);
};

export default StartComponent;
