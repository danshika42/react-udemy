import React, { Component } from 'react'

class ShoppingForm extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name:'',
             qty:''
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    
    handleSubmit(e){
        e.preventDefault();
        this.props.addItem(this.state);
        this.setState({
            name:'',
            qty:''
        })
    }

    handleChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='name'>Name : </label>
                    <input 
                        id='name'
                        name='name'
                        value={this.state.name}
                        placeholder='Name'
                        onChange={this.handleChange}
                    ></input>
                    <label htmlFor='qty'>Quantity : </label>
                    <input 
                        id='qty'
                        name='qty'
                        value={this.state.qty}
                        placeholder='Quantity'
                        onChange={this.handleChange}
                    ></input> 
                    <button>Add Item</button>
                </form> 
            </div>
        )
    }
}

export default ShoppingForm
