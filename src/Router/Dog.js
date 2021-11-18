import React, { Component } from 'react'

class Dog extends Component {
    constructor(props) {
        super(props)
        console.log('Constructor')
    }
    componentDidMount(){
        console.log('DidMount')
    }
    componentWillUnmount(){
        console.log('Will Unmount')
    }
    render() {
        console.log('Render')
        return (
            <div>
                <h1>Hello I am Dog</h1>
                <h3>This dog is named :{this.props.name}</h3>
            </div>
        )
    }
}

export default Dog
