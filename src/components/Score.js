import React, { Component } from 'react'

class Score extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             score:0
        }
        this.run=this.run.bind(this);
    }
    incrementScore(curState){
        return {score : curState.score+1};
    }
    run(){
        this.setState(this.incrementScore);
        this.setState(this.incrementScore);
        this.setState(this.incrementScore);
    }
    // run(){
    //     // this.setState({score:this.state.score+1})
    //     // this.setState({score:this.state.score+1})
    //     // this.setState({score:100})
    //     // this.setState(st=>{
    //     //     return{score:11};
    //     // })
        
    //     // this.setState(st=>{
    //     //     return{score:st.score+1};
    //     // })
       
    // }

    
    render() {
        return (
            <div>
                <h1>Your Score : {this.state.score}</h1>
                <button onClick={this.run}>Kill One</button>
            </div>
        )
    }
}

export default Score
