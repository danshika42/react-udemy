import React, { Component } from 'react'
import Ball from './Ball'
import './Lottery.css'

class Lottery extends Component {
    static defaultProps = {
        title:"Lottery",
        maxBalls:6,
        maxNum:40
    }

    constructor(props) {
        super(props)
    
        this.state = {
             nums:Array.from({length:this.props.maxBalls})
        }
        this.handleClick=this.handleClick.bind(this);
    }

    handleClick(){
            this.setState(
                currState=>{
                    return {nums:currState.nums.map( n=>Math.floor(Math.random()*this.props.maxNum)+1 )}
              }
            )
    }
    
    render() {
        let balls=this.state.nums.map(n=> <Ball value={n}/>);
        return (
            <div className="Lottery">
                <h1>{this.props.title}</h1>
                <div className="Lottery-balls">
                   {balls}
                </div>
                <button onClick={this.handleClick}>Generate</button>
            </div>
        )
    }
}

export default Lottery
