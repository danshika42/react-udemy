import React ,{useEffect} from 'react'
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import TodoList from './TodoList'
import TodoForm from './TodoForm'
import useTodostate from '../hooks_usestate/useTodostate';


function TodoApp() {
  
    const {todos,addtodo,done,removeTodo,edit}=useTodostate([]);
  
    return (
        <Paper style={{
            padding:0,
            margin:0,
            height:"100vh",
            backgroundColor:'#fafafa'
        }}
        elevation={0}
        >
            <AppBar color='primary' position='static' style={{height:'64px'}} >
                <Toolbar>
                    <Typography color='inherit'>TODOS WITH HOOKS</Typography>
                </Toolbar>
                <Grid container justifyContent='center' style={{marginTop:'1rem'}}>
                    <Grid item xs={11} md={8} lg={4}>
                        <TodoForm addtodo={addtodo}/>
                        <TodoList todos={todos} removeTodo={removeTodo} done={done} edit={edit} />
                    </Grid>
                </Grid>    
            </AppBar>

        </Paper>
    )
}

export default TodoApp;