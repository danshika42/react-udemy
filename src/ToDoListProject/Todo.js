import React, { Component } from 'react'
// import Todoform from './TodoForm'

class Todo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isEditing:false,
             task:this.props.todo,
             isComplete:false
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleUpdate=this.handleUpdate.bind(this);
        this.handleEdit=this.handleEdit.bind(this);
        this.handleComplete=this.handleComplete.bind(this);
    }

    // componentDidUpdate(prevProps,prevState){
    //     console.log('In Todo componentDidUpdate')
    //     console.log(prevProps.todo)
    //     console.log(this.props.todo)
    // }
    componentWillUnmount(){
        console.log('Component will unmount');
    }

    handleComplete(){
        this.setState({
            isComplete:!this.state.isComplete
        })
    }
    handleEdit(){
        this.setState({
            isEditing:!this.state.isEditing
        })
    }
    handleUpdate(e){
        e.preventDefault();
        this.props.edit(this.props.id,this.state.task)
        this.setState({
            isEditing:!this.state.isEditing
        })
    }
    handleChange(e){
        this.setState({
            task:e.target.value
        })
    }
    render() {
        let strike;
        if(this.state.isComplete){
            strike='line-through'
        }else{
            strike='auto'
        }
        
        let result;
        if(this.state.isEditing) {
          result=(
        <div>
          <form onSubmit={this.handleUpdate}>
            <input
                type='text'
                value={this.state.task}
                name='task'
                onChange={this.handleChange}
            />
            <button>Save</button>
          </form>
        </div>)
        } else {
          result = (
          <div>
              <p onClick={this.handleComplete} style={{textDecoration:strike,cursor:'pointer'}}>{this.props.todo}</p>
              {/* <button >Mark as Completed</button> */}
              <button onClick={this.handleEdit}>Edit</button>
              <button onClick={this.props.remove}>Remove</button>
          </div>
          );
        }
        return result;
           
        
    }
}

export default Todo
