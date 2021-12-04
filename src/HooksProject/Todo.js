import React,{useState} from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Checkbox from '@material-ui/core/Checkbox'
import IconButton from '@material-ui/core/IconButton'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import useForm from '../hooks_usestate/useForm'
import useTodostate from '../hooks_usestate/useTodostate';

function Todo(props) {
    const [newTodo,setUpdatedTodo,reset]=useForm(props.task);
    const [isEditing,setEdit]=useState(false);

    if(isEditing){
        return (
        <Paper>
            <form onSubmit={e=>{
                e.preventDefault();
                // props.addtodo(value);
                setEdit(!isEditing);
                props.edit(props.id,newTodo);
                reset();
            }}>
           <TextField value={newTodo} onChange={setUpdatedTodo}  />
            <button>Add Todo</button>
            </form>
        </Paper>
        )
    }
    
    return (
        <div> 
            <ListItem>
                <Checkbox tabIndex={-1} checked={props.completed} 
                    onClick={()=>{
                        props.done(props.id);
                    }}
                />
                <ListItemText style={{
                    textDecoration:props.completed?'line-through':'none'
                }}>
                    {props.task}
                </ListItemText>
                <ListItemSecondaryAction>
                    <IconButton aria-label='delete' 
                        onClick={()=>{
                            props.removeTodo(props.id);
                        }}>
                        <DeleteIcon/>
                    </IconButton>
                    <IconButton aria-label='edit' 
                        onClick={()=>{
                            setEdit(!isEditing);
                        }}
                    >
                        <EditIcon/>
                    </IconButton>
                </ListItemSecondaryAction>
                
            </ListItem>
        </div>
    );
}

export default Todo;