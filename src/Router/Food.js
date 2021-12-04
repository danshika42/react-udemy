import React, { Component } from 'react'
// import  from 'react-router-dom'
class Food extends Component {
    render() {
        const url=`https://source.unsplash.com/1600x900/?${this.props.name}`
        return (
            <div>
                <h1>I love to eat {this.props.name}</h1>
                <img src={url} alt={this.props.name} />
            </div>
        )
    }
}

export default Food
