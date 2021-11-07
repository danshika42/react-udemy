import React, { Component } from 'react'

class BrokenClick2 extends Component {
    state={
        clicked:false
    };
    clickHandler=(e)=>{
        this.setState({
            clicked:true
        })
    }
    render() {
        return (
            <div>
               <p>{this.state.clicked?"Clicked":"Not Clicked"}</p> 
               <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default BrokenClick2
