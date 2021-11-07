import React, { Component } from 'react'
import Box from './Box'

class BoxContainer extends Component {
    static defaultProps={
        allColors: ["purple", "magenta", "violet", "pink"],
        numBoxes:18
    }
    constructor(props) {
        super(props)
    
        this.state = {
             bgColor:'purple'
        }
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick(){
        let index=Math.floor(Math.random()*this.props.allColors.length);
        this.setState({bgColor:this.props.allColors[index]});
    }
    
    render() {
        return (
            <div>
                <Box click={this.handleClick} Color={{backgroundColor:this.state.bgColor}}/>
            </div>

        )
    }
}

export default BoxContainer
