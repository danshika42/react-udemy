import React, { Component } from 'react'
import uuid from 'uuid/v4'
import ColorBoxForm from './ColorBoxForm'
import Box from './Box'

class ColorBox extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             values:[]
        }
        this.handleBox=this.handleBox.bind(this);
    }
    
    handleBox(item){
        let newitem={...item,id:uuid()}
        this.setState(
            currState=>(
                {values:[...currState.values,newitem]}
            )
        )
    }
    render() {
        return (
            <div>
                <ColorBoxForm handleBox={this.handleBox}/>
                {this.state.values.map(box=>{
                    return <Box height={box.height} width={box.width} bgColor={box.bgColor}/>
                })}
            </div>
        )
    }
}

export default ColorBox
