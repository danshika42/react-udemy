import {useState} from 'react'

function useForm(useinitial) {
    const [state,setState]=useState(useinitial);
    const handleSetValue=(e)=>{
        setState(e.target.value);
    }
    const handleSubmit=()=>{
        setState('');
    }
    return [state,handleSetValue,handleSubmit];
}

export default useForm;