import React, { Component } from 'react'
import uuid from 'uuid/v4'
class TodoForm extends Component {
    static defaultProps={
        btnTitle:'Add Task'
    }
    constructor(props) {
        super(props)
    
        this.state = {
             todo:""  
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    handleChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleSubmit(e){
        e.preventDefault();
        let newstate={...this.state,id:uuid()};
        this.props.handleTodo(newstate);
        this.setState({
            todo:""
        })
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input id='todo'
                           name='todo' 
                           value={this.state.todo}
                           type='text' 
                           onChange={this.handleChange}
                    /> 
                    <button>{this.props.btnTitle}</button>  
                </form>
            </div>
        )
    }
}

export default TodoForm
