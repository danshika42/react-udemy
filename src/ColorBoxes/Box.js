import React, { Component } from 'react'
import {choice} from './Helper';

class Box extends Component {
     
    static defaultProps={
        allColors: ["purple", "magenta", "violet", "pink","green","grey","blue"]
    }
    
    constructor(props) {
        super(props)
     
        this.state = {
             bgColor:choice(this.props.allColors)
        }
        this.handleClick=this.handleClick.bind(this);
    }
    
    handleClick(){
        let newColor;
        do{
            newColor=choice(this.props.allColors); 
        }while(newColor===this.state.bgColor)
        this.setState({bgColor:newColor});
    }
    
    render() {
        return (
            <div className='Box' style={{backgroundColor:this.state.bgColor,
                                        width:'200px' , 
                                        height:'200px'
                                        }} onClick={this.handleClick}>
                 
            </div>
        )
    }
}

export default Box
