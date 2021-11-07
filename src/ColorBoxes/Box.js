import React, { Component } from 'react'

class Box extends Component {
    
    render() {
        return (
            <div className='Box' style={{...this.props.Color,width:'200px' , height:'200px'}} onClick={this.props.click}>
                
            </div>
        )
    }
}

export default Box
