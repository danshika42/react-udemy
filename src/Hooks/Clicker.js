import React, {useState, useEffect} from "react";

function Clicker() {
    const [count,setCount] = useState(0);
    useEffect(()=>{
        alert("Somethiing Changed");
        document.title=`You Clicked ${count} times`
    })
    return (
        <div>
            <h1>This is count {count}</h1>
            <button onClick={()=>{setCount(count+1)}} >Click Me</button>
        </div>
    );
}

export default Clicker;