import React, { Component } from 'react'

class Box extends Component {
    render() {
       return (
            <div className='Box' style={{
                height:this.props.height,
                width:this.props.width,
                backgroundColor:this.props.bgColor
            }}>
                
            </div>
        )
    }
}

export default Box
