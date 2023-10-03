import React from "react";

const Inputfield = ( { inputValue, onChange, onSpacebarClick } ) => {
    

    return (

        <input type="text" value={inputValue} onChange={onChange} onKeyDown={onSpacebarClick}/>
    )
}


export default Inputfield;