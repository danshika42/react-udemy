import React, { Component } from 'react'

class Box extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    render() {
       return (
            <div className='Box'>
                <div style={{
                height:this.props.height,
                width:this.props.width,
                backgroundColor:this.props.bgColor
                 }}>
                <button onClick={this.props.remove}>X</button>
                </div>
            </div>
        )
    }
}

export default Box
