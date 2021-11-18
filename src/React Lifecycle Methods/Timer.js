import React, { Component } from 'react'
import axios from 'axios'
class Timer extends Component {
    constructor(props) {
        super(props)
        console.log('In Constructor')
        this.state = {
             time:new Date()
        }
    }
    componentDidMount(){
        console.log('In ComponentDidMount');
        setInterval(()=>{
            this.setState({
                time:new Date()
            })
        },1000);
    }
    render() {
        console.log('In Render')
        return (
            <div>
                <h1>{this.state.time.getSeconds()}</h1>
            </div>
        )
    }
}

export default Timer
