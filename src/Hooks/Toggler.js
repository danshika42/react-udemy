import React  from 'react';
import useToggle from '../hooks_usestate/useToggle';
function Toggler() {
    const [isHappy,toggleIsHappy]=useToggle(true);
    const [isHeartBroken,toggleIsHeartBroken]=useToggle(false);

    // const [isHappy,setIsHappy]=useState(true);
    // const [isHeartBroken,setIsHeartBroken]=useState(false);
    // const toggleIsHappy=()=>{
    //     setIsHappy(!isHappy);
    // }
    // const toggleIsHeartBroken=()=>{
    //     setIsHeartBroken(!isHeartBroken);
    // }
    return(
        <div>
            <h1 onClick={toggleIsHappy} >{isHappy?'😀':'😢'}</h1>
            <h1 onClick={toggleIsHeartBroken} >{isHeartBroken?'💔':'💖'} </h1>
        </div>
    )
}
export default Toggler;