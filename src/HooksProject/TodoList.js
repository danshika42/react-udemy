import React from 'react'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import Todo from './Todo'
function TodoList(props) {
    return (
        <Paper style={{color:'black'}}>
        <List>
          {props.todos.map(todo=>(
            <>
            <Todo edit={props.edit} removeTodo={props.removeTodo}  done={props.done} task={todo.task} key={todo.id} id={todo.id} completed={todo.completed}/>
            <Divider/>
            </>
          ))}
        </List>
        </Paper>
    );
}

export default TodoList;

