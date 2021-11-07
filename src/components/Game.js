import React, {Component} from 'react'

class Game extends Component{
    constructor(props){
        super(props);
        this.state={
            score:10,
            gameOver:false,
        }
        console.log(this.props.name);
    }
    render(){
        return(
            <div>
                <h1>Your Score Is : {this.state.score}</h1>
            </div>
        )
    }
}

export default Game;