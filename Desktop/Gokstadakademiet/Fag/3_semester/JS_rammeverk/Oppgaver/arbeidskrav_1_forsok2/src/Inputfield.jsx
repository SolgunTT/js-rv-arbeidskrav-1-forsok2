import React from "react";

const Inputfield = ( { inputValue, onChange } ) => {

    return (

        <input value={inputValue} onChange={onChange} />
    )
}


export default Inputfield;