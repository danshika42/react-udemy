import React,{useState} from 'react'

function CounterHooks(){
    const [count,setcount]=useState(0);
    return(
        <div>
            <h1>The count is :  {count}</h1>
            <button onClick={()=>setcount(count+1)} >Click Me</button>
        </div> 
    )
}

export default CounterHooks;