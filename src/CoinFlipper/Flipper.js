import React, { Component } from 'react'
import Img from './Img'
import head from './head.jpeg'
import tail from './tail.jpeg'



class Flipper extends Component {
    
    static defaultProps={
        imgArr:[
            {side:'head', src:head},
            {side:'tail', src:tail}
        ]
    }
    constructor(props) {
        super(props)
       
        this.state={
            imgsrc:'',
            head:0,
            tail:0,
            count:0,
            altValue:''
        }
        
        this.handleClick=this.handleClick.bind(this);
    }
    
    handleClick(){
        let index=Math.floor(Math.random()*this.props.imgArr.length);
        
        this.setState({imgsrc:this.props.imgArr[index].src,altValue:this.props.imgArr[index].side});
        this.setState(currstate=>(
            {count:currstate.count+1,
             head:this.props.imgArr[index].src===head?currstate.head+1:currstate.head,
             tail:this.props.imgArr[index].src===tail?currstate.tail+1:currstate.tail}
        ))
    }
    render() {
        return (
            <div>
                <h1>Let's flip a coin</h1>
                <Img src={this.state.imgsrc} altValue={this.state.altValue}/>
                <button onClick={this.handleClick}>Flip Me!</button>
                <p>Out of {this.state.count} flips,there have been {this.state.head} heads and {this.state.tail} tails</p>
            </div>
        )
    }
}

export default Flipper
