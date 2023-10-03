import React from "react";

const Inputfield = ( { inputValue, onChange } ) => {
    

    return (

        <input type="text" value={inputValue} onChange={onChange} />
    )
}


export default Inputfield;