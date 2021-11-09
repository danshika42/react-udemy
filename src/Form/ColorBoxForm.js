import React, { Component } from 'react'

class ColorBoxForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             height:'',
             width:'',
             bgColor:''
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.handleBox(this.state);
        this.setState({
            height:'',
            width:'',
            bgColor:''
        })
    }
    
    render() {
        return (
            <div className='ColorBoxForm'>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='height'>Height</label>
                    <input 
                        id='height'
                        name='height'
                        value={this.state.height}
                        placeholder='Height'
                        onChange={this.handleChange}
                    />
                    <label htmlFor='width'>Width</label>
                    <input 
                        id='width'
                        name='width'
                        value={this.state.width}
                        placeholder='Width'
                        onChange={this.handleChange}
                    />
                    <label htmlFor='bgColor'>Background Color</label>
                    <input 
                        id='bgColor'
                        name='bgColor'
                        type='text'
                        value={this.state.bgColor}
                        placeholder='Background Color'
                        onChange={this.handleChange}
                    />
                   <button>Add a new box!</button>
                </form>
            </div>
        )
    }
}

export default ColorBoxForm
