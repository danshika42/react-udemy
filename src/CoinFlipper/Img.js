import React, { Component } from 'react'

export class Img extends Component {
    render() {        
        return (
            <div>
                <img src={this.props.src} alt={this.props.altValue}/>
            </div>
        )
    }
}

export default Img
