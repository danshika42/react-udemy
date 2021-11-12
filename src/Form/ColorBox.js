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

    remove(id){
        this.setState({
            values:this.state.values.filter((box)=>box.id!==id)
        })
    }
    render() {
        let boxes=this.state.values.map(box=>{
            return <Box height={box.height} width={box.width} bgColor={box.bgColor} key={box.id} id={box.id} remove={()=>this.remove(box.id)}/>
        })
        return (
            <div>
                <ColorBoxForm handleBox={this.handleBox}/>
                {boxes}
            </div>
        )
    }
}

export default ColorBox
