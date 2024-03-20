import React, { useState } from "react";
const Component1 = () => {
    const arr = ["red", "blue", "yellow"];
    const [color, SetColor] = useState(arr[0]);
    const handleClick = (c) => {SetColor(arr[c])};
    return (
        <div className={`flex flex-row justify-center items-center w-screen h-screen bg-[${color}]`}>
        <button className="h-12 w-16 rounded-lg bg-black text-white m-8" onClick={()=>handleClick(0)}>RCB</button>
        <button className="h-12 w-16 rounded-lg bg-black text-white m-8" onClick={()=>handleClick(1)}>MI</button>
        <button className="h-12 w-16 rounded-lg bg-black text-white m-8" onClick={()=>handleClick(2)}>CSK</button>
        
        </div>
    );
};

export default Component1;
