import React from 'react'
import useForm from '../hooks_usestate/useForm';

function SimpleFormHooks() {
    // const [val,setValue]=useState('');
    const [state,handleSetValue,handleSubmit]=useForm('');
    const [password,updatePassword,handleSubmitPassword]=useForm('');
    // const handleSetValue=(e)=>{
    //     setValue(e.target.value);
    // }

    // const handleSubmit=(e)=>{
    //     e.preventDefault();
    //     setValue('');
    // }
    return (
        <div>
           
                <h1>The value is {state}</h1>
                <input
                    type='text'
                    value={state}
                    onChange={handleSetValue}
                >
                </input>
                <button onClick={handleSubmit}>Click Me</button>

                <h1>The value is {password}</h1>
                <input
                    type='text'
                    value={password}
                    onChange={updatePassword}
                >
                </input>
                <button onClick={handleSubmitPassword}>Click Me</button>
            
        </div>
    );
}

export default SimpleFormHooks;