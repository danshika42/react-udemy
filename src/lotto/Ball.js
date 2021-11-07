import React, { Component } from 'react'

class Ball extends Component {
    render() {
        return (
            <div className="Ball">
                <h1>{this.props.value}</h1>
            </div>
        )
    }
}

export default Ball
