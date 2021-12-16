import React from 'react'
import useForm from '../hooks_usestate/useForm'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'

function TodoForm(props) {
    const [value,handleChange,reset]=useForm('');
    return (
        <Paper>
            <form onSubmit={e=>{
                e.preventDefault();
                props.addtodo(value);
                reset();
            }}>
            <TextField value={value} onChange={handleChange}  />
            <button>Add Todo</button>
            </form>
        </Paper>
    );
}

export default TodoForm;
