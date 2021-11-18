import React, { Component } from 'react'
import Todo from './Todo'
import Todoform from './TodoForm'
// import uuid from 'uuid/v4'

class Todolist extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             todo:[]
            //  {todo:"hello",id:uuid()}
        } 
        this.handleTodo=this.handleTodo.bind(this);
        this.edit=this.edit.bind(this);
    }
    
    handleTodo(todo){
        this.setState({todo:[...this.state.todo,todo]})
    }

    remove(key){
        this.setState({
            todo:this.state.todo.filter(todo=>todo.id!==key)
        })
    }
    // componentDidUpdate(prevProps,prevState){
    //     console.log('In componentDidUpdate');
    //     console.log(prevState.todo)
    //     console.log(this.state.todo)
    // }
    edit(id,updatedTodo){
        const newTodo=this.state.todo.map(todon=>{
            if(todon.id===id){

                return {...todon,todo:updatedTodo};
            }
            return todon;
        })
        this.setState({
            todo:newTodo
        })
    }
    render() {
        let todo=this.state.todo.map(todo=>{
            return <Todo todo={todo.todo} key={todo.id} id={todo.id} remove={this.remove.bind(this,todo.id)} edit={this.edit}/>
        })
        return ( 
            <div className='Todo'>
                <h1>Todo List!</h1>
                {todo}
                <h5>New Todo</h5>
                <Todoform handleTodo={this.handleTodo} />
            </div>
        )
    }
}

export default Todolist
