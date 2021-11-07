import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            userName:"",
            email:"",
            password:""
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleChange(e){
        this.setState({ [e.target.name]:e.target.value});
    }

    handleSubmit(e){
        e.preventDefault();
        alert(`You have typed ${this.state.userName}`);
        this.setState({userName:""});
    }
    
    render() {
        return (
            <div>
                <h1>Form Demo</h1>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type='text' 
                        name='userName'
                        placeholder='username'
                        value={this.state.userName}
                        onChange={this.handleChange}
                    /> 
                      <input 
                        type='email'
                        name='email'
                        placeholder='email' 
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                      <input 
                        type='password' 
                        name='password'
                        placeholder='password'
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    <button>Submit!</button>
                </form>
            </div>
        )
    }
}

export default Form
