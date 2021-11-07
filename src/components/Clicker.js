import React, { Component } from 'react'

class Clicker extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             number:1
        }
        this.random=this.random.bind(this);
    }
    random(){
        let rand=Math.floor(Math.random()*10)+1;
        this.setState({number:rand});
    }
    render() {
        return (
            <div>
                <h1>Number is : {this.state.number}</h1>
                {
                this.state.number ===7?
                <h1>You Win!!</h1>:
                <button onClick={this.random}>Click</button>
                }
                
            </div>
        )
    } 
}

export default Clicker
